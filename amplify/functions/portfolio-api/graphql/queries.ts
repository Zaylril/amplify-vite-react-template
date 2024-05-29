/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPortfolio = /* GraphQL */ `query GetPortfolio($id: ID!) {
  getPortfolio(id: $id) {
    createdAt
    id
    name
    owner
    stocks {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPortfolioQueryVariables,
  APITypes.GetPortfolioQuery
>;
export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
    author
    content
    downs
    id
    title
    ups
    url
    version
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const getStock = /* GraphQL */ `query GetStock($id: ID!) {
  getStock(id: $id) {
    averagePrice
    createdAt
    currency
    id
    owner
    portfolio {
      createdAt
      id
      name
      owner
      updatedAt
      __typename
    }
    portfolioId
    shares
    ticker
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetStockQueryVariables, APITypes.GetStockQuery>;
export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listPortfolios = /* GraphQL */ `query ListPortfolios(
  $filter: ModelPortfolioFilterInput
  $limit: Int
  $nextToken: String
) {
  listPortfolios(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      name
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPortfoliosQueryVariables,
  APITypes.ListPortfoliosQuery
>;
export const listStocks = /* GraphQL */ `query ListStocks(
  $filter: ModelStockFilterInput
  $limit: Int
  $nextToken: String
) {
  listStocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      averagePrice
      createdAt
      currency
      id
      owner
      portfolioId
      shares
      ticker
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStocksQueryVariables,
  APITypes.ListStocksQuery
>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
