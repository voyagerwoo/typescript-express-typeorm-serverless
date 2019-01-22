import app from './app'
import * as serverless from 'serverless-http'

console.log("start App!!!");

export const handler = serverless(app);
