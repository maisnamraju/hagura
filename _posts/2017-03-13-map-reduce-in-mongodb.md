---
layout: post
title:  "Map Reduce using nodejs and mongodb (part 1)"
date:   2017-03-3 23:34:56 +0530
---

Aggregation is one of the best features of mongodb; it can break down large datasets and bring out useful data with a few lines of code but it is not always the best solution for every problem since `aggregation` only works on `arrays`.

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
The data above can be easily processed with an aggretaion pipeline, but if you have watched the presentations on the [mongodb blog](https://www.mongodb.com/blog/post/schema-design-for-time-series-data-in-mongodb) on how to store timeseries data, you will realize how complicated it is to actually retreive the data. In most of the cases, aggregation is not applicable for processing the data since aggregation only works with array type structures. 

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
However MongoDB has a mapreduce implemnentation that can break down such structure and help you extract your data using javascript code. It can break down large datasets like the one above into the result below. 

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
In  `figure 1`, the `timestamp` field represents the date and hour, while the values object stores the data inside the minute and seconds. Such a structure helps save a lot of storage space since you are saving up on a lot of characters. 

[Schema Design In Mongodb] (https://www.mongodb.com/blog/post/schema-design-for-time-series-data-in-mongodb) describes how to organize large data sets. 

`mapreduce` can be used to reconstruct the data inside `figure1` into the one on `figure2` 

[Continued here](http://blog.maisnamraju.com/2017/03/03/map-reduce-part2.html)



