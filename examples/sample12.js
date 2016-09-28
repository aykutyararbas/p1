var example = {
    jsonString : "{ :\"Aykut\", :  \"pas,:a\",:\"Yararbas\",:{:\"9440142 Lotland Ave\",:\"Cupertino\",:{:\"CA\",:95014,:{:3}},:[\"lorem\",\"ipsum\"]}, "+
    ":[{:\"9440142 Lotland Ave\",:\"\",:\"Cupertino\",:{:\"CA\",:95014,:[\"lorem\",\"ipsum\"]},:[\"aDory1\",\"aNemo\",\"abruce\"]},"+
    "{:\"9440143 2Lotland Ave\",:\"\",:\"Cupertino\",:{:\"CA\",:95014,:[\"lorem\",\"ipsum\"]},:[\"aDory2\",\"aNemo\",\"abruce\"]},"+
    " {:\"9440144 3rd lalalalaLotland Ave\",:\"\",:\"Cupertino\",:{:\"CA\",:95014,:[\"lorem\",\"ipsum\"]},:[\"aDory3\",\"aNemo\",\"abruce\"]}], "+
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
                                        "ipsum": ["string"]
                                    },
                        "adresses": [{
                                        "address1": "string",
                                        "address2": "string",
                                        "city": "string",
                                       "code" : {
                                            "state":"string",
                                             "zipcode": "number",
                                              "ipsum": ["string"]
                                       },
                                       "dory": ["string"]
                                    }
                                    ],
                        "comments": ['string'],
                         "ids": ["number"]            
                    }
    
    
}

module.exports = example;