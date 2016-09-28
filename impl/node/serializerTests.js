var serializer =  require('./serializer.js');

var jsonOrgExamples = require('../../examples/jsonorg/examples.js');

var glossarySchema = serializer.getSchema(jsonOrgExamples.glossary);
var glossaryMinified =  serializer.minify(jsonOrgExamples.glossary);

console.log("\nSchema from glossary_______________\n");
console.log(JSON.stringify(glossarySchema));
console.log("\nMinified from glossary_____________\n");
console.log(glossaryMinified);

console.log("\nTested serializer");