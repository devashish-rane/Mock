#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { SharedLocalStack } from "../lib/shared-local-stack";

const app = new cdk.App();

new SharedLocalStack(app, "SharedLocalStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT ?? "000000000000",
    region: process.env.CDK_DEFAULT_REGION ?? "us-east-1"
  }
});
