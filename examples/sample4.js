var example = {
    jsonString : "{ :\"Aykut\", :  \"pas,:a\",:\"Yararbas\",:{:\"9440142 Lotland Ave\",:\"Cupertino\",:\"CA\",:95014}, :[{:\"9440142 Lotland Ave\",:\"\",:\"Cupertino\",:\"CA\",:95014}]}",
    jsonStructure : {  
                        "name": "string",
                        "middlename": "string",
                        "lastname": "string",
                        "primary": {
                                        "address": "string", 
                                        "city": "string",
                                        "state":"string",
                                        "zipcode": "number"
                                    },
                        "adresses": [{
                                        "address1": "string",
                                        "address2": "string",
                                        "city": "string",
                                        "state":"string",
                                        "zipcode": "number"
                                    }
                                    ]
                    }
    
    
}

module.exports = example;