import type {
  APIGatewayProxyHandlerV2,
  APIGatewayProxyEventV2,
} from "aws-lambda";

//import { secret } from '@aws-amplify/backend';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '../../data/resource';
import { env } from '$amplify/env/api-function'; // replace with your function name
import { listStocks } from "./graphql/queries";


//npx ampx generate graphql-client-code --out ./amplify/functions/function-name/graphql

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT, // replace with your defineData name
        region: env.AWS_REGION,
        defaultAuthMode: 'identityPool'
      }
    }
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);

const client = generateClient<Schema>();

const handleGetTodos = async () => {
  // Logic for handling GET /todos

  const stuff = await client.graphql({
    query: listStocks,
  });

  //access secrets passed in via resource.ts
  //${env.FMP_API_KEY}
  //${env.TWELVE_API_KEY}

  return {
    statusCode: 200,
    // body: JSON.stringify([
    //   { id: 1, title: `hello` },
    //   { id: 2, title: `there` },
    // ]),
    body: JSON.stringify(stuff),
  };
};

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  console.log("event", event);

  // Modify the CORS settings below to match your specific requirements
  const headers = {
    "Access-Control-Allow-Origin": "*", // Restrict this to domains you trust
    "Access-Control-Allow-Headers": "*", // Specify only the headers you need to allow
  };

  const path = event.requestContext.http.path;

  if (event.requestContext.http.method === "GET") {
    switch (path) {
      case "/todos":
        return {
          ...(await handleGetTodos()),
          headers,
        };
      default:
        return {
          statusCode: 404, // Not Found
          headers,
          body: JSON.stringify(`Route ${path} not found`),
        };
    }
  } else {
    return {
      statusCode: 405, // Method Not Allowed
      headers,
      body: JSON.stringify(
        `Method ${event.requestContext.http.method} is not allowed`
      ),
    };
  }
};
