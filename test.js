// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'REGION'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  TableName: 'CUSTOMER_LIST',
  Item: {
        id: { S: event.request.userAttributes.sub },
    __typename: { S: 'User' },
    _lastChangedAt: { N: timestamp.toString() },
    meditateD: { N: "0" },
    friends: { SS: [{}] },
    createdAt: { S: now.toISOString() },
    sleepD: { N: "0" },
    email: {S: event.request.userAttributes.email},
    name: {S: event.userName},
    focusD: { N: "0" },
    _version: { N: "1" },
    updatedAt: { S: now.toISOString() },
    coins: { N: "0" },
    moveD: { N: "0" }
  }
};

// Call DynamoDB to add the item to the table
ddb.putItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});