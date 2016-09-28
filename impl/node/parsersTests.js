//Node 

//Import API

var mapper = require("./mapper.js") 
var parsers = require("./parsers.js")
//Import sample
var examplesFolder = "../../examples/";


//1 Simple key value
var example1 = require(examplesFolder+"sample1.js") 
//2 1+  array of numbers 
var example2 = require(examplesFolder+"sample2.js")
//3 2+ Array of 1 object 
var example3 = require(examplesFolder+"sample3.js")  
//4 3 + item of object
var example4 = require(examplesFolder+"sample4.js") 
// 4 + array of multiple objects
var example5 = require(examplesFolder+"sample5.js") 
//5 + array with simple strings and array with numbers
var example6 = require(examplesFolder+"sample6.js") 
//6 + nested object
var example7 = require(examplesFolder+"sample7.js") 
//7 + nested object within an array
var example8 = require(examplesFolder+"sample8.js") 
//8 + array in an object
var example9 = require(examplesFolder+"sample9.js") 
//9 + object in an object in an array
var example10 = require(examplesFolder+"sample10.js") 
//10 + array in an object in an array
var example11 = require(examplesFolder+"sample11.js") 
//11 + 4th level object
var example12 = require(examplesFolder+"sample12.js") 
//12 + 3rd level object  after an array
var example13 = require(examplesFolder+"sample13.js")
//13 + 3rd level object  after an array in an array
var example14 = require(examplesFolder+"sample14.js")
//14 + 3rd level object  after an array in an object in an array
var example15 = require(examplesFolder+"sample15.js")
//15 + array in an 4th level object  
var example16 = require(examplesFolder+"sample16.js")
//16 + + array in an object in an object in an array in an object  
var example17 = require(examplesFolder+"sample17.js")
// Start parsing object structure while constructing instance 



function parsing(example){

    var parser = null; 
    var parserMapping = mapper.map(example.jsonStructure);
    parsers.init(parserMapping,  example.jsonString.trim());

    console.log("Map "+JSON.stringify(example.jsonStructure));
    console.log("Input  "+example.jsonString);

    result = parsers.parse();
    console.log("------------ OUTPUT  --------------"); 
    console.log(JSON.stringify(result));

}

var from = 1;
var to = 17;
if(1 >= from && 1 <=to) {
    console.log("----- example1 ------------------------------")
    parsing(example1);
}
if(2 >=from && 2 <=to) {
    console.log("----- examplE2 ------------------------------")
    parsing(example2);
}

if(3 >= from && 3 <=to) {
    console.log("----- example3 ------------------------------")
    parsing(example3);
}

if(4 >= from  && 4 <=to) {
    console.log("----- example4 ------------------------------")
    parsing(example4);
}

if(5 >= from && 5 <=to) {
    console.log("----- example5 ------------------------------")
    parsing(example5);
}
if(6 >= from && 6 <=to) {
    console.log("----- example6 ------------------------------")
    parsing(example6);
}
if(7 >= from && 7 <=to) {
    console.log("----- example7 ------------------------------")
    parsing(example7);
}
if(8 >= from && 8 <=to) {
    console.log("----- example8 ------------------------------")
    parsing(example8);
}

if(9 >= from && 9 <=to) {
    console.log("----- example9 ------------------------------")
    parsing(example9);
}

if(10 >= from && 10 <=to) {
    console.log("----- example10 ------------------------------")
    parsing(example10);
}

if(11 >= from && 11 <=to) {
    console.log("----- example11 ------------------------------")
    parsing(example11);
}


if(12 >= from && 12 <=to) {
    console.log("----- example12 ------------------------------")
    parsing(example12);
}

if(13 >= from && 13 <=to) {
    console.log("----- example13 ------------------------------")
    parsing(example13);
}


if(14 >= from && 14 <=to) {
    console.log("----- example14 ------------------------------")
    parsing(example14);
}

if(15 >= from && 15 <=to) {
    console.log("----- example15------------------------------")
    parsing(example15);
}

if(16 >= from && 16 <=to) {
    console.log("----- example16------------------------------")
    parsing(example16);
}

if(17 >= from && 17 <=to) {
    console.log("----- example17------------------------------")
    parsing(example17);
}