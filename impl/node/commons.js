
var commons = { 
    //A value can be a string in double quotes, or a number, or true or false or null, or an object or an array. These structures can be nested.
 types : {
     STRING: 'string',
     NUMBER: 'number',
     OBJECT: 'object',
     ARRAY: 'array',
     BOOLEAN: 'boolean',
     NULL: null
 },
escapeCharacters : {
        "\"": "\"",
        "\\": "\\",
        "/": "/",
        b: "\b",
        f: "\f",
        n: "\n",
        r: "\r",
        t: "\t"
    },
 validtokens : /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g,
 valid: {
     object: /^{.*}$/,
     array:  /^[.*]$/
 }, 

 findType: function(obj){
     if(typeof obj === 'object'){
         //Is it array
         if(Array.isArray(obj)) return 'array';
         else return 'object';
     }
     return typeof obj;   
 }
}

module.exports = commons;