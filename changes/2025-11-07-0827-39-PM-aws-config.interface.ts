export interface AwsConfig {
  region: string;
  // mediaConvertEndpoint: string;
  mediaConvertRoleArn: string;
  snsPlatformApplicationArn: string;
  endpoint?: string;
}

export interface S3Config {
  buckets: {
    uploads: string;
    assets: string;
  };
}

export interface CloudFrontConfig {
  domain: string;
}