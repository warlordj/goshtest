import { Resource } from "sst";
import { Example } from "@gosh/core/example";

console.log(`${Example.hello()} Linked to ${Resource.MyBucket.name}.`);
