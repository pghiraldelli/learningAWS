# Lambda-s3

This is the code for the Amazon's [tutorial](https://docs.aws.amazon.com/lambda/latest/dg/with-s3-example.html) of a project using AWS Lambda with Amazon S3.

This tutorial teaches how to:
* Create an execution role
* Creates buckets
* Creates function
* Create a deployment package
* Test your Lambda function
* Configure Amazon S3 to publish events

##### To create the function
``` 
    $ aws lambda create-function --function-name CreateThumbnail --zip-file fileb://function.zip --handler index.handler --runtime nodejs8.10 --timeout 10 --memory-size 1024 --role arn:aws:iam::123456789012:role/lambda-s3-role
```

##### To test the function
```
    $ aws lambda invoke --function-name CreateThumbnail --invocation-type Event --payload file://inputfile.txt outputfile.txt
```