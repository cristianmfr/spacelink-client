/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Auth = {
  __typename?: 'Auth';
  /** Session access token */
  accessToken: Scalars['String']['output'];
  /** User logged in */
  user: User;
};

export type Company = {
  __typename?: 'Company';
  /** Creation date */
  createdAt: Scalars['DateTime']['output'];
  /** ID field */
  id: Scalars['ID']['output'];
  /** Name of the company */
  name: Scalars['String']['output'];
  /** Update date */
  updatedAt: Scalars['DateTime']['output'];
};

export type CompleteRegisterInput = {
  /** Name of the customer */
  paymentMethod: PaymentMethod;
  /** Name of the customer */
  token: Scalars['String']['input'];
};

export type CreateCustomerInput = {
  /** Company of the customer */
  companyId: Scalars['ID']['input'];
  /** Email of the customer */
  email: Scalars['String']['input'];
  /** Name of the customer */
  name: Scalars['String']['input'];
  /** Payment method of the customer */
  paymentMethod: PaymentMethod;
  /** Phone of the customer */
  phone: Scalars['String']['input'];
};

export type CreateUserInput = {
  /** Company of the user */
  company: Scalars['String']['input'];
  /** Email of the user */
  email: Scalars['String']['input'];
  /** Name of the user */
  name: Scalars['String']['input'];
  /** Password of the user */
  password: Scalars['String']['input'];
  /** Phone of the user */
  phone: Scalars['String']['input'];
};

export type Customer = {
  __typename?: 'Customer';
  /** Company of the customer */
  company: Company;
  /** Creation date */
  createdAt: Scalars['DateTime']['output'];
  /** Email of the customer */
  email: Scalars['String']['output'];
  /** ID field */
  id: Scalars['ID']['output'];
  /** Name of the customer */
  name: Scalars['String']['output'];
  /** Payment method of the customer */
  paymentMethod: PaymentMethod;
  /** Phone of the customer */
  phone: Scalars['String']['output'];
  /** Status of the customer */
  status: CustomerStatus;
  /** Token of the customer */
  token?: Maybe<Scalars['String']['output']>;
  /** Update date */
  updatedAt: Scalars['DateTime']['output'];
};

export enum CustomerStatus {
  Active = 'ACTIVE',
  Blocked = 'BLOCKED',
  PendingInvoice = 'PENDING_INVOICE',
  PendingRegister = 'PENDING_REGISTER'
}

export type Mutation = {
  __typename?: 'Mutation';
  completeCustomerRegister: Customer;
  createCustomer: Customer;
  createUser: User;
  deleteUser: User;
  signIn: Auth;
  updateCustomerStatus: Customer;
};


export type MutationCompleteCustomerRegisterArgs = {
  completeRegisterInput: CompleteRegisterInput;
};


export type MutationCreateCustomerArgs = {
  createCustomerInput: CreateCustomerInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  signInInput: SignInInput;
};


export type MutationUpdateCustomerStatusArgs = {
  updateStatusInput: UpdateCustomerStatus;
};

export enum PaymentMethod {
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  Pix = 'PIX'
}

export type Query = {
  __typename?: 'Query';
  getCurrentUser: User;
  getCustomer: Customer;
  getCustomers: Array<Customer>;
  getUser: User;
  getUserByEmail: User;
  getUserWallet: User;
  getUsers: Array<User>;
};


export type QueryGetCustomerArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserByEmailArgs = {
  email: Scalars['String']['input'];
};

export type SignInInput = {
  /** User e-mail */
  email: Scalars['String']['input'];
  /** User password */
  normalizedPassword: Scalars['String']['input'];
};

export type UpdateCustomerStatus = {
  /** Name of the customer */
  id: Scalars['ID']['input'];
  /** Name of the customer */
  status: CustomerStatus;
};

export type User = {
  __typename?: 'User';
  /** Available wallet of the user */
  availableWallet: Scalars['Float']['output'];
  /** Company of the user */
  company: Company;
  /** Creation date */
  createdAt: Scalars['DateTime']['output'];
  /** Email of the user */
  email: Scalars['String']['output'];
  /** ID field */
  id: Scalars['ID']['output'];
  /** Name of the user */
  name: Scalars['String']['output'];
  /** Phone of the user */
  phone: Scalars['String']['output'];
  /** Update date */
  updatedAt: Scalars['DateTime']['output'];
  /** Wallet of the user */
  wallet: Scalars['Float']['output'];
};
