---
layout: post
title:  "Aggregating Multiple Collections In MongoDB"
date:   2017-04-7 23:34:56 +0530
---

Some might assume that because of MongoDB's document type model, it might be very difficult to query data from various collections without using multiple callbacks or DBRefs. But lately, with the help of the `$lookup` feature available on 3.2 and above; it has become very easy to query data from multiple collections using a single query.

Let's assume we have a collection called `users` like the one below

```
{
   "_id": ObjectId("534009e4d852427820000002"),
   "name": "John Doe"  
}
```

and it is related to two other collections `colleges`

```
{
  "_id": Object("534009e4d852427820000003"),
  "name": "Stanford",
  "address": "Silicon Valley",
  "departments": ""
}
```

and `highschools`

```
{
  "_id": Object("534009e4e8524278200000123"),
  "name": "Xavier School of Excellence",
  "address": "somewhere in the xmen universe"
}
```

To be able to build a relationship between these three collections we could come up with a structure such as the one below.

```
{
   "_id": ObjectId("534009e4d852427820000002"),
   "name": "John Doe",
   "institutions": [{
      "_id": Object("534009e4e8524278200000123"),
      "type": "highschool"
     },
     {
       "_id": Object("534009e4d852427820000003"),
       "type": "college"
      }]  
}
```

Now the usual way to retreive data from the three collections would be to make use of the cursor approach where in we could do something like

```
db.users.find(query).forEach( function(user) {
      user.institutions.forEach(function(institute){
         switch(institute){
           case "highschool": ..query the highschool collection ;
           case "college": ...query the college collection.
         }
      });
  });
```

If the number of fields grow and as the data set increases, the number of callbacks might increase and the code might start getting out of hand especially in an environment like nodejs which would require a lot of promises or callbacks.

Though the performance may not improve; we can make use of the aggregation pipeline in MongoDB to query the data from multiple collections and reformat the data into format below which can otherwise be achieved using the loops approach but starts introducing a lot of callbacks or promises.

```
{
  "_id": ObjectId("534009e4d852427820000002"),
  "name": "John Doe",
  "institutions": [{
     "_id": Object("534009e4e8524278200000123"),
     "name": "Stanford",
     "address": "Silicon Valley",
     "departments": "",
     "type": "college"
    },
    {
      "_id": Object("534009e4d852427820000003"),
      "type": "highschool",
      "name": "Xavier School of Excellence",
      "address": "somewhere in the x-men universe"
     }]  
}
```

You could achieve the result above using the following approach

```
db.users.aggregate([
    { $match: query },
     { $unwind: {"path": "$institutions"} },
    { $project: {
            "name":1,
            "instituteId": "$institutions._id",
            "name": "$name",
            "instituteType": "$institutions.type"
            }
    },
    {
        $lookup: {
            "from": "highschools",
            "localField": "instituteId",
            "foreignField": "_id",
            "as": "highschools"
        }
    },
    {
        $lookup: {
            "from": "colleges",
            "localField": "instituteId",
            "foreignField": "_id",
            "as": "colleges"
        }
    },
    {
        $unwind: {
            "path": "$colleges",
            "preserveNullAndEmptyArrays": true
        }
    },
    {
        $unwind: {
            "path": "$highschools",
            "preserveNullAndEmptyArrays": true
        }
    },
    {
        $group: {
            "_id": "$_id",
            "name": {
                "$first": "$name"
            },
            "highschools": {
                "$addToSet": {
                    _id: "$highschools._id",
                    name: "$highschools.name",
                    "type": {
                        "$cond": {
                            "if": {
                                "$eq": ["$type", "highschool"]
                            },
                            "then": "highschool",
                            "else": null
                        }
                    }
                }
            },
            "colleges": {
                "$addToSet": {
                    _id: "$colleges._id",
                    name: "$college.name",
                    "type": {
                        "$cond": {
                            "if": {
                                "$eq": ["$type", "college"]
                            },
                            "then": "college",
                            "else": null
                        }
                    },
                    "address": "$college.aggress"
                }
            }
        }
    }, {
        "$project": {
            "_id": 1,
            "name": 1,
            "institutions": {
                "$setUnion": ["$colleges", "$highschools"]
            }
        }
    }, {
        "$project": {
            "_id": 1,
            "name": 1,
            institutions: {
                $filter: {
                    input: "$institutions",
                    as: "item",
                    cond: {
                        $ne: ["$$item.type", null]
                    }
                }
            }
        }
    }
]).toArray();
```

The last steps in the query were  probably the hardest ones to get right in a user case that I was working on but the query makes more sense while reading rather than running multiple for loops
