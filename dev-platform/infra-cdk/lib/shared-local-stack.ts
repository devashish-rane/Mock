import * as cdk from "aws-cdk-lib";
import { aws_dynamodb as dynamodb, aws_s3 as s3, aws_sqs as sqs } from "aws-cdk-lib";
import { Construct } from "constructs";

export class SharedLocalStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const artifactsBucket = new s3.Bucket(this, "SharedArtifactsBucket", {
      autoDeleteObjects: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    const eventsQueue = new sqs.Queue(this, "SharedEventsQueue", {
      visibilityTimeout: cdk.Duration.seconds(30)
    });

    const configTable = new dynamodb.Table(this, "SharedConfigTable", {
      partitionKey: {
        name: "configKey",
        type: dynamodb.AttributeType.STRING
      },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    new cdk.CfnOutput(this, "ArtifactsBucketName", {
      value: artifactsBucket.bucketName
    });

    new cdk.CfnOutput(this, "ArtifactsBucketArn", {
      value: artifactsBucket.bucketArn
    });

    new cdk.CfnOutput(this, "EventsQueueUrl", {
      value: eventsQueue.queueUrl
    });

    new cdk.CfnOutput(this, "EventsQueueArn", {
      value: eventsQueue.queueArn
    });

    new cdk.CfnOutput(this, "ConfigTableName", {
      value: configTable.tableName
    });

    new cdk.CfnOutput(this, "ConfigTableArn", {
      value: configTable.tableArn
    });
  }
}
