---
layout: post
title:  "call and apply in Javascript"
date:   2017-02-18 23:34:56 +0530
---

`call()` and `apply()` are probably two of the most useful Javascript methods out there which most developers seem to ignore. A while ago,I decided that I would try to improve my Javascript skills in order for me to write better code and I came across many pros mentioning the importance of these two methods.

Both of them pretty much do the same things, the only difference between the two is that `apply()` expects its argument to be a single array whereas `call` expects a bunch of arguments

```
var car = function(name,model){
	this.model = model;
	this.name = name;
}

var truck = function(name,color,model,year){
	 this.color = color;
	 this.year = year;
	 
	 console.log(this.color,this.year);
	 car.call(this,name,model);
   console.log(this.name,this.model);
}


truck('Chevy','red','Custom', 2012);
```

This sould print out 

``` 
	red 2012
	Chevy Custom
```
What we just did was bind the scope of car inside that of truck and this opens up many possibilities of using methods that are inside another function or class so in the end we end up writing less code. This kind of technique can be used with many built in datatypes in Javascript like `Strings`, `Arrays` and `Objects`; for example one of the most common applications of call is to convert arguments passed into a function.

```
function convertArugments(){
	console.log(arguments);
	console.log(Array.prototype.slice.call(arguments);
}

convertArguments(1,32,23,23,234234,1231212221);

```

```
{"0":1,"1":32,"2":23,"3":23,"4":234234,"5":1231212221}
[1,32,23,23,234234,1231212221]
```

The arguments that were passed came out with name value pairs in the first line because arguments are **array-like** where as the second line converts the array-like items into an array.

Now coming back to the first example again. We replace  ```car.call(this,name,model);``` with ``` car.apply(this,[name,model]);```

```
var car = function(name,model){
	this.model = model;
	this.name = name;
}

var truck = function(name,color,model,year){
	 this.color = color;
	 this.year = year;
	 
	 console.log(this.color,this.year);
	 car.apply(this,[name,model]);
   console.log(this.name,this.model);
}


truck('Chevy','red','Custom', 2012);
```

You will still get the same output, hence the only difference between the two is the manner in which they accept their arguments. 