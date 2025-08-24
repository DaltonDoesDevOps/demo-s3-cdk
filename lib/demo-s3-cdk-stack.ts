import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3'

export interface DemoS3CdkStackProps extends cdk.StackProps {
s3BucketName: string;
s3BlockPublicAccess: s3.BlockPublicAccess;
s3Encryption: s3.BucketEncryption;
s3RemovalPolicy: cdk.RemovalPolicy
s3Versioning: boolean;
};

export class DemoS3CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: DemoS3CdkStackProps) {
    super(scope, id, props);

    const demoBucket = new s3.Bucket(this, "DemoBucket", {
      bucketName: props.s3BucketName,
      blockPublicAccess: props.s3BlockPublicAccess,
      encryption: props.s3Encryption,
      removalPolicy: props.s3RemovalPolicy,
      versioned: props.s3Versioning,
    })
  }
}
