import { defineFunction, secret } from "@aws-amplify/backend";

export const myApiFunction = defineFunction({
  name: "api-function",
  environment: {
    FMP_API_KEY: secret("FMP_API_KEY"),
    TWELVE_API_KEY: secret("TWELVE_API_KEY"),
  },
});
