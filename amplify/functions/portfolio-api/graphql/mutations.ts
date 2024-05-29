/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const addPost = /* GraphQL */ `mutation AddPost(
  $author: String!
  $content: String
  $id: ID
  $title: String
  $url: String
) {
  addPost(
    author: $author
    content: $content
    id: $id
    title: $title
    url: $url
  ) {
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
` as GeneratedMutation<
  APITypes.AddPostMutationVariables,
  APITypes.AddPostMutation
>;
export const createPortfolio = /* GraphQL */ `mutation CreatePortfolio(
  $condition: ModelPortfolioConditionInput
  $input: CreatePortfolioInput!
) {
  createPortfolio(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreatePortfolioMutationVariables,
  APITypes.CreatePortfolioMutation
>;
export const createStock = /* GraphQL */ `mutation CreateStock(
  $condition: ModelStockConditionInput
  $input: CreateStockInput!
) {
  createStock(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateStockMutationVariables,
  APITypes.CreateStockMutation
>;
export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $condition: ModelTodoConditionInput
  $input: CreateTodoInput!
) {
  createTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const deletePortfolio = /* GraphQL */ `mutation DeletePortfolio(
  $condition: ModelPortfolioConditionInput
  $input: DeletePortfolioInput!
) {
  deletePortfolio(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeletePortfolioMutationVariables,
  APITypes.DeletePortfolioMutation
>;
export const deleteStock = /* GraphQL */ `mutation DeleteStock(
  $condition: ModelStockConditionInput
  $input: DeleteStockInput!
) {
  deleteStock(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteStockMutationVariables,
  APITypes.DeleteStockMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $condition: ModelTodoConditionInput
  $input: DeleteTodoInput!
) {
  deleteTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const updatePortfolio = /* GraphQL */ `mutation UpdatePortfolio(
  $condition: ModelPortfolioConditionInput
  $input: UpdatePortfolioInput!
) {
  updatePortfolio(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdatePortfolioMutationVariables,
  APITypes.UpdatePortfolioMutation
>;
export const updateStock = /* GraphQL */ `mutation UpdateStock(
  $condition: ModelStockConditionInput
  $input: UpdateStockInput!
) {
  updateStock(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateStockMutationVariables,
  APITypes.UpdateStockMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $condition: ModelTodoConditionInput
  $input: UpdateTodoInput!
) {
  updateTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
