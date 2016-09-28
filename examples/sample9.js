var example = {
    jsonString : "{ :\"Aykut\", :  \"pas,:a\",:\"Yararbas\",:{:\"9440142 Lotland Ave\",:\"Cupertino\",:{:\"CA\",:95014},:[\"lorem\",\"ipsum\"]}, :[{:\"9440142 Lotland Ave\",:\"\",:\"Cupertino\",:{:\"CA\",:95014}},{:\"9440143 2Lotland Ave\",:\"\",:\"Cupertino\",:{:\"CA\",:95014}}, {:\"9440144 3rd lalalalaLotland Ave\",:\"\",:\"Cupertino\",:{:\"CA\",:95014}}], :[\"Lorem\",\"ipsum\",\"Carpe\",\"diem\"],:[1,3,5,7,11,13,17]}",
    jsonStructure : {  
                        "name": "string",
                        "middlename": "string",
                        "lastname": "string",
                        "primary": {
                                        "address": "string", 
                                        "city": "string",
                                        "code" : {
                                            "state":"string",
                                            "zipcode": "number"
                                        },
                                        "ipsum": ["string"]
                                    },
                        "adresses": [{
                                        "address1": "string",
                                        "address2": "string",
                                        "city": "string",
                                       "code" : {
                                            "state":"string",
                                             "zipcode": "number"
                                       }
                                    }
                                    ],
                        "comments": ['string'],
                         "ids": ["number"]            
                    }
    
    
}

module.exports = example;