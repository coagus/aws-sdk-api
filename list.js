const AWS = require('aws-sdk');

//configuring the AWS environment
AWS.config.update({
    accessKeyId: "AKIAIAFJ22EBOBPVI73A",
    secretAccessKey: "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"
  });

var s3 = new AWS.S3();

var params = {
  Bucket: 'student-bucket-coagus',
  Delimiter: '/'
}

s3.listObjects(params, function(err, data) {
    if (err) {
      console.log("Error in:", err);
    } else {
      var albums = data.CommonPrefixes.map(function(commonPrefix) {
        var prefix = commonPrefix.Prefix;
        var albumName = decodeURIComponent(prefix.replace('/', ''));
        console.log(albumName);
      });
    }
    console.log(data);
});
