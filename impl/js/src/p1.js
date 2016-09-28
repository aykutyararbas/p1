/**
 * @Author Aykut Yararbas
 * @email ayararbas@gmail.com
 */

(function(){
    'use strict';

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
    var mapper = { 

    map : function(jsonStructure,parseItemsArray){ 
        if(!parseItemsArray) parseItemsArray = [];
        var propertyType = commons.findType(jsonStructure); 
            if(propertyType === 'string') return 'string';
            if(propertyType === 'number') return 'number';
            if(propertyType === 'boolean') return 'boolean';
            if(propertyType === 'null') return 'null';
        //TODO if it is [] of [] => [[[[[[[[]]]]]]]]
        for(var propertyName in jsonStructure) {
            propertyType = jsonStructure[propertyName]; 
            var parseObj={};
            
            switch(propertyType){
                case commons.types.STRING: {
                
                    parseObj[propertyName] = commons.types.STRING;
                    parseItemsArray.push(parseObj);
                    break;
                }
                case commons.types.NUMBER: {
                    parseObj[propertyName]  = commons.types.NUMBER;
                    parseItemsArray.push(parseObj);
                    break;
                }
                case commons.types.BOOLEAN: {
                    parseObj[propertyName]= commons.types.BOOLEAN;
                    parseItemsArray.push(parseObj);
                    break;
                }
                default: {
                    var type=commons.findType(propertyType);
                    if(type === 'object'){
                        var subitems = [];
                        var firstElem = jsonStructure[propertyName];
                            this.map(firstElem,subitems);
                            parseObj[propertyName] =  {
                                    type: 'object',
                                    items: subitems
                                };
                            
                        parseItemsArray.push(parseObj);
                    } else {
                        if(type === 'array'){ 
                            var firstElem = jsonStructure[propertyName][0];
                            if(typeof firstElem === 'object'){
                                var subitems = [];
                                    this.map(firstElem,subitems);
                                    parseObj[propertyName]=  {
                                    type: 'object',
                                    parentType: 'array',
                                    items: subitems
                                }
                                    
                            } else {
                                var elements = [] ;
                                for (var index = 0; index < propertyType.length; index++) {
                                    var element = propertyType[index];
                                    elements.push(element); 
                                }
                                parseObj[propertyName] = {
                                    type: 'array',
                                    items: elements
                                }
                            }
                            parseItemsArray.push(parseObj);
                        }
                    }
                }
            }
        }
        return parseItemsArray;
    }
    }

    /** This contains parsers for
 * ----------------------------
 * String 
 * number
 * object
 * array
 * boolean, null
 *  **/ 

var next = {
    at: 0,    // The index of the current character
    ch: " ",
    escapeCharacters: {
    "\"": "\"",
    "\\": "\\",
    "/": "/",
    b: "\b",
    f: "\f",
    n: "\n",
    r: "\r",
    t: "\t"
    },
    text: '', 
    atObject: 0,
    objectMapping: [],
    subObjectMappings: [],
   init: function(){
       this.at= 0;
       this.atObject = 0;
       this.ch = " ",
       this.text- '', 
       this.objectMapping.splice(0,this.objectMapping.length);
       this.subObjectMappings.splice(0,this.subObjectMappings.length); 
   },
    val: function (c) {
        // If a c parameter is provided, verify that it matches the current character.
        if (c && c !==this.ch) {
            error("Expected '" + c + "' instead of '" + this.ch + "'", 'next');
        }
        this.ch = this.text.charAt(this.at);
        this.at += 1;
        return this.ch;
    },
    key: function(){ 
         var parseObj, key = '';
        if(this.subObjectMappings.length > 0 ){
            // There is an item for next
            var current = this.subObjectMappings[this.subObjectMappings.length -1];
             parseObj =current.items[current.counter++];
             if(current.counter === current.items.length ) {
                 if(current.parentType === 'array'){
                     current.counter = 0; // Let array pop
                } else {
                     this.subObjectMappings.pop();
                }
             }
        } else {
            parseObj =this.objectMapping[this.atObject++];
        }
        for(var propertyName in parseObj){
            key = propertyName;
        }
        if(Array.isArray(parseObj[key]) || typeof parseObj[key] === 'object'){
           var parseItems = {'items': parseObj[key].items, 'counter': 0, type: parseObj[key].type};
            parseItems.parentType= parseObj[key].parentType || null;
            this.subObjectMappings.push(parseItems) ;
        }
        
        return key;
    }
};

var stringParser = function () {  
        // Parse a string value.
        var hex;
        var i;
        var value = "";
        var uffff;
    // When parsing for string values, we must look for " and \ characters.
     var next = parsers['next'];
    var white = parsers['white'];
    var string = parsers['string'];
        if (next.ch === "\"") {
            while (next.val()) {
                if (next.ch === "\"") {
                    next.val();
                    return value;
                }
                if (next.ch === "\\") {
                    next.val();
                    if (next.ch === "u") {
                        uffff = 0;
                        for (i = 0; i < 4; i += 1) {
                            hex = parseInt(next.val(), 16);
                            if (!isFinite(hex)) {
                                break;
                            }
                            uffff = uffff * 16 + hex;
                        }
                        value += String.fromCharCode(uffff);
                    } else if (typeof next.escapeCharacters[ch] === "string") {
                        value += next.escapeCharacters[ch];
                    } else {
                        break;
                    }
                } else {
                    value += next.ch;
                }
            }
        }
        error("Bad string",'stringParser');
    };

    var white = function () {
 // Skip whitespace
 var next = parsers['next'];
    while (next.ch && next.ch <= " ") {
        next.val();
    }
};
    
/**
 * true, false,null.
 */
var wordParser = function () {
     var next = parsers['next'];
    switch (next.ch) {
        case "t":
            next.val("t");
            next.val("r");
            next.val("u");
            next.val("e");
            return true;
        case "f":
            next.val("f");
            next.val("a");
            next.val("l");
            next.val("s");
            next.val("e");
            return false;
        case "n":
            next.val("n");
            next.val("u");
            next.val("l");
            next.val("l");
            return null;
        }
        parsers['error']("Unexpected '" + next.ch + "'",'wordParser');
};

/**
 * Parse an array value.
 */
var arrayParser = function () {
     var next = parsers['next'];
    var white = parsers['white'];
     var value = parsers['value'];
    var arr = []; 
    if (next.ch === "[") {
        next.val("[");
        white();
        if (next.ch === "]") {
            next.val("]");
            return arr;   // empty array
        }

        while (next.ch) {
            var curVal=value();
            arr.push(curVal);
            white();
            if (next.ch === "]") {
                next.val("]"); 
                next.subObjectMappings.pop();
                return arr;
            }  
            next.val(",");
            white();
        }
         
    }
    error("Bad array",'arrayParser');
};

/**
 *  Parse a number value.
 */
var numberParser = function () {
    var value;
    var string = "";
    var next = parsers['next'];
    if (next.ch === "-") {
        string = "-";
        next.val("-");
    }
    while (next.ch >= "0" && next.ch <= "9") {
        string += next.ch;
        next.val();
    }
    if (next.ch === ".") {
        string += ".";
        while (next.val() && next.ch >= "0" && next.ch <= "9") {
            string += next.ch;
        }
    }
    if (next.ch === "e" || next.ch === "E") {
        string += next.ch;
        next.val();
        if (next.ch === "-" || next.ch === "+") {
            string += next.ch;
            next.val();
        }
        while (next.ch >= "0" && next.ch <= "9") {
            string += next.ch;
            next.val();
        }
    }
    value = +string;
    if (!isFinite(value)) {
        error("Bad number");
    } else {
        return value;
    }
};

/**
 * Parse an object value.
 */
var objectParser = function () {
    var key;
    var obj = {};
    var next = parsers['next'];
    var white = parsers['white'];
    var string = parsers['string'];
    var value = parsers['value'];
    if (next.ch === "{") {
        next.val("{");
        white();
        if (next.ch === "}") {
            next.val("}");
            return obj;   // empty object
        }
        while (next.ch) {
            key = next.key(); 
            //GET THE KEY FROM THE OBJECT
            //GET THE EXPECTED VALUE TYPE FROM DEFINITION
            white();
            next.val(":");
            if (Object.hasOwnProperty.call(obj, key)) {
                error("Duplicate key '" + key + "'",'objectParser');
            }
            var curVal =  value();
            obj[key] = curVal;
            white();
            if (next.ch === "}") {
                next.val("}");
                return obj;
            }
            next.val(",");
            white();
        }
    }
    error("Bad object",'objectParser');
};

valueParser = function () {
    // Parse a JSON value. It could be an object, an array, a string, a number,
    // or a word. 
        parsers['white']();
        
         var next = parsers['next'];

        
        switch (next.ch) {
        case "{":
            return parsers['object']();
        case "[":
            return parsers['array']();
        case "\"":
            return parsers['string']();
        case "-":
            return parsers['number']();
        default:
            return (next.ch >= "0" && next.ch <= "9")
                ? parsers['number']()
                : parsers['word']();
        }
    };

/**
 *  Skip whitespace.
 */
var white = function () {
   var next = parsers['next'];
    while (next.ch && next.ch <= " ") {
        next.val();
    }
};


var error = function (m, from) {
    if(from) console.log(from);
     var next = parsers['next'];
// Call error when something is wrong.
        throw {
            name: "SyntaxError",
            message: m,
            at: next.at,
            text: next.text
        };
};

var init = function(_objectMapping, _text){
    parsers['next'].init();
    parsers['next'].objectMapping = _objectMapping;
    parsers['next'].text = _text;
}

var parse =  function(){
    return parsers['value'](); 
}

var parsers=[];
parsers['string'] = stringParser;
parsers['word'] = wordParser;
parsers['number'] = numberParser;
parsers['object'] = objectParser;
parsers['array'] = arrayParser; 
parsers['value'] = valueParser; 
parsers['white'] = white; 
parsers['next'] = next; 
parsers['error'] = error; 
parsers['init'] = init;
parsers['parse'] = parse;

function StringBuffer() {
    this.__strings__ = new Array;
};

StringBuffer.prototype.append = function (str) {
    this.__strings__.push(str);
    return this;
};

StringBuffer.prototype.toString = function () {
    return this.__strings__.join("");
};

var serializer = {
     

     getSchema: function (aJson){
        var propertyType = null;
        propertyType = commons.findType(aJson); 
        // Uses a json payload and creates mapping file 
        if(propertyType === 'string') return 'string';
        if(propertyType === 'number') return 'number';
        if(propertyType === 'boolean') return 'boolean';
        if(propertyType === 'null') return 'null';

        if(propertyType  === 'object'){
            var schemaObject= {};
            for(var propertyName in aJson) {
                    schemaObject[propertyName]= this.getSchema(aJson[propertyName]);
            }
            return schemaObject;
        } else {
             if(propertyType  === 'array'){
              var schemaObject= [];
              schemaObject.push(this.getSchema(aJson[0]));
              return schemaObject;
             }
        }
    },
    // Uses a json payload and scrubs metadata from out it returning pure data
    minify: function (aJson){
        var sb = new StringBuffer();
        propertyType = commons.findType(aJson); 
        // Uses a json payload and creates mapping file 
        if(propertyType === 'string') return JSON.stringify(aJson);
        if(propertyType === 'number') return JSON.stringify(aJson);
        if(propertyType === 'boolean') return JSON.stringify(aJson);
        if(propertyType === 'null') return JSON.stringify(aJson);
        if(propertyType  === 'array') {
            sb.append("[")
            for (i = 0; i < aJson.length; i++) { 
                if(i>0) sb.append(",");
                sb.append(this.minify(aJson[i]));
            }
            sb.append("]");
            return sb.toString();
        }
        if(propertyType  === 'object'){
            sb.append("{");
            var count=0;
            for(var propertyName in aJson) {
                if(count>0) sb.append(",");
                sb.append(":").append(this.minify(aJson[propertyName]));
                count ++;
            }
            sb.append("}");
            return sb.toString();
        } 
    }
}


});