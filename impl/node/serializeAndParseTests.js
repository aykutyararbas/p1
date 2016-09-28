var serializer =  require('./serializer.js');
var jsonOrgExamples = require('../../examples/jsonorg/examples.js');
var mapper = require("./mapper.js") 
var parsers = require("./parsers.js")

var glossarySchema = serializer.getSchema(jsonOrgExamples.glossary);
var glossaryMinified =  serializer.minify(jsonOrgExamples.glossary);

var parserMapping = mapper.map(glossarySchema);

parsers.init(parserMapping, glossaryMinified);
var result = parsers.parse(); 

console.log("------------ Original jsonOrgExamples glossary  --------------"); 
console.log(JSON.stringify(jsonOrgExamples.glossary));
console.log("Size "+JSON.stringify(jsonOrgExamples.glossary).length+" characters ");

console.log("------------ Transferred Minified  glossary  --------------"); 
console.log(glossaryMinified);
console.log("Size "+glossaryMinified.length+" characters ");

console.log("------------ Deserialized OUTPUT  --------------"); 
console.log(JSON.stringify(result));



var menuSchema = serializer.getSchema(jsonOrgExamples.menu);
var menuMinified =  serializer.minify(jsonOrgExamples.menu);

var parserMapping = mapper.map(menuSchema);

parsers.init(parserMapping, menuMinified);
var result = parsers.parse(); 

console.log("------------ Original jsonOrgExamples menu  --------------"); 
console.log(JSON.stringify(jsonOrgExamples.menu));
console.log("Size "+JSON.stringify(jsonOrgExamples.menu).length+" characters ");

console.log("------------ Transferred Minified  menu  --------------"); 
console.log(menuMinified);
console.log("Size "+menuMinified.length+" characters ");

console.log("------------ Deserialized OUTPUT  --------------"); 
console.log(JSON.stringify(result));

var widgetSchema = serializer.getSchema(jsonOrgExamples.widget);
var widgetMinified =  serializer.minify(jsonOrgExamples.widget);

var parserMapping = mapper.map(widgetSchema);

parsers.init(parserMapping, widgetMinified);
var result = parsers.parse(); 

console.log("------------ Original jsonOrgExamples widget  --------------"); 
console.log(JSON.stringify(jsonOrgExamples.widget));
console.log("Size "+JSON.stringify(jsonOrgExamples.widget).length+" characters ");

console.log("------------ Transferred Minified  widget  --------------"); 
console.log(widgetMinified);
console.log("Size "+widgetMinified.length+" characters ");

console.log("------------ Deserialized OUTPUT  --------------"); 
console.log(JSON.stringify(result));

// var webappSchema = serializer.getSchema(jsonOrgExamples.webapp);
// var webappMinified =  serializer.minify(jsonOrgExamples.webapp);

// var parserMapping = mapper.map(webappSchema);

// parsers.init(parserMapping, webappMinified);
// var result = parsers.parse(); 

// console.log("------------ Original jsonOrgExamples webapp  --------------"); 
// console.log(JSON.stringify(jsonOrgExamples.webapp));
// console.log("Size "+JSON.stringify(jsonOrgExamples.webapp).length+" characters ");

// console.log("------------ Transferred Minified  webapp  --------------"); 
// console.log(webappMinified);
// console.log("Size "+webappMinified.length+" characters ");

// console.log("------------ Deserialized OUTPUT  --------------"); 
// console.log(JSON.stringify(result));