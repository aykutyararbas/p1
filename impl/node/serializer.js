var commons = require("./commons.js")

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

module.exports =  serializer;
