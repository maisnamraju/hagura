---
layout: post
title:  "Map Reduce using nodejs and mongodb (part 1)"
date:   2017-03-3 23:34:56 +0530
---

Aggregation is one of the best features of mongodb; it helps break down large datasets and bring out useful data with a few lines of code but it is not always the best solution for every problem since `aggregation` only works on `arrays` or `array of objects`.

```
[{
	id: '2',
	name: 'Elii'
},
{
	id: '1',
	name: 'Elii'
}]
```
Aggregation however cannot process data that looks like the one below, it can't aggregate data from objects. 

[figure1](figure1)
```
{
  timestamp_hour: ISODate(“2013-10-10T23:00:00.000Z”),
  values: {
    1: { // minute 1
	  	 32: 1000000, // value at the 32 seconds 
	    37: 1000000,
	    38: 1500000,
    },
    2: {
	  	 3: 1000000,
	    10: 1000000,
	    20: 1500000,
    },
    … 
  }
}
```
[figure2](figure2)
```
{
  timestamp_hour: ISODate(“2013-10-10T23:01:01.000Z”),
  value: 10000
},
{
  timestamp_hour: ISODate(“2013-10-10T23:01:02.000Z”),
  value: 150000
}
```

The structure provides a more efficient way to aggregate the data inside mongodb and the structure above helps the data become more easily accessible and reduces the number of documnts inside a collection. 
The `timestamp` field stores the date and hour of the data, while the values object stores the data inside the minute and seconds. 

[Schema Design In Mongodb] (https://www.mongodb.com/blog/post/schema-design-for-time-series-data-in-mongodb) article on the mongodb blog explains it better on how to organize large data sets. 

`mapreduce` can help reconstruct the data inside `figure1` into `figure2` 



