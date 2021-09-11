
const aws = require("aws-sdk");
const ddb = new aws.DynamoDB();

const tableName = process.env.USERTABLE;

exports.handler = async (event) => {
  // event event.request.userAttributes.(sub, email)
  // insert code to be executed by your lambda trigger

  if (!event?.request?.attributes?.sub) {
    console.log("No sub provided");
    return;
  }

  const now = new Date();
  const timestamp = now.getTime();

  const userItem = {
    id: { S: event.request.attributes.sub },
    __typename: { S: 'User' },
    _lastChangedAt: { N: timestamp.toString() },
    meditateD: { N: "0" },
    friends: { SS: [] },
    createdAt: { S: now.toISOString() },
    sleepD: { N: "0" },
    email: {S: event.request.attributes.email},
    name: {S: event.request.username},
    focusD: { N: "0" },
    _version: { N: "1" },
    updatedAt: { S: now.toISOString() },
    coins: { N: "0" },
    moveD: { N: "0" }
  }

  const params = {
    Item: userItem,
    TableName: tableName
  };

  // save a new user to DynamoDB
  try {
    await ddb.putItem(params).promise();
    console.log("success");
  } catch (e) {
    console.log(e)
  }
};