export default {
    STRIPE_KEY: "pk_test_7EchutIleRiDPxwcskn88Qc300Mo2m3igy",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-bucketss"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://ferv1monr1.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_PYIDXKzK1",
      APP_CLIENT_ID: "1hhggjp40kf66vm3eluei86mgt",
      IDENTITY_POOL_ID: "us-east-1:5b3025a3-8f69-4256-afae-535b480e38e5"
    }
  };