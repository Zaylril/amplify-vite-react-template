/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Portfolio = {
  __typename: "Portfolio",
  createdAt: string,
  id: string,
  name: string,
  owner?: string | null,
  stocks?: ModelStockConnection | null,
  updatedAt: string,
};

export type ModelStockConnection = {
  __typename: "ModelStockConnection",
  items:  Array<Stock | null >,
  nextToken?: string | null,
};

export type Stock = {
  __typename: "Stock",
  averagePrice: number,
  createdAt: string,
  currency: string,
  id: string,
  owner?: string | null,
  portfolio?: Portfolio | null,
  portfolioId?: string | null,
  shares: number,
  ticker: string,
  updatedAt: string,
};

export type Post = {
  __typename: "Post",
  author: string,
  content?: string | null,
  downs?: number | null,
  id: string,
  title?: string | null,
  ups?: number | null,
  url?: string | null,
  version?: number | null,
};

export type Todo = {
  __typename: "Todo",
  content?: string | null,
  createdAt: string,
  id: string,
  owner?: string | null,
  updatedAt: string,
};

export type ModelPortfolioFilterInput = {
  and?: Array< ModelPortfolioFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelPortfolioFilterInput | null,
  or?: Array< ModelPortfolioFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelPortfolioConnection = {
  __typename: "ModelPortfolioConnection",
  items:  Array<Portfolio | null >,
  nextToken?: string | null,
};

export type ModelStockFilterInput = {
  and?: Array< ModelStockFilterInput | null > | null,
  averagePrice?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  currency?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelStockFilterInput | null,
  or?: Array< ModelStockFilterInput | null > | null,
  owner?: ModelStringInput | null,
  portfolioId?: ModelIDInput | null,
  shares?: ModelIntInput | null,
  ticker?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelTodoFilterInput = {
  and?: Array< ModelTodoFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTodoFilterInput | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelPortfolioConditionInput = {
  and?: Array< ModelPortfolioConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelPortfolioConditionInput | null,
  or?: Array< ModelPortfolioConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreatePortfolioInput = {
  id?: string | null,
  name: string,
};

export type ModelStockConditionInput = {
  and?: Array< ModelStockConditionInput | null > | null,
  averagePrice?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  currency?: ModelStringInput | null,
  not?: ModelStockConditionInput | null,
  or?: Array< ModelStockConditionInput | null > | null,
  owner?: ModelStringInput | null,
  portfolioId?: ModelIDInput | null,
  shares?: ModelIntInput | null,
  ticker?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateStockInput = {
  averagePrice: number,
  currency: string,
  id?: string | null,
  portfolioId?: string | null,
  shares: number,
  ticker: string,
};

export type ModelTodoConditionInput = {
  and?: Array< ModelTodoConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelTodoConditionInput | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTodoInput = {
  content?: string | null,
  id?: string | null,
};

export type DeletePortfolioInput = {
  id: string,
};

export type DeleteStockInput = {
  id: string,
};

export type DeleteTodoInput = {
  id: string,
};

export type UpdatePortfolioInput = {
  id: string,
  name?: string | null,
};

export type UpdateStockInput = {
  averagePrice?: number | null,
  currency?: string | null,
  id: string,
  portfolioId?: string | null,
  shares?: number | null,
  ticker?: string | null,
};

export type UpdateTodoInput = {
  content?: string | null,
  id: string,
};

export type ModelSubscriptionPortfolioFilterInput = {
  and?: Array< ModelSubscriptionPortfolioFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionPortfolioFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStockFilterInput = {
  and?: Array< ModelSubscriptionStockFilterInput | null > | null,
  averagePrice?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  currency?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionStockFilterInput | null > | null,
  owner?: ModelStringInput | null,
  portfolioId?: ModelSubscriptionIDInput | null,
  shares?: ModelSubscriptionIntInput | null,
  ticker?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionTodoFilterInput = {
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetPortfolioQueryVariables = {
  id: string,
};

export type GetPortfolioQuery = {
  getPortfolio?:  {
    __typename: "Portfolio",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    stocks?:  {
      __typename: "ModelStockConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    author: string,
    content?: string | null,
    downs?: number | null,
    id: string,
    title?: string | null,
    ups?: number | null,
    url?: string | null,
    version?: number | null,
  } | null,
};

export type GetStockQueryVariables = {
  id: string,
};

export type GetStockQuery = {
  getStock?:  {
    __typename: "Stock",
    averagePrice: number,
    createdAt: string,
    currency: string,
    id: string,
    owner?: string | null,
    portfolio?:  {
      __typename: "Portfolio",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    portfolioId?: string | null,
    shares: number,
    ticker: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type ListPortfoliosQueryVariables = {
  filter?: ModelPortfolioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPortfoliosQuery = {
  listPortfolios?:  {
    __typename: "ModelPortfolioConnection",
    items:  Array< {
      __typename: "Portfolio",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListStocksQueryVariables = {
  filter?: ModelStockFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStocksQuery = {
  listStocks?:  {
    __typename: "ModelStockConnection",
    items:  Array< {
      __typename: "Stock",
      averagePrice: number,
      createdAt: string,
      currency: string,
      id: string,
      owner?: string | null,
      portfolioId?: string | null,
      shares: number,
      ticker: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      content?: string | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AddPostMutationVariables = {
  author: string,
  content?: string | null,
  id?: string | null,
  title?: string | null,
  url?: string | null,
};

export type AddPostMutation = {
  addPost?:  {
    __typename: "Post",
    author: string,
    content?: string | null,
    downs?: number | null,
    id: string,
    title?: string | null,
    ups?: number | null,
    url?: string | null,
    version?: number | null,
  } | null,
};

export type CreatePortfolioMutationVariables = {
  condition?: ModelPortfolioConditionInput | null,
  input: CreatePortfolioInput,
};

export type CreatePortfolioMutation = {
  createPortfolio?:  {
    __typename: "Portfolio",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    stocks?:  {
      __typename: "ModelStockConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateStockMutationVariables = {
  condition?: ModelStockConditionInput | null,
  input: CreateStockInput,
};

export type CreateStockMutation = {
  createStock?:  {
    __typename: "Stock",
    averagePrice: number,
    createdAt: string,
    currency: string,
    id: string,
    owner?: string | null,
    portfolio?:  {
      __typename: "Portfolio",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    portfolioId?: string | null,
    shares: number,
    ticker: string,
    updatedAt: string,
  } | null,
};

export type CreateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeletePortfolioMutationVariables = {
  condition?: ModelPortfolioConditionInput | null,
  input: DeletePortfolioInput,
};

export type DeletePortfolioMutation = {
  deletePortfolio?:  {
    __typename: "Portfolio",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    stocks?:  {
      __typename: "ModelStockConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteStockMutationVariables = {
  condition?: ModelStockConditionInput | null,
  input: DeleteStockInput,
};

export type DeleteStockMutation = {
  deleteStock?:  {
    __typename: "Stock",
    averagePrice: number,
    createdAt: string,
    currency: string,
    id: string,
    owner?: string | null,
    portfolio?:  {
      __typename: "Portfolio",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    portfolioId?: string | null,
    shares: number,
    ticker: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: DeleteTodoInput,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdatePortfolioMutationVariables = {
  condition?: ModelPortfolioConditionInput | null,
  input: UpdatePortfolioInput,
};

export type UpdatePortfolioMutation = {
  updatePortfolio?:  {
    __typename: "Portfolio",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    stocks?:  {
      __typename: "ModelStockConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateStockMutationVariables = {
  condition?: ModelStockConditionInput | null,
  input: UpdateStockInput,
};

export type UpdateStockMutation = {
  updateStock?:  {
    __typename: "Stock",
    averagePrice: number,
    createdAt: string,
    currency: string,
    id: string,
    owner?: string | null,
    portfolio?:  {
      __typename: "Portfolio",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    portfolioId?: string | null,
    shares: number,
    ticker: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePortfolioSubscriptionVariables = {
  filter?: ModelSubscriptionPortfolioFilterInput | null,
  owner?: string | null,
};

export type OnCreatePortfolioSubscription = {
  onCreatePortfolio?:  {
    __typename: "Portfolio",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    stocks?:  {
      __typename: "ModelStockConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateStockSubscriptionVariables = {
  filter?: ModelSubscriptionStockFilterInput | null,
  owner?: string | null,
};

export type OnCreateStockSubscription = {
  onCreateStock?:  {
    __typename: "Stock",
    averagePrice: number,
    createdAt: string,
    currency: string,
    id: string,
    owner?: string | null,
    portfolio?:  {
      __typename: "Portfolio",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    portfolioId?: string | null,
    shares: number,
    ticker: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePortfolioSubscriptionVariables = {
  filter?: ModelSubscriptionPortfolioFilterInput | null,
  owner?: string | null,
};

export type OnDeletePortfolioSubscription = {
  onDeletePortfolio?:  {
    __typename: "Portfolio",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    stocks?:  {
      __typename: "ModelStockConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteStockSubscriptionVariables = {
  filter?: ModelSubscriptionStockFilterInput | null,
  owner?: string | null,
};

export type OnDeleteStockSubscription = {
  onDeleteStock?:  {
    __typename: "Stock",
    averagePrice: number,
    createdAt: string,
    currency: string,
    id: string,
    owner?: string | null,
    portfolio?:  {
      __typename: "Portfolio",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    portfolioId?: string | null,
    shares: number,
    ticker: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePortfolioSubscriptionVariables = {
  filter?: ModelSubscriptionPortfolioFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePortfolioSubscription = {
  onUpdatePortfolio?:  {
    __typename: "Portfolio",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    stocks?:  {
      __typename: "ModelStockConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateStockSubscriptionVariables = {
  filter?: ModelSubscriptionStockFilterInput | null,
  owner?: string | null,
};

export type OnUpdateStockSubscription = {
  onUpdateStock?:  {
    __typename: "Stock",
    averagePrice: number,
    createdAt: string,
    currency: string,
    id: string,
    owner?: string | null,
    portfolio?:  {
      __typename: "Portfolio",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    portfolioId?: string | null,
    shares: number,
    ticker: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};
