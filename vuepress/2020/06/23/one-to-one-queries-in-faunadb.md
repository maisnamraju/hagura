---
lastModified: '2020-06-23'
---

## Building a One-One Relationship query in faunadb

Faunadb is awesome when it comes to scalability and ease of administration but I had a few problems with fql as I couldn’t figure out how to do relationship queries and how to build schemas for it. Here are a few things things I learned. 

Let us assume we have two collections `Users` and `Role` with the following fields in mysql or a relational database

```
Users {
	“userId”:1,
	“name”: “John Doe”,
	“email”: “johndoe@gmail.com”,
	“roleId”: 1
}
```

and 

```
Roles {
       “roleId”: 1,
      	“name”: “Admin”,
	“permissions”:  [“read”,”write”,”execute”]
}
```

In the mongoldb world, I would use something like 
```
db.collection(‘Users’).aggregate([
	{
          $match : { userId: 1 }
        },{
	 $lookup: {
		from: ‘Roles’,
		localField: ‘roleId”,
                foreignField: ‘roleId”,
		as: “roles”	
           }
	}
])
```
or the code below in mysql

```
  SELECT users.*, roles.* FROM users JOIN roles  ON  users.roleId = roles.roleId WHERE users.userId = 1

```

This would give use the data from both tables/collections. 

In faunadb, however, the `roleId` and `userId` can be replaced with `Refs` that allow the documents to be referenced. So the query above can be written in faunadb in the following way 

```
         q.Let(
                    {
                      user: q.Get(q.Ref(q.Collection(‘Users’), 1)),
		      role: q.Get(
                        q.Select(
                          ['data’,’roleRef'],
                          q.Var(‘user’)
                        )
                      )                   
		  },
                    {
                      user: q.Var(‘user’),
                      role: q.Var(‘role’),
                    }
                  )
            )
```
but this necessitates that our schema be rearranged to 

```
Users {
	“name”: “John Doe”,
	“email”: “johndoe@gmail.com”,
	“roleRef”: <ref of the role> 
}
```

and 

```
Roles {
      	“name”: “Admin”,
	“permissions”:  [“read”,”write”,”execute”]
}
```

	This removes the need for a role id and a user id and we need to reference the `Ref` of the Role using `q.Ref(“Roles”, <refId of the document>)`. The query would result in the data below 

```
{
	user: {
			name: “John Doe”,
			email: “johndoe@gmail.com”,   
	},
	role: {
        	 	name: “Admin”,
		permissions:  [“read”,”write”,”execute”]
	}
}
```

The above can also be achieved in another way using the **earlier schema**. 

``` q.Let(
  {
    user: q.Get(q.Ref(q.Collection(‘Users’), 1)),
    role: q.Get(
      q.Ref(
        q.Collection(‘roles’),
        q.Select(
          [‘roleId'],
          q.Var(‘user’)
        )
      )
    )
  },
  {
    user: q.Var(‘user’),
    role: q.Var(‘role’)
  }
)
```

The above however requires work and increases the query complexity in my opinion. 

Thanks to Summer, April and Brecht from Fauna for helping me out with this. 

References:
https://forums.fauna.com/t/querying-a-one-to-one-relations-using-fql/232/6