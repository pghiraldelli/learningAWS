# CallCenterStateMachine

This is a project for the Amazon's tutorial for [Creating a Serverless Workflow
](https://aws.amazon.com/getting-started/tutorials/create-a-serverless-workflow-step-functions-lambda/) using Lambda functions. The project is based on a serverless application to automate handling of support tickets in a call center.

## Serverless step functions plugin

It is necessary to add a plugin for use the step functions with serverless in AWS.

To install the plugin:
```
    $ npm install --save-dev serverless-step-functions
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