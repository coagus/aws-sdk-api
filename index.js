const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
var http = require('http');

//configuring the AWS environment
AWS.config.update({
    accessKeyId: "AKIAIAFJ22EBOBPVI73A",
    secretAccessKey: "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"
  });

var s3 = new AWS.S3();
var filePath = "package.json";

//configuring parameters
var params = {
  Bucket: 'student-bucket-coagus',
  Body : fs.createReadStream(filePath),
  Key : Date.now()+"_"+path.basename(filePath)
};

s3.upload(params, function (err, data) {
  //handle error
  if (err) {
    console.log("Error", err);
  }

  //success
  if (data) {
    console.log("Uploaded in:", data.Location);
  }
});
