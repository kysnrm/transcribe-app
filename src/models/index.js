// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Segment } = initSchema(schema);

export {
  Segment
};