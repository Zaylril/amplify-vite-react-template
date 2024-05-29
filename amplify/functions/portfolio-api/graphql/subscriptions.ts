/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePortfolio = /* GraphQL */ `subscription OnCreatePortfolio(
  $filter: ModelSubscriptionPortfolioFilterInput
  $owner: String
) {
  onCreatePortfolio(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePortfolioSubscriptionVariables,
  APITypes.OnCreatePortfolioSubscription
>;
export const onCreateStock = /* GraphQL */ `subscription OnCreateStock(
  $filter: ModelSubscriptionStockFilterInput
  $owner: String
) {
  onCreateStock(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStockSubscriptionVariables,
  APITypes.OnCreateStockSubscription
>;
export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onCreateTodo(filter: $filter, owner: $owner) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onDeletePortfolio = /* GraphQL */ `subscription OnDeletePortfolio(
  $filter: ModelSubscriptionPortfolioFilterInput
  $owner: String
) {
  onDeletePortfolio(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePortfolioSubscriptionVariables,
  APITypes.OnDeletePortfolioSubscription
>;
export const onDeleteStock = /* GraphQL */ `subscription OnDeleteStock(
  $filter: ModelSubscriptionStockFilterInput
  $owner: String
) {
  onDeleteStock(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStockSubscriptionVariables,
  APITypes.OnDeleteStockSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onDeleteTodo(filter: $filter, owner: $owner) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onUpdatePortfolio = /* GraphQL */ `subscription OnUpdatePortfolio(
  $filter: ModelSubscriptionPortfolioFilterInput
  $owner: String
) {
  onUpdatePortfolio(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePortfolioSubscriptionVariables,
  APITypes.OnUpdatePortfolioSubscription
>;
export const onUpdateStock = /* GraphQL */ `subscription OnUpdateStock(
  $filter: ModelSubscriptionStockFilterInput
  $owner: String
) {
  onUpdateStock(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStockSubscriptionVariables,
  APITypes.OnUpdateStockSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onUpdateTodo(filter: $filter, owner: $owner) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
