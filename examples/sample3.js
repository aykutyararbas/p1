var example = {
    jsonString : "{ :\"Aykut\", :  \"pas,:a\",:\"Yararbas\",:[{:\"9440142 Lotland Ave\",:\"\",:\"Cupertino\",:\"CA\",:95014}]}",
    jsonStructure : {  
                        "name": "string",
                        "middlename": "string",
                        "lastname": "string",
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