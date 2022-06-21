// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Customer, Todo } = initSchema(schema);

export {
  Customer,
  Todo
};