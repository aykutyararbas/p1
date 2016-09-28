JSON with Schema 

Aykut Yararbas
ayararbas@gmail.com

2016-19-10


JSON is a light-weight, language independent, data interchange format.
See http://www.JSON.org/

JSON became a built-in feature of JavaScript when the ECMAScript Programming
Language Standard.

#p1 
## Abstract 

p1 is designed to optimize JSON file transfer by providing a schema for JSON  and transferring only data portion of 
json, while reconstructing JSON object at the target using  a schema.

It can help minimize payload size, increase transfer rate, 
and systemically would be more secure by not providing metatada together with the paylod.

PREREQUISITE : 
Array items need to be of same type. Different types or types of objects within array are not supported.

Sample performance gains using  JSON Org example json models;

Glossary example :
Original json size in characters    : 360
Transferred json size in characters : 223 

Menu example :
Original json size in characters    : 183
Transferred json size in characters : 101

Widget example :
Original json size in characters    : 389
Transferred json size in characters : 220

Webapp example :
Original json size in characters    : 2710
Transferred json size in characters : 1332

You also need to add one time transfer cost of schema json.
Net gain will increase exponentially as you transfer more objects with same schema.


#Impl
node folder contains scripts to be used with node json

#Usage
## Sender side 
## Create schema
var schemaJSON = serializer.getSchema(aJSON);
// Transfer schemaJSON
## Minify JSON
var minifiedJSONString = serializer.minify(aJSON); 
//Transfer minified json string


## Receiver side
## Parse minified using schema
var parserMapping = mapper.map(schemaJSON);
parsers.init(parserMapping, minifiedJSONString);

var result = parsers.parse(); 



# Licensing
The BSD License
See LICENSE file
