# CallCenterStateMachine

This is a project for the Amazon's tutorial for [Creating a Serverless Workflow
](https://aws.amazon.com/getting-started/tutorials/create-a-serverless-workflow-step-functions-lambda/) using Lambda functions. The project is based on a serverless application to automate handling of support tickets in a call center.

## Serverless step functions plugin

It is necessary to add a plugin for use the step functions with serverless in AWS.

To install the plugin:
```
    $ npm install --save-dev serverless-step-functions
```

## Some useful reference

- https://serverless.com/blog/how-to-manage-your-aws-step-functions-with-serverless/
- https://serverless.com/plugins/serverless-step-functions/