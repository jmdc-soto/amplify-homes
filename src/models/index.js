// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { URL, CUSTOMER } = initSchema(schema);

export {
  URL,
  CUSTOMER
};