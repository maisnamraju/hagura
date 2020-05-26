---
lastModified:   '2017-03-18'
---

## Map Reduce using nodejs and mongodb (part 2)

[Example code](https://github.com/maisnamraju/mapreduce-nodejs)

Mapreduce is pretty much supported in all mongodb libraries inside nodejs with the exception of `mongorito`; In our case, we are going to be using the native mongodb drivers inside mongodb as it is closest to native mongodb.

```
npm install mongodb
```

To generate the data set, I have made use of the following function that generates the data and inserts it into mongodb

```
let count = 0;
let arrayData = [];

while(count <= 6 ) {
 var data = generateData();
 arrayData.push({
    "hour": new Date(2017,1,1,count),
 	"minutesSecondsData": data
 });
 count++; 
 db.collection('example').insertMany(arrayData).then( () => {
 	console.log('data inserted');
 });
}

function generateData(){
      var minutesData = {}; 
      var minutes = 1;
      while(minutes <= 59) {
        var seconds = 1;
        minutesData[minutes] = {};
        while (seconds <= 59){
          minutesData[minutes][seconds] = getRandomInt(2,100);
          seconds++;
        }
         minutes++;
      }
      return minutesData;
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

```

```
db.collection.mapReduction(map,reduce,options);
```
mongodb matches the query from inside the options object, it provides us with a couple of options that can be useful for processing and performance but we are concerned with only two options i.e the `query` and the `out` properties. More information about the other properties can be found on the mongodb documentation [http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#mapReduce](http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#mapReduce)

```
  {
		query: { hour: { '$gte': new Date(2017,0,1) } },		out: {
			replace: 'outputCollection'
		}
	}
```
The query is self explanatory, the second part `out` can be used to either replace the data inside the collection or can be stored to a new collection like in our example. 


The actual mapreduce function is spread into two parts, the first process called the map function behaves as if it receives one row of data matched from our query at a time i.e one document at a time thus allowing us to simplify our code quite a bit. 

For the purpose of this example, we will calculate the total and the average of the values per day. 
 
```
function mapFunction(){
	let total = 0;
	let average = 0;
	for(let minute of this.minutesSecondsData){
		for(let second of this.minutesSecondsData[minute]){
			total += this.minutesSecondsData[minute][second];
		}
	}
	average = total/360;
	let date = this.hour.setHours(0);
	emit(date,{ total: total, average: average });
}
```
After calculating the values we pass the values into the emit function which sort of acts like an aggregator for the data we process and groups the data with similar keys.

```
emit(key,value);
```

The next part, the reduce function returns all the values with the same keys from the map function that we emitted. The `date` variable passed into our `emit()` method is our key in this case. 

```
	emit(date,{ total: total, average: average });
```	
The reduce method will now return all the values with the same date i.e our key from the map function along with all the `average` and `total` values pushed into a seperate array as it's argument. 

```
function reduceFunction(key,values){
	let final = { total: 0, average: 0 }
	for(let item in values ){
	   final.total += item.total;
	   average.total +=item.average;
	}
	final.average = final.average/values.length;
	return final;
}
```
Finally, we return the total and average per day by adding the values passed into the reduce function. 

The final output would contain the total and the average of the values per day 

```
{ 
 "_id" : ISODate("2017-02-01T00:30:00.000+0000"), 
 "value" : {
        "total" : 1.0, 
        "average" : 1.0
 }
}
```

