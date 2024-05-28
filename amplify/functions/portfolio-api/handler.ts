import type {
  APIGatewayProxyHandlerV2,
  APIGatewayProxyEventV2,
} from "aws-lambda";

const handleGetTodos = async () => {
  // Logic for handling GET /todos
  return {
    statusCode: 200,
    body: JSON.stringify([
      { id: 1, title: "Todo 1" },
      { id: 2, title: "Todo 2" },
    ]),
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
