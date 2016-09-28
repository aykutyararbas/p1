
var commons = require("./commons.js")
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

module.exports =  mapper