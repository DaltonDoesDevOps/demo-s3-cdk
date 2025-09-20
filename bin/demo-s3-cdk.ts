#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { DemoS3CdkStack } from "../lib/demo-s3-cdk-stack";
import * as s3 from "aws-cdk-lib/aws-s3";

const app = new cdk.App();
new DemoS3CdkStack(app, "DemoS3CdkStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  s3BucketName: "dalton-does-dev-ops-demo-bucket",
  s3BlockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
  s3Encryption: s3.BucketEncryption.S3_MANAGED,
  s3RemovalPolicy: cdk.RemovalPolicy.DESTROY,
  s3Versioning: true,
});
