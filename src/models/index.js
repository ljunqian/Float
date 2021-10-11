// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MTX, User } = initSchema(schema);

export {
  MTX,
  User
};