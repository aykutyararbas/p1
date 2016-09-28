var example = {
    jsonString : "{ :\"Aykut\", :  \"pas,:a\",:\"Yararbas\",:{:\"9440142 Lotland Ave\",:\"Cupertino\",:{:\"CA\",:95014,:{:11113}},:[\"lorem\",\"ipsum\"],:{:3222,:[\"ola\",\"oley\"]}}, "+
    ":[{:\"9440142 Lotland Ave\",:\"\",:\"Cupertino\",:{:\"CA\",:95014,:[\"lorem\",\"ipsum\"],:{:15,:[\"arrola\",\"arroley\"]}},:[\"aDory1\",\"aNemo\",\"abruce\"],:{:3}},"+
    "{:\"9440143 2Lotland Ave\",:\"\",:\"Cupertino\",:{:\"CA\",:95014,:[\"lorem\",\"ipsum\"],:{:15,:[\"arrola\",\"arroley\"]}},:[\"aDory2\",\"aNemo\",\"abruce\"],:{:3}},"+
    " {:\"9440144 3rd lalalalaLotland Ave\",:\"\",:\"Cupertino\",:{:\"CA\",:95014,:[\"lorem\",\"ipsum\"],:{:15,:[\"arrola\",\"arroley\"]}},:[\"aDory3\",\"aNemo\",\"abruce\"],:{:3}}], "+
    ":[\"Lorem\",\"ipsum\",\"Carpe\",\"diem\"],:[1,3,5,7,11,13,17]}",
    jsonStructure : {  
                        "name": "string",
                        "middlename": "string",
                        "lastname": "string",
                        "primary": {
                                        "address": "string", 
                                        "city": "string",
                                        "code" : {
                                            "state":"string",
                                            "zipcode": "number",
                                            "data": {
                                                "type": "string"
                                            }
                                        },
                                        "ipsum": ["string"],
                                         "data": {
                                                "type": "string",
                                                "olas": ["string"]
                                            }
                                    },
                        "adresses": [{
                                        "address1": "string",
                                        "address2": "string",
                                        "city": "string",
                                       "code" : {
                                            "state":"string",
                                             "zipcode": "number",
                                              "ipsum": ["string"],
                                               "data": {
                                                "type": "string",
                                                 "olas": ["string"]
                                            }
                                       },
                                       "dory": ["string"],
                                        "data": {
                                                "type": "string"
                                            }
                                    }
                                    ],
                        "comments": ['string'],
                         "ids": ["number"]            
                    }
    
    
}

module.exports = example;

