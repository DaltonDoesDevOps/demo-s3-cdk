#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { DemoS3CdkStack } from '../lib/demo-s3-cdk-stack';
import * as s3 from 'aws-cdk-lib/aws-s3'

const app = new cdk.App();
new DemoS3CdkStack(app, 'DemoS3CdkStack', {
s3BucketName: "demo-bucket",
s3BlockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
s3Encryption: s3.BucketEncryption.S3_MANAGED,
s3RemovalPolicy: cdk.RemovalPolicy.RETAIN,
s3Versioning: false,
});