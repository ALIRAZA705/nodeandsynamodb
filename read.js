var AWS = require("aws-sdk");
let awsConfig = {
    "region" : "eu-central-1" ,
    "endpoint" : "http://dynamodb.eu-central-1.amazonaws.com",
    "accesskeyId":"AKIAJJIRLMCKRKGD3WOA" , "secretAccesskey":"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"

};
AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();
// let fetchOneBykey = function(){
    var params ={
        TableName : "users",
        Key :{
            "email_id" :"aliraza30028@gmail.com"
        }
    };
    docClient.get(params,function(err,data)
    {
        if(err){
            console.log("users:fetchOneBykey:error -" + JSON.stringify(err,null,2));

        }
        else{
            console.log("users:fetchOneBykey:error -" + JSON.stringify(data,null,2));
 
        }
    });
// }