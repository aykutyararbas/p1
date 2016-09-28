Make sure you loaded p1.js

#Usage
## Sender side 
## Create schema
var schemaJSON = serializer.getSchema(aJSON);
// Transfer schemaJSON
## Minify JSON
var minifiedJSONString = serializer.minify(aJSON); 
//Transfer minified json string

## Receiver side
## Deserialize minified json using schema
## Create mapping using schemaJSON
var parserMapping = mapper.map(schemaJSON);
#Initialize parser using mapping and minifiedJSONString
parsers.init(parserMapping, minifiedJSONString);
#Parse the result
var result = parsers.parse(); 


