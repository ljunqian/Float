const aws = require("aws-sdk");
const ddb = new aws.DynamoDB();

const tableName = process.env.USERTABLE;

exports.handler = async (event) => {
  // event event.request.userAttributes.(sub, email)
  // insert code to be executed by your lambda trigger

  console.log(event);

  if (!event?.request?.userAttributes?.sub) {
    console.log("No sub provided");
    return;
  }

  const now = new Date();
  const timestamp = now.getTime();

  const userItem = {
    "id": { S: event.request.userAttributes.sub },
    "__typename": { S: "User" },
    "_lastChangedAt": { N: timestamp.toString() },
    "meditateD": { N: "0" },
    "friends": { L: [] },
    "createdAt": { S: now.toISOString() },
    "sleepD": { N: "0" },
    "backgroundEquipped": { S: "" },
    "focusD": { N: "0" },
    "_version": { N: "1" },
    "accessoryEquipped": { S: "" },
    "updatedAt": { S: now.toISOString() },
    "coins": { N: "0" },
    "moveD": { N: "0" },
    "hatEquipped": { S: "" }
  }

  const params = {
    Item: userItem,
    TableName: tableName
  };

  console.log(userItem);
  console.log(params);

  // save a new user to DynamoDB
  try {
    await ddb.putItem(params).promise();
    console.log("success");
  } catch (e) {
    console.log(e)
  }
};