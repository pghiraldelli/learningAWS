'use strict';

module.exports.index = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({hello: 'serverless world!'}),
  };
};
