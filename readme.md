# AWS tutorials

This is a repository to store the code from the Amazon's tutorials to learn AWS lambda functions and other services involved.

This will be separated into folders for every example and it will contain it's own readme with the explanation.

## Serverless framework

Some of the projects use [serverless](https://serverless.com/) for building and operating serverless applications and these are some of the commands.

To install serverless:
```
    $ npm install -g serverless
```

To create and deploy a new service/project:
```
    $ serverless
```

To configure credentials, using an user created in your provider:
```
    $ serverless config credentials --provider ${PROVIDER} --key ${KEY} --secret ${SECRET}
```

To deploy:
```
    $ serverless deploy
```