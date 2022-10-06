//how to compare two JSON have the same properties without order?
//false
var obj1 = { name: "persson 1",age:5 };
var obj2 = { age:5, name: "person 1" };
console.log(JSON.stringify(obj1)===JSON.stringify(obj2));

var obj5 = { name: "person3",age:25 };
var obj6 = { name: "person 2",age:25};
console.log(JSON.strigify(obj5)===JSON.stringify(obj6));


//ture
var obj3 = { name:"person 1",age:5 };
var obj4 = { name: "person 1",age:5 };
console.log(JSON.stringify(obj3)===JSON.stringify(obj4));

var obj7 = {name: "person 2",age:25 }; 
var obj8 = {name: "person 2",age:25 }; 
console.log(JSON.stringify(obj7)===JSON.stringify(obj8));
