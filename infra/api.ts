import { bucket } from "./storage";

export const myApi = new sst.aws.Function("MyApi", {
  handler: "packages/functions/src/api.handler"
});
