/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** Date type */
  Date: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
};

export type Comment = {
  __typename?: "Comment";
  Employee: Maybe<Employee>;
  Report: Maybe<Report>;
  content: Scalars["String"]["output"];
  date: Scalars["Date"]["output"];
  employee_id: Scalars["ID"]["output"];
  id: Scalars["ID"]["output"];
  report_id: Scalars["ID"]["output"];
};

export type CommentFilter = {
  content: InputMaybe<Scalars["String"]["input"]>;
  content_gt: InputMaybe<Scalars["String"]["input"]>;
  content_gte: InputMaybe<Scalars["String"]["input"]>;
  content_lt: InputMaybe<Scalars["String"]["input"]>;
  content_lte: InputMaybe<Scalars["String"]["input"]>;
  content_neq: InputMaybe<Scalars["String"]["input"]>;
  date: InputMaybe<Scalars["Date"]["input"]>;
  date_gt: InputMaybe<Scalars["Date"]["input"]>;
  date_gte: InputMaybe<Scalars["Date"]["input"]>;
  date_lt: InputMaybe<Scalars["Date"]["input"]>;
  date_lte: InputMaybe<Scalars["Date"]["input"]>;
  date_neq: InputMaybe<Scalars["Date"]["input"]>;
  employee_id: InputMaybe<Scalars["ID"]["input"]>;
  employee_id_neq: InputMaybe<Scalars["ID"]["input"]>;
  id: InputMaybe<Scalars["ID"]["input"]>;
  id_neq: InputMaybe<Scalars["ID"]["input"]>;
  ids: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  q: InputMaybe<Scalars["String"]["input"]>;
  report_id: InputMaybe<Scalars["ID"]["input"]>;
  report_id_neq: InputMaybe<Scalars["ID"]["input"]>;
};

export type CommentInput = {
  content: Scalars["String"]["input"];
  date: Scalars["Date"]["input"];
  employee_id: Scalars["ID"]["input"];
  report_id: Scalars["ID"]["input"];
};

export type Constellation = {
  __typename?: "Constellation";
  Satellites: Maybe<Array<Maybe<Satellite>>>;
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type ConstellationFilter = {
  description: InputMaybe<Scalars["String"]["input"]>;
  description_gt: InputMaybe<Scalars["String"]["input"]>;
  description_gte: InputMaybe<Scalars["String"]["input"]>;
  description_lt: InputMaybe<Scalars["String"]["input"]>;
  description_lte: InputMaybe<Scalars["String"]["input"]>;
  description_neq: InputMaybe<Scalars["String"]["input"]>;
  id: InputMaybe<Scalars["ID"]["input"]>;
  id_neq: InputMaybe<Scalars["ID"]["input"]>;
  ids: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  name: InputMaybe<Scalars["String"]["input"]>;
  name_gt: InputMaybe<Scalars["String"]["input"]>;
  name_gte: InputMaybe<Scalars["String"]["input"]>;
  name_lt: InputMaybe<Scalars["String"]["input"]>;
  name_lte: InputMaybe<Scalars["String"]["input"]>;
  name_neq: InputMaybe<Scalars["String"]["input"]>;
  q: InputMaybe<Scalars["String"]["input"]>;
};

export type ConstellationInput = {
  description: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
};

export type Contact = {
  __typename?: "Contact";
  Employee: Maybe<Employee>;
  GroundStation: Maybe<GroundStation>;
  Payload: Maybe<Payload>;
  Satellite: Maybe<Satellite>;
  configuration: Scalars["JSON"]["output"];
  date: Scalars["Date"]["output"];
  employee_id: Scalars["ID"]["output"];
  executionScript: Scalars["String"]["output"];
  groundStation_id: Scalars["ID"]["output"];
  id: Scalars["ID"]["output"];
  payload_id: Maybe<Scalars["ID"]["output"]>;
  satellite_id: Scalars["ID"]["output"];
  type: Scalars["String"]["output"];
};

export type ContactFilter = {
  configuration: InputMaybe<Scalars["JSON"]["input"]>;
  configuration_neq: InputMaybe<Scalars["JSON"]["input"]>;
  date: InputMaybe<Scalars["Date"]["input"]>;
  date_gt: InputMaybe<Scalars["Date"]["input"]>;
  date_gte: InputMaybe<Scalars["Date"]["input"]>;
  date_lt: InputMaybe<Scalars["Date"]["input"]>;
  date_lte: InputMaybe<Scalars["Date"]["input"]>;
  date_neq: InputMaybe<Scalars["Date"]["input"]>;
  employee_id: InputMaybe<Scalars["ID"]["input"]>;
  employee_id_neq: InputMaybe<Scalars["ID"]["input"]>;
  executionScript: InputMaybe<Scalars["String"]["input"]>;
  executionScript_gt: InputMaybe<Scalars["String"]["input"]>;
  executionScript_gte: InputMaybe<Scalars["String"]["input"]>;
  executionScript_lt: InputMaybe<Scalars["String"]["input"]>;
  executionScript_lte: InputMaybe<Scalars["String"]["input"]>;
  executionScript_neq: InputMaybe<Scalars["String"]["input"]>;
  groundStation_id: InputMaybe<Scalars["ID"]["input"]>;
  groundStation_id_neq: InputMaybe<Scalars["ID"]["input"]>;
  id: InputMaybe<Scalars["ID"]["input"]>;
  id_neq: InputMaybe<Scalars["ID"]["input"]>;
  ids: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  payload_id: InputMaybe<Scalars["ID"]["input"]>;
  payload_id_neq: InputMaybe<Scalars["ID"]["input"]>;
  q: InputMaybe<Scalars["String"]["input"]>;
  satellite_id: InputMaybe<Scalars["ID"]["input"]>;
  satellite_id_neq: InputMaybe<Scalars["ID"]["input"]>;
  type: InputMaybe<Scalars["String"]["input"]>;
  type_gt: InputMaybe<Scalars["String"]["input"]>;
  type_gte: InputMaybe<Scalars["String"]["input"]>;
  type_lt: InputMaybe<Scalars["String"]["input"]>;
  type_lte: InputMaybe<Scalars["String"]["input"]>;
  type_neq: InputMaybe<Scalars["String"]["input"]>;
};

export type ContactInput = {
  configuration: Scalars["JSON"]["input"];
  date: Scalars["Date"]["input"];
  employee_id: Scalars["ID"]["input"];
  executionScript: Scalars["String"]["input"];
  groundStation_id: Scalars["ID"]["input"];
  payload_id: InputMaybe<Scalars["ID"]["input"]>;
  satellite_id: Scalars["ID"]["input"];
  type: Scalars["String"]["input"];
};

export type Customer = {
  __typename?: "Customer";
  Employee: Maybe<Employee>;
  Payloads: Maybe<Array<Maybe<Payload>>>;
  email: Scalars["String"]["output"];
  employee_id: Scalars["ID"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type CustomerFilter = {
  email: InputMaybe<Scalars["String"]["input"]>;
  email_gt: InputMaybe<Scalars["String"]["input"]>;
  email_gte: InputMaybe<Scalars["String"]["input"]>;
  email_lt: InputMaybe<Scalars["String"]["input"]>;
  email_lte: InputMaybe<Scalars["String"]["input"]>;
  email_neq: InputMaybe<Scalars["String"]["input"]>;
  employee_id: InputMaybe<Scalars["ID"]["input"]>;
  employee_id_neq: InputMaybe<Scalars["ID"]["input"]>;
  id: InputMaybe<Scalars["ID"]["input"]>;
  id_neq: InputMaybe<Scalars["ID"]["input"]>;
  ids: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  name: InputMaybe<Scalars["String"]["input"]>;
  name_gt: InputMaybe<Scalars["String"]["input"]>;
  name_gte: InputMaybe<Scalars["String"]["input"]>;
  name_lt: InputMaybe<Scalars["String"]["input"]>;
  name_lte: InputMaybe<Scalars["String"]["input"]>;
  name_neq: InputMaybe<Scalars["String"]["input"]>;
  q: InputMaybe<Scalars["String"]["input"]>;
};

export type CustomerInput = {
  email: Scalars["String"]["input"];
  employee_id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type Employee = {
  __typename?: "Employee";
  Comments: Maybe<Array<Maybe<Comment>>>;
  Contacts: Maybe<Array<Maybe<Contact>>>;
  Customers: Maybe<Array<Maybe<Customer>>>;
  Reports: Maybe<Array<Maybe<Report>>>;
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  role: Scalars["String"]["output"];
};

export type EmployeeFilter = {
  email: InputMaybe<Scalars["String"]["input"]>;
  email_gt: InputMaybe<Scalars["String"]["input"]>;
  email_gte: InputMaybe<Scalars["String"]["input"]>;
  email_lt: InputMaybe<Scalars["String"]["input"]>;
  email_lte: InputMaybe<Scalars["String"]["input"]>;
  email_neq: InputMaybe<Scalars["String"]["input"]>;
  id: InputMaybe<Scalars["ID"]["input"]>;
  id_neq: InputMaybe<Scalars["ID"]["input"]>;
  ids: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  name: InputMaybe<Scalars["String"]["input"]>;
  name_gt: InputMaybe<Scalars["String"]["input"]>;
  name_gte: InputMaybe<Scalars["String"]["input"]>;
  name_lt: InputMaybe<Scalars["String"]["input"]>;
  name_lte: InputMaybe<Scalars["String"]["input"]>;
  name_neq: InputMaybe<Scalars["String"]["input"]>;
  q: InputMaybe<Scalars["String"]["input"]>;
  role: InputMaybe<Scalars["String"]["input"]>;
  role_gt: InputMaybe<Scalars["String"]["input"]>;
  role_gte: InputMaybe<Scalars["String"]["input"]>;
  role_lt: InputMaybe<Scalars["String"]["input"]>;
  role_lte: InputMaybe<Scalars["String"]["input"]>;
  role_neq: InputMaybe<Scalars["String"]["input"]>;
};

export type EmployeeInput = {
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  role: Scalars["String"]["input"];
};

export type GroundStation = {
  __typename?: "GroundStation";
  Contacts: Maybe<Array<Maybe<Contact>>>;
  Reports: Maybe<Array<Maybe<Report>>>;
  coordinates: Array<Maybe<Scalars["Float"]["output"]>>;
  id: Scalars["ID"]["output"];
  image: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  network: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
};

export type GroundStationFilter = {
  coordinates: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  coordinates_neq: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  id: InputMaybe<Scalars["ID"]["input"]>;
  id_neq: InputMaybe<Scalars["ID"]["input"]>;
  ids: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  image: InputMaybe<Scalars["String"]["input"]>;
  image_gt: InputMaybe<Scalars["String"]["input"]>;
  image_gte: InputMaybe<Scalars["String"]["input"]>;
  image_lt: InputMaybe<Scalars["String"]["input"]>;
  image_lte: InputMaybe<Scalars["String"]["input"]>;
  image_neq: InputMaybe<Scalars["String"]["input"]>;
  name: InputMaybe<Scalars["String"]["input"]>;
  name_gt: InputMaybe<Scalars["String"]["input"]>;
  name_gte: InputMaybe<Scalars["String"]["input"]>;
  name_lt: InputMaybe<Scalars["String"]["input"]>;
  name_lte: InputMaybe<Scalars["String"]["input"]>;
  name_neq: InputMaybe<Scalars["String"]["input"]>;
  network: InputMaybe<Scalars["String"]["input"]>;
  network_gt: InputMaybe<Scalars["String"]["input"]>;
  network_gte: InputMaybe<Scalars["String"]["input"]>;
  network_lt: InputMaybe<Scalars["String"]["input"]>;
  network_lte: InputMaybe<Scalars["String"]["input"]>;
  network_neq: InputMaybe<Scalars["String"]["input"]>;
  q: InputMaybe<Scalars["String"]["input"]>;
  status: InputMaybe<Scalars["String"]["input"]>;
  status_gt: InputMaybe<Scalars["String"]["input"]>;
  status_gte: InputMaybe<Scalars["String"]["input"]>;
  status_lt: InputMaybe<Scalars["String"]["input"]>;
  status_lte: InputMaybe<Scalars["String"]["input"]>;
  status_neq: InputMaybe<Scalars["String"]["input"]>;
};

export type GroundStationInput = {
  coordinates: Array<InputMaybe<Scalars["Float"]["input"]>>;
  image: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  network: Scalars["String"]["input"];
  status: Scalars["String"]["input"];
};

export type Launch = {
  __typename?: "Launch";
  Satellites: Maybe<Array<Maybe<Satellite>>>;
  date: Scalars["Date"]["output"];
  id: Scalars["ID"]["output"];
  outcome: Maybe<Scalars["String"]["output"]>;
  provider: Scalars["String"]["output"];
  rocket: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
};

export type LaunchFilter = {
  date: InputMaybe<Scalars["Date"]["input"]>;
  date_gt: InputMaybe<Scalars["Date"]["input"]>;
  date_gte: InputMaybe<Scalars["Date"]["input"]>;
  date_lt: InputMaybe<Scalars["Date"]["input"]>;
  date_lte: InputMaybe<Scalars["Date"]["input"]>;
  date_neq: InputMaybe<Scalars["Date"]["input"]>;
  id: InputMaybe<Scalars["ID"]["input"]>;
  id_neq: InputMaybe<Scalars["ID"]["input"]>;
  ids: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  outcome: InputMaybe<Scalars["String"]["input"]>;
  outcome_gt: InputMaybe<Scalars["String"]["input"]>;
  outcome_gte: InputMaybe<Scalars["String"]["input"]>;
  outcome_lt: InputMaybe<Scalars["String"]["input"]>;
  outcome_lte: InputMaybe<Scalars["String"]["input"]>;
  outcome_neq: InputMaybe<Scalars["String"]["input"]>;
  provider: InputMaybe<Scalars["String"]["input"]>;
  provider_gt: InputMaybe<Scalars["String"]["input"]>;
  provider_gte: InputMaybe<Scalars["String"]["input"]>;
  provider_lt: InputMaybe<Scalars["String"]["input"]>;
  provider_lte: InputMaybe<Scalars["String"]["input"]>;
  provider_neq: InputMaybe<Scalars["String"]["input"]>;
  q: InputMaybe<Scalars["String"]["input"]>;
  rocket: InputMaybe<Scalars["String"]["input"]>;
  rocket_gt: InputMaybe<Scalars["String"]["input"]>;
  rocket_gte: InputMaybe<Scalars["String"]["input"]>;
  rocket_lt: InputMaybe<Scalars["String"]["input"]>;
  rocket_lte: InputMaybe<Scalars["String"]["input"]>;
  rocket_neq: InputMaybe<Scalars["String"]["input"]>;
  status: InputMaybe<Scalars["String"]["input"]>;
  status_gt: InputMaybe<Scalars["String"]["input"]>;
  status_gte: InputMaybe<Scalars["String"]["input"]>;
  status_lt: InputMaybe<Scalars["String"]["input"]>;
  status_lte: InputMaybe<Scalars["String"]["input"]>;
  status_neq: InputMaybe<Scalars["String"]["input"]>;
};

export type LaunchInput = {
  date: Scalars["Date"]["input"];
  outcome: InputMaybe<Scalars["String"]["input"]>;
  provider: Scalars["String"]["input"];
  rocket: Scalars["String"]["input"];
  status: Scalars["String"]["input"];
};

export type ListMetadata = {
  __typename?: "ListMetadata";
  count: Maybe<Scalars["Int"]["output"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createComment: Maybe<Comment>;
  createConstellation: Maybe<Constellation>;
  createContact: Maybe<Contact>;
  createCustomer: Maybe<Customer>;
  createEmployee: Maybe<Employee>;
  createGroundStation: Maybe<GroundStation>;
  createLaunch: Maybe<Launch>;
  createManyComment: Maybe<Array<Maybe<Comment>>>;
  createManyConstellation: Maybe<Array<Maybe<Constellation>>>;
  createManyContact: Maybe<Array<Maybe<Contact>>>;
  createManyCustomer: Maybe<Array<Maybe<Customer>>>;
  createManyEmployee: Maybe<Array<Maybe<Employee>>>;
  createManyGroundStation: Maybe<Array<Maybe<GroundStation>>>;
  createManyLaunch: Maybe<Array<Maybe<Launch>>>;
  createManyPayload: Maybe<Array<Maybe<Payload>>>;
  createManyReport: Maybe<Array<Maybe<Report>>>;
  createManySatellite: Maybe<Array<Maybe<Satellite>>>;
  createPayload: Maybe<Payload>;
  createReport: Maybe<Report>;
  createSatellite: Maybe<Satellite>;
  removeComment: Maybe<Comment>;
  removeConstellation: Maybe<Constellation>;
  removeContact: Maybe<Contact>;
  removeCustomer: Maybe<Customer>;
  removeEmployee: Maybe<Employee>;
  removeGroundStation: Maybe<GroundStation>;
  removeLaunch: Maybe<Launch>;
  removePayload: Maybe<Payload>;
  removeReport: Maybe<Report>;
  removeSatellite: Maybe<Satellite>;
  updateComment: Maybe<Comment>;
  updateConstellation: Maybe<Constellation>;
  updateContact: Maybe<Contact>;
  updateCustomer: Maybe<Customer>;
  updateEmployee: Maybe<Employee>;
  updateGroundStation: Maybe<GroundStation>;
  updateLaunch: Maybe<Launch>;
  updatePayload: Maybe<Payload>;
  updateReport: Maybe<Report>;
  updateSatellite: Maybe<Satellite>;
};

export type MutationCreateCommentArgs = {
  content: Scalars["String"]["input"];
  date: Scalars["Date"]["input"];
  employee_id: Scalars["ID"]["input"];
  report_id: Scalars["ID"]["input"];
};

export type MutationCreateConstellationArgs = {
  description: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationCreateContactArgs = {
  configuration: Scalars["JSON"]["input"];
  date: Scalars["Date"]["input"];
  employee_id: Scalars["ID"]["input"];
  executionScript: Scalars["String"]["input"];
  groundStation_id: Scalars["ID"]["input"];
  payload_id: InputMaybe<Scalars["ID"]["input"]>;
  satellite_id: Scalars["ID"]["input"];
  type: Scalars["String"]["input"];
};

export type MutationCreateCustomerArgs = {
  email: Scalars["String"]["input"];
  employee_id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationCreateEmployeeArgs = {
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  role: Scalars["String"]["input"];
};

export type MutationCreateGroundStationArgs = {
  coordinates: Array<InputMaybe<Scalars["Float"]["input"]>>;
  image: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  network: Scalars["String"]["input"];
  status: Scalars["String"]["input"];
};

export type MutationCreateLaunchArgs = {
  date: Scalars["Date"]["input"];
  outcome: InputMaybe<Scalars["String"]["input"]>;
  provider: Scalars["String"]["input"];
  rocket: Scalars["String"]["input"];
  status: Scalars["String"]["input"];
};

export type MutationCreateManyCommentArgs = {
  data: InputMaybe<Array<InputMaybe<CommentInput>>>;
};

export type MutationCreateManyConstellationArgs = {
  data: InputMaybe<Array<InputMaybe<ConstellationInput>>>;
};

export type MutationCreateManyContactArgs = {
  data: InputMaybe<Array<InputMaybe<ContactInput>>>;
};

export type MutationCreateManyCustomerArgs = {
  data: InputMaybe<Array<InputMaybe<CustomerInput>>>;
};

export type MutationCreateManyEmployeeArgs = {
  data: InputMaybe<Array<InputMaybe<EmployeeInput>>>;
};

export type MutationCreateManyGroundStationArgs = {
  data: InputMaybe<Array<InputMaybe<GroundStationInput>>>;
};

export type MutationCreateManyLaunchArgs = {
  data: InputMaybe<Array<InputMaybe<LaunchInput>>>;
};

export type MutationCreateManyPayloadArgs = {
  data: InputMaybe<Array<InputMaybe<PayloadInput>>>;
};

export type MutationCreateManyReportArgs = {
  data: InputMaybe<Array<InputMaybe<ReportInput>>>;
};

export type MutationCreateManySatelliteArgs = {
  data: InputMaybe<Array<InputMaybe<SatelliteInput>>>;
};

export type MutationCreatePayloadArgs = {
  category: Scalars["String"]["input"];
  configuration: Scalars["JSON"]["input"];
  customer_id: Scalars["ID"]["input"];
  description: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  satellite_id: Scalars["ID"]["input"];
  status: Scalars["String"]["input"];
};

export type MutationCreateReportArgs = {
  content: Scalars["String"]["input"];
  date: Scalars["Date"]["input"];
  employee_id: Scalars["ID"]["input"];
  groundStation_id: InputMaybe<Scalars["ID"]["input"]>;
  satellite_id: InputMaybe<Scalars["ID"]["input"]>;
  title: Scalars["String"]["input"];
  type: Scalars["String"]["input"];
};

export type MutationCreateSatelliteArgs = {
  altitude: Scalars["Float"]["input"];
  busType: Scalars["String"]["input"];
  constellation_id: InputMaybe<Scalars["ID"]["input"]>;
  coordinates: Array<InputMaybe<Scalars["Float"]["input"]>>;
  description: Scalars["String"]["input"];
  image: Scalars["String"]["input"];
  launch_id: Scalars["ID"]["input"];
  manufacturer: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  specs: Scalars["JSON"]["input"];
  status: Scalars["String"]["input"];
  tle: Scalars["JSON"]["input"];
};

export type MutationRemoveCommentArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRemoveConstellationArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRemoveContactArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRemoveCustomerArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRemoveEmployeeArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRemoveGroundStationArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRemoveLaunchArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRemovePayloadArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRemoveReportArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRemoveSatelliteArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateCommentArgs = {
  content: InputMaybe<Scalars["String"]["input"]>;
  date: InputMaybe<Scalars["Date"]["input"]>;
  employee_id: InputMaybe<Scalars["ID"]["input"]>;
  id: Scalars["ID"]["input"];
  report_id: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationUpdateConstellationArgs = {
  description: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  name: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateContactArgs = {
  configuration: InputMaybe<Scalars["JSON"]["input"]>;
  date: InputMaybe<Scalars["Date"]["input"]>;
  employee_id: InputMaybe<Scalars["ID"]["input"]>;
  executionScript: InputMaybe<Scalars["String"]["input"]>;
  groundStation_id: InputMaybe<Scalars["ID"]["input"]>;
  id: Scalars["ID"]["input"];
  payload_id: InputMaybe<Scalars["ID"]["input"]>;
  satellite_id: InputMaybe<Scalars["ID"]["input"]>;
  type: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateCustomerArgs = {
  email: InputMaybe<Scalars["String"]["input"]>;
  employee_id: InputMaybe<Scalars["ID"]["input"]>;
  id: Scalars["ID"]["input"];
  name: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateEmployeeArgs = {
  email: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  name: InputMaybe<Scalars["String"]["input"]>;
  role: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateGroundStationArgs = {
  coordinates: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  id: Scalars["ID"]["input"];
  image: InputMaybe<Scalars["String"]["input"]>;
  name: InputMaybe<Scalars["String"]["input"]>;
  network: InputMaybe<Scalars["String"]["input"]>;
  status: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateLaunchArgs = {
  date: InputMaybe<Scalars["Date"]["input"]>;
  id: Scalars["ID"]["input"];
  outcome: InputMaybe<Scalars["String"]["input"]>;
  provider: InputMaybe<Scalars["String"]["input"]>;
  rocket: InputMaybe<Scalars["String"]["input"]>;
  status: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdatePayloadArgs = {
  category: InputMaybe<Scalars["String"]["input"]>;
  configuration: InputMaybe<Scalars["JSON"]["input"]>;
  customer_id: InputMaybe<Scalars["ID"]["input"]>;
  description: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  name: InputMaybe<Scalars["String"]["input"]>;
  satellite_id: InputMaybe<Scalars["ID"]["input"]>;
  status: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateReportArgs = {
  content: InputMaybe<Scalars["String"]["input"]>;
  date: InputMaybe<Scalars["Date"]["input"]>;
  employee_id: InputMaybe<Scalars["ID"]["input"]>;
  groundStation_id: InputMaybe<Scalars["ID"]["input"]>;
  id: Scalars["ID"]["input"];
  satellite_id: InputMaybe<Scalars["ID"]["input"]>;
  title: InputMaybe<Scalars["String"]["input"]>;
  type: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateSatelliteArgs = {
  altitude: InputMaybe<Scalars["Float"]["input"]>;
  busType: InputMaybe<Scalars["String"]["input"]>;
  constellation_id: InputMaybe<Scalars["ID"]["input"]>;
  coordinates: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  description: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  image: InputMaybe<Scalars["String"]["input"]>;
  launch_id: InputMaybe<Scalars["ID"]["input"]>;
  manufacturer: InputMaybe<Scalars["String"]["input"]>;
  name: InputMaybe<Scalars["String"]["input"]>;
  specs: InputMaybe<Scalars["JSON"]["input"]>;
  status: InputMaybe<Scalars["String"]["input"]>;
  tle: InputMaybe<Scalars["JSON"]["input"]>;
};

export type Payload = {
  __typename?: "Payload";
  Contacts: Maybe<Array<Maybe<Contact>>>;
  Customer: Maybe<Customer>;
  Satellite: Maybe<Satellite>;
  category: Scalars["String"]["output"];
  configuration: Scalars["JSON"]["output"];
  customer_id: Scalars["ID"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  satellite_id: Scalars["ID"]["output"];
  status: Scalars["String"]["output"];
};

export type PayloadFilter = {
  category: InputMaybe<Scalars["String"]["input"]>;
  category_gt: InputMaybe<Scalars["String"]["input"]>;
  category_gte: InputMaybe<Scalars["String"]["input"]>;
  category_lt: InputMaybe<Scalars["String"]["input"]>;
  category_lte: InputMaybe<Scalars["String"]["input"]>;
  category_neq: InputMaybe<Scalars["String"]["input"]>;
  configuration: InputMaybe<Scalars["JSON"]["input"]>;
  configuration_neq: InputMaybe<Scalars["JSON"]["input"]>;
  customer_id: InputMaybe<Scalars["ID"]["input"]>;
  customer_id_neq: InputMaybe<Scalars["ID"]["input"]>;
  description: InputMaybe<Scalars["String"]["input"]>;
  description_gt: InputMaybe<Scalars["String"]["input"]>;
  description_gte: InputMaybe<Scalars["String"]["input"]>;
  description_lt: InputMaybe<Scalars["String"]["input"]>;
  description_lte: InputMaybe<Scalars["String"]["input"]>;
  description_neq: InputMaybe<Scalars["String"]["input"]>;
  id: InputMaybe<Scalars["ID"]["input"]>;
  id_neq: InputMaybe<Scalars["ID"]["input"]>;
  ids: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  name: InputMaybe<Scalars["String"]["input"]>;
  name_gt: InputMaybe<Scalars["String"]["input"]>;
  name_gte: InputMaybe<Scalars["String"]["input"]>;
  name_lt: InputMaybe<Scalars["String"]["input"]>;
  name_lte: InputMaybe<Scalars["String"]["input"]>;
  name_neq: InputMaybe<Scalars["String"]["input"]>;
  q: InputMaybe<Scalars["String"]["input"]>;
  satellite_id: InputMaybe<Scalars["ID"]["input"]>;
  satellite_id_neq: InputMaybe<Scalars["ID"]["input"]>;
  status: InputMaybe<Scalars["String"]["input"]>;
  status_gt: InputMaybe<Scalars["String"]["input"]>;
  status_gte: InputMaybe<Scalars["String"]["input"]>;
  status_lt: InputMaybe<Scalars["String"]["input"]>;
  status_lte: InputMaybe<Scalars["String"]["input"]>;
  status_neq: InputMaybe<Scalars["String"]["input"]>;
};

export type PayloadInput = {
  category: Scalars["String"]["input"];
  configuration: Scalars["JSON"]["input"];
  customer_id: Scalars["ID"]["input"];
  description: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  satellite_id: Scalars["ID"]["input"];
  status: Scalars["String"]["input"];
};

export type Query = {
  __typename?: "Query";
  Comment: Maybe<Comment>;
  Constellation: Maybe<Constellation>;
  Contact: Maybe<Contact>;
  Customer: Maybe<Customer>;
  Employee: Maybe<Employee>;
  GroundStation: Maybe<GroundStation>;
  Launch: Maybe<Launch>;
  Payload: Maybe<Payload>;
  Report: Maybe<Report>;
  Satellite: Maybe<Satellite>;
  _allCommentsMeta: Maybe<ListMetadata>;
  _allConstellationsMeta: Maybe<ListMetadata>;
  _allContactsMeta: Maybe<ListMetadata>;
  _allCustomersMeta: Maybe<ListMetadata>;
  _allEmployeesMeta: Maybe<ListMetadata>;
  _allGroundStationsMeta: Maybe<ListMetadata>;
  _allLaunchesMeta: Maybe<ListMetadata>;
  _allPayloadsMeta: Maybe<ListMetadata>;
  _allReportsMeta: Maybe<ListMetadata>;
  _allSatellitesMeta: Maybe<ListMetadata>;
  allComments: Maybe<Array<Maybe<Comment>>>;
  allConstellations: Maybe<Array<Maybe<Constellation>>>;
  allContacts: Maybe<Array<Maybe<Contact>>>;
  allCustomers: Maybe<Array<Maybe<Customer>>>;
  allEmployees: Maybe<Array<Maybe<Employee>>>;
  allGroundStations: Maybe<Array<Maybe<GroundStation>>>;
  allLaunches: Maybe<Array<Maybe<Launch>>>;
  allPayloads: Maybe<Array<Maybe<Payload>>>;
  allReports: Maybe<Array<Maybe<Report>>>;
  allSatellites: Maybe<Array<Maybe<Satellite>>>;
};

export type QueryCommentArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryConstellationArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryContactArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryCustomerArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryEmployeeArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryGroundStationArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryLaunchArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryPayloadArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryReportArgs = {
  id: Scalars["ID"]["input"];
};

export type QuerySatelliteArgs = {
  id: Scalars["ID"]["input"];
};

export type Query_AllCommentsMetaArgs = {
  filter: InputMaybe<CommentFilter>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
};

export type Query_AllConstellationsMetaArgs = {
  filter: InputMaybe<ConstellationFilter>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
};

export type Query_AllContactsMetaArgs = {
  filter: InputMaybe<ContactFilter>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
};

export type Query_AllCustomersMetaArgs = {
  filter: InputMaybe<CustomerFilter>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
};

export type Query_AllEmployeesMetaArgs = {
  filter: InputMaybe<EmployeeFilter>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
};

export type Query_AllGroundStationsMetaArgs = {
  filter: InputMaybe<GroundStationFilter>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
};

export type Query_AllLaunchesMetaArgs = {
  filter: InputMaybe<LaunchFilter>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
};

export type Query_AllPayloadsMetaArgs = {
  filter: InputMaybe<PayloadFilter>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
};

export type Query_AllReportsMetaArgs = {
  filter: InputMaybe<ReportFilter>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
};

export type Query_AllSatellitesMetaArgs = {
  filter: InputMaybe<SatelliteFilter>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryAllCommentsArgs = {
  filter: InputMaybe<CommentFilter>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
  sortField: InputMaybe<Scalars["String"]["input"]>;
  sortOrder: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAllConstellationsArgs = {
  filter: InputMaybe<ConstellationFilter>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
  sortField: InputMaybe<Scalars["String"]["input"]>;
  sortOrder: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAllContactsArgs = {
  filter: InputMaybe<ContactFilter>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
  sortField: InputMaybe<Scalars["String"]["input"]>;
  sortOrder: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAllCustomersArgs = {
  filter: InputMaybe<CustomerFilter>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
  sortField: InputMaybe<Scalars["String"]["input"]>;
  sortOrder: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAllEmployeesArgs = {
  filter: InputMaybe<EmployeeFilter>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
  sortField: InputMaybe<Scalars["String"]["input"]>;
  sortOrder: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAllGroundStationsArgs = {
  filter: InputMaybe<GroundStationFilter>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
  sortField: InputMaybe<Scalars["String"]["input"]>;
  sortOrder: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAllLaunchesArgs = {
  filter: InputMaybe<LaunchFilter>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
  sortField: InputMaybe<Scalars["String"]["input"]>;
  sortOrder: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAllPayloadsArgs = {
  filter: InputMaybe<PayloadFilter>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
  sortField: InputMaybe<Scalars["String"]["input"]>;
  sortOrder: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAllReportsArgs = {
  filter: InputMaybe<ReportFilter>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
  sortField: InputMaybe<Scalars["String"]["input"]>;
  sortOrder: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAllSatellitesArgs = {
  filter: InputMaybe<SatelliteFilter>;
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
  sortField: InputMaybe<Scalars["String"]["input"]>;
  sortOrder: InputMaybe<Scalars["String"]["input"]>;
};

export type Report = {
  __typename?: "Report";
  Comments: Maybe<Array<Maybe<Comment>>>;
  Employee: Maybe<Employee>;
  GroundStation: Maybe<GroundStation>;
  Satellite: Maybe<Satellite>;
  content: Scalars["String"]["output"];
  date: Scalars["Date"]["output"];
  employee_id: Scalars["ID"]["output"];
  groundStation_id: Maybe<Scalars["ID"]["output"]>;
  id: Scalars["ID"]["output"];
  satellite_id: Maybe<Scalars["ID"]["output"]>;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type ReportFilter = {
  content: InputMaybe<Scalars["String"]["input"]>;
  content_gt: InputMaybe<Scalars["String"]["input"]>;
  content_gte: InputMaybe<Scalars["String"]["input"]>;
  content_lt: InputMaybe<Scalars["String"]["input"]>;
  content_lte: InputMaybe<Scalars["String"]["input"]>;
  content_neq: InputMaybe<Scalars["String"]["input"]>;
  date: InputMaybe<Scalars["Date"]["input"]>;
  date_gt: InputMaybe<Scalars["Date"]["input"]>;
  date_gte: InputMaybe<Scalars["Date"]["input"]>;
  date_lt: InputMaybe<Scalars["Date"]["input"]>;
  date_lte: InputMaybe<Scalars["Date"]["input"]>;
  date_neq: InputMaybe<Scalars["Date"]["input"]>;
  employee_id: InputMaybe<Scalars["ID"]["input"]>;
  employee_id_neq: InputMaybe<Scalars["ID"]["input"]>;
  groundStation_id: InputMaybe<Scalars["ID"]["input"]>;
  groundStation_id_neq: InputMaybe<Scalars["ID"]["input"]>;
  id: InputMaybe<Scalars["ID"]["input"]>;
  id_neq: InputMaybe<Scalars["ID"]["input"]>;
  ids: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  q: InputMaybe<Scalars["String"]["input"]>;
  satellite_id: InputMaybe<Scalars["ID"]["input"]>;
  satellite_id_neq: InputMaybe<Scalars["ID"]["input"]>;
  title: InputMaybe<Scalars["String"]["input"]>;
  title_gt: InputMaybe<Scalars["String"]["input"]>;
  title_gte: InputMaybe<Scalars["String"]["input"]>;
  title_lt: InputMaybe<Scalars["String"]["input"]>;
  title_lte: InputMaybe<Scalars["String"]["input"]>;
  title_neq: InputMaybe<Scalars["String"]["input"]>;
  type: InputMaybe<Scalars["String"]["input"]>;
  type_gt: InputMaybe<Scalars["String"]["input"]>;
  type_gte: InputMaybe<Scalars["String"]["input"]>;
  type_lt: InputMaybe<Scalars["String"]["input"]>;
  type_lte: InputMaybe<Scalars["String"]["input"]>;
  type_neq: InputMaybe<Scalars["String"]["input"]>;
};

export type ReportInput = {
  content: Scalars["String"]["input"];
  date: Scalars["Date"]["input"];
  employee_id: Scalars["ID"]["input"];
  groundStation_id: InputMaybe<Scalars["ID"]["input"]>;
  satellite_id: InputMaybe<Scalars["ID"]["input"]>;
  title: Scalars["String"]["input"];
  type: Scalars["String"]["input"];
};

export type Satellite = {
  __typename?: "Satellite";
  Constellation: Maybe<Constellation>;
  Contacts: Maybe<Array<Maybe<Contact>>>;
  Launch: Maybe<Launch>;
  Payloads: Maybe<Array<Maybe<Payload>>>;
  Reports: Maybe<Array<Maybe<Report>>>;
  altitude: Scalars["Float"]["output"];
  busType: Scalars["String"]["output"];
  constellation_id: Maybe<Scalars["ID"]["output"]>;
  coordinates: Array<Maybe<Scalars["Float"]["output"]>>;
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  image: Scalars["String"]["output"];
  launch_id: Scalars["ID"]["output"];
  manufacturer: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  specs: Scalars["JSON"]["output"];
  status: Scalars["String"]["output"];
  tle: Scalars["JSON"]["output"];
};

export type SatelliteFilter = {
  altitude: InputMaybe<Scalars["Float"]["input"]>;
  altitude_gt: InputMaybe<Scalars["Float"]["input"]>;
  altitude_gte: InputMaybe<Scalars["Float"]["input"]>;
  altitude_lt: InputMaybe<Scalars["Float"]["input"]>;
  altitude_lte: InputMaybe<Scalars["Float"]["input"]>;
  altitude_neq: InputMaybe<Scalars["Float"]["input"]>;
  busType: InputMaybe<Scalars["String"]["input"]>;
  busType_gt: InputMaybe<Scalars["String"]["input"]>;
  busType_gte: InputMaybe<Scalars["String"]["input"]>;
  busType_lt: InputMaybe<Scalars["String"]["input"]>;
  busType_lte: InputMaybe<Scalars["String"]["input"]>;
  busType_neq: InputMaybe<Scalars["String"]["input"]>;
  constellation_id: InputMaybe<Scalars["ID"]["input"]>;
  constellation_id_neq: InputMaybe<Scalars["ID"]["input"]>;
  coordinates: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  coordinates_neq: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  description: InputMaybe<Scalars["String"]["input"]>;
  description_gt: InputMaybe<Scalars["String"]["input"]>;
  description_gte: InputMaybe<Scalars["String"]["input"]>;
  description_lt: InputMaybe<Scalars["String"]["input"]>;
  description_lte: InputMaybe<Scalars["String"]["input"]>;
  description_neq: InputMaybe<Scalars["String"]["input"]>;
  id: InputMaybe<Scalars["ID"]["input"]>;
  id_neq: InputMaybe<Scalars["ID"]["input"]>;
  ids: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  image: InputMaybe<Scalars["String"]["input"]>;
  image_gt: InputMaybe<Scalars["String"]["input"]>;
  image_gte: InputMaybe<Scalars["String"]["input"]>;
  image_lt: InputMaybe<Scalars["String"]["input"]>;
  image_lte: InputMaybe<Scalars["String"]["input"]>;
  image_neq: InputMaybe<Scalars["String"]["input"]>;
  launch_id: InputMaybe<Scalars["ID"]["input"]>;
  launch_id_neq: InputMaybe<Scalars["ID"]["input"]>;
  manufacturer: InputMaybe<Scalars["String"]["input"]>;
  manufacturer_gt: InputMaybe<Scalars["String"]["input"]>;
  manufacturer_gte: InputMaybe<Scalars["String"]["input"]>;
  manufacturer_lt: InputMaybe<Scalars["String"]["input"]>;
  manufacturer_lte: InputMaybe<Scalars["String"]["input"]>;
  manufacturer_neq: InputMaybe<Scalars["String"]["input"]>;
  name: InputMaybe<Scalars["String"]["input"]>;
  name_gt: InputMaybe<Scalars["String"]["input"]>;
  name_gte: InputMaybe<Scalars["String"]["input"]>;
  name_lt: InputMaybe<Scalars["String"]["input"]>;
  name_lte: InputMaybe<Scalars["String"]["input"]>;
  name_neq: InputMaybe<Scalars["String"]["input"]>;
  q: InputMaybe<Scalars["String"]["input"]>;
  specs: InputMaybe<Scalars["JSON"]["input"]>;
  specs_neq: InputMaybe<Scalars["JSON"]["input"]>;
  status: InputMaybe<Scalars["String"]["input"]>;
  status_gt: InputMaybe<Scalars["String"]["input"]>;
  status_gte: InputMaybe<Scalars["String"]["input"]>;
  status_lt: InputMaybe<Scalars["String"]["input"]>;
  status_lte: InputMaybe<Scalars["String"]["input"]>;
  status_neq: InputMaybe<Scalars["String"]["input"]>;
  tle: InputMaybe<Scalars["JSON"]["input"]>;
  tle_neq: InputMaybe<Scalars["JSON"]["input"]>;
};

export type SatelliteInput = {
  altitude: Scalars["Float"]["input"];
  busType: Scalars["String"]["input"];
  constellation_id: InputMaybe<Scalars["ID"]["input"]>;
  coordinates: Array<InputMaybe<Scalars["Float"]["input"]>>;
  description: Scalars["String"]["input"];
  image: Scalars["String"]["input"];
  launch_id: Scalars["ID"]["input"];
  manufacturer: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  specs: Scalars["JSON"]["input"];
  status: Scalars["String"]["input"];
  tle: Scalars["JSON"]["input"];
};

export type CreateReportMutationVariables = Exact<{
  type: Scalars["String"]["input"];
  date: Scalars["Date"]["input"];
  title: Scalars["String"]["input"];
  content: Scalars["String"]["input"];
  satellite_id: InputMaybe<Scalars["ID"]["input"]>;
  employee_id: Scalars["ID"]["input"];
  groundStation_id: InputMaybe<Scalars["ID"]["input"]>;
}>;

export type CreateReportMutation = {
  __typename?: "Mutation";
  createReport: {
    __typename?: "Report";
    id: string;
    title: string;
    type: string;
    date: any;
    satellite_id: string | null;
    employee_id: string;
    Satellite: { __typename?: "Satellite"; id: string; name: string } | null;
    Comments: Array<{
      __typename?: "Comment";
      id: string;
      date: any;
      content: string;
      employee_id: string;
      Employee: { __typename?: "Employee"; name: string } | null;
    } | null> | null;
    Employee: { __typename?: "Employee"; id: string; name: string } | null;
    GroundStation: {
      __typename?: "GroundStation";
      id: string;
      name: string;
      coordinates: Array<number | null>;
      status: string;
      network: string;
      Contacts: Array<{
        __typename?: "Contact";
        id: string;
        date: any;
        type: string;
        executionScript: string;
      } | null> | null;
    } | null;
  } | null;
};

export type GetSatellitesQueryVariables = Exact<{
  page: InputMaybe<Scalars["Int"]["input"]>;
  perPage: InputMaybe<Scalars["Int"]["input"]>;
  sortField: InputMaybe<Scalars["String"]["input"]>;
  sortOrder: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetSatellitesQuery = {
  __typename?: "Query";
  allSatellites: Array<{
    __typename?: "Satellite";
    id: string;
    name: string;
    status: string;
    description: string;
    Payloads: Array<{ __typename?: "Payload"; id: string } | null> | null;
  } | null> | null;
};

export type GetSatelliteDetailsQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetSatelliteDetailsQuery = {
  __typename?: "Query";
  allSatellites: Array<{
    __typename?: "Satellite";
    id: string;
    name: string;
    status: string;
    image: string;
    description: string;
    busType: string;
    manufacturer: string;
    Payloads: Array<{
      __typename?: "Payload";
      id: string;
      name: string;
      description: string;
      status: string;
      category: string;
      configuration: any;
    } | null> | null;
    Launch: {
      __typename?: "Launch";
      id: string;
      date: any;
      status: string;
      outcome: string | null;
      provider: string;
      rocket: string;
    } | null;
  } | null> | null;
};

export type GetAllReportsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllReportsQuery = {
  __typename?: "Query";
  allReports: Array<{
    __typename?: "Report";
    id: string;
    title: string;
    type: string;
    date: any;
    Satellite: { __typename?: "Satellite"; id: string; name: string } | null;
    Comments: Array<{ __typename?: "Comment"; id: string } | null> | null;
    GroundStation: {
      __typename?: "GroundStation";
      id: string;
      name: string;
    } | null;
  } | null> | null;
};

export type GetCreateReportFormDataQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetCreateReportFormDataQuery = {
  __typename?: "Query";
  allGroundStations: Array<{
    __typename?: "GroundStation";
    id: string;
    name: string;
  } | null> | null;
  allSatellites: Array<{
    __typename?: "Satellite";
    id: string;
    name: string;
  } | null> | null;
  allEmployees: Array<{
    __typename?: "Employee";
    id: string;
    name: string;
  } | null> | null;
};

export type GetReportDetailsQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetReportDetailsQuery = {
  __typename?: "Query";
  allReports: Array<{
    __typename?: "Report";
    id: string;
    title: string;
    type: string;
    date: any;
    satellite_id: string | null;
    employee_id: string;
    Satellite: { __typename?: "Satellite"; id: string; name: string } | null;
    Comments: Array<{
      __typename?: "Comment";
      id: string;
      date: any;
      content: string;
      employee_id: string;
      Employee: { __typename?: "Employee"; name: string } | null;
    } | null> | null;
    Employee: { __typename?: "Employee"; id: string; name: string } | null;
    GroundStation: {
      __typename?: "GroundStation";
      id: string;
      name: string;
      coordinates: Array<number | null>;
      status: string;
      network: string;
      Contacts: Array<{
        __typename?: "Contact";
        id: string;
        date: any;
        type: string;
        executionScript: string;
      } | null> | null;
    } | null;
  } | null> | null;
};

export const CreateReportDocument = gql`
  mutation CreateReport(
    $type: String!
    $date: Date!
    $title: String!
    $content: String!
    $satellite_id: ID
    $employee_id: ID!
    $groundStation_id: ID
  ) {
    createReport(
      type: $type
      date: $date
      title: $title
      content: $content
      satellite_id: $satellite_id
      employee_id: $employee_id
      groundStation_id: $groundStation_id
    ) {
      id
      title
      type
      date
      satellite_id
      employee_id
      Satellite {
        id
        name
      }
      Comments {
        id
        date
        content
        employee_id
        Employee {
          name
        }
      }
      Employee {
        id
        name
      }
      GroundStation {
        id
        name
        coordinates
        status
        network
        Contacts {
          id
          date
          type
          executionScript
        }
      }
    }
  }
`;
export type CreateReportMutationFn = Apollo.MutationFunction<
  CreateReportMutation,
  CreateReportMutationVariables
>;

/**
 * __useCreateReportMutation__
 *
 * To run a mutation, you first call `useCreateReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReportMutation, { data, loading, error }] = useCreateReportMutation({
 *   variables: {
 *      type: // value for 'type'
 *      date: // value for 'date'
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      satellite_id: // value for 'satellite_id'
 *      employee_id: // value for 'employee_id'
 *      groundStation_id: // value for 'groundStation_id'
 *   },
 * });
 */
export function useCreateReportMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateReportMutation,
    CreateReportMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateReportMutation,
    CreateReportMutationVariables
  >(CreateReportDocument, options);
}
export type CreateReportMutationHookResult = ReturnType<
  typeof useCreateReportMutation
>;
export type CreateReportMutationResult =
  Apollo.MutationResult<CreateReportMutation>;
export type CreateReportMutationOptions = Apollo.BaseMutationOptions<
  CreateReportMutation,
  CreateReportMutationVariables
>;
export const GetSatellitesDocument = gql`
  query GetSatellites(
    $page: Int
    $perPage: Int
    $sortField: String
    $sortOrder: String
  ) {
    allSatellites(
      page: $page
      perPage: $perPage
      sortField: $sortField
      sortOrder: $sortOrder
    ) {
      id
      name
      status
      description
      Payloads {
        id
      }
    }
  }
`;

/**
 * __useGetSatellitesQuery__
 *
 * To run a query within a React component, call `useGetSatellitesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSatellitesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSatellitesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      sortField: // value for 'sortField'
 *      sortOrder: // value for 'sortOrder'
 *   },
 * });
 */
export function useGetSatellitesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetSatellitesQuery,
    GetSatellitesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSatellitesQuery, GetSatellitesQueryVariables>(
    GetSatellitesDocument,
    options
  );
}
export function useGetSatellitesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSatellitesQuery,
    GetSatellitesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSatellitesQuery, GetSatellitesQueryVariables>(
    GetSatellitesDocument,
    options
  );
}
export function useGetSatellitesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetSatellitesQuery,
        GetSatellitesQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetSatellitesQuery,
    GetSatellitesQueryVariables
  >(GetSatellitesDocument, options);
}
export type GetSatellitesQueryHookResult = ReturnType<
  typeof useGetSatellitesQuery
>;
export type GetSatellitesLazyQueryHookResult = ReturnType<
  typeof useGetSatellitesLazyQuery
>;
export type GetSatellitesSuspenseQueryHookResult = ReturnType<
  typeof useGetSatellitesSuspenseQuery
>;
export type GetSatellitesQueryResult = Apollo.QueryResult<
  GetSatellitesQuery,
  GetSatellitesQueryVariables
>;
export const GetSatelliteDetailsDocument = gql`
  query GetSatelliteDetails($id: ID!) {
    allSatellites(filter: { id: $id }) {
      id
      name
      status
      image
      description
      busType
      manufacturer
      Payloads {
        id
        name
        description
        status
        category
        configuration
      }
      Launch {
        id
        date
        status
        outcome
        provider
        rocket
      }
    }
  }
`;

/**
 * __useGetSatelliteDetailsQuery__
 *
 * To run a query within a React component, call `useGetSatelliteDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSatelliteDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSatelliteDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSatelliteDetailsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSatelliteDetailsQuery,
    GetSatelliteDetailsQueryVariables
  > &
    (
      | { variables: GetSatelliteDetailsQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetSatelliteDetailsQuery,
    GetSatelliteDetailsQueryVariables
  >(GetSatelliteDetailsDocument, options);
}
export function useGetSatelliteDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSatelliteDetailsQuery,
    GetSatelliteDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSatelliteDetailsQuery,
    GetSatelliteDetailsQueryVariables
  >(GetSatelliteDetailsDocument, options);
}
export function useGetSatelliteDetailsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetSatelliteDetailsQuery,
        GetSatelliteDetailsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetSatelliteDetailsQuery,
    GetSatelliteDetailsQueryVariables
  >(GetSatelliteDetailsDocument, options);
}
export type GetSatelliteDetailsQueryHookResult = ReturnType<
  typeof useGetSatelliteDetailsQuery
>;
export type GetSatelliteDetailsLazyQueryHookResult = ReturnType<
  typeof useGetSatelliteDetailsLazyQuery
>;
export type GetSatelliteDetailsSuspenseQueryHookResult = ReturnType<
  typeof useGetSatelliteDetailsSuspenseQuery
>;
export type GetSatelliteDetailsQueryResult = Apollo.QueryResult<
  GetSatelliteDetailsQuery,
  GetSatelliteDetailsQueryVariables
>;
export const GetAllReportsDocument = gql`
  query GetAllReports {
    allReports {
      id
      title
      type
      date
      Satellite {
        id
        name
      }
      Comments {
        id
      }
      GroundStation {
        id
        name
      }
    }
  }
`;

/**
 * __useGetAllReportsQuery__
 *
 * To run a query within a React component, call `useGetAllReportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllReportsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllReportsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllReportsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllReportsQuery,
    GetAllReportsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllReportsQuery, GetAllReportsQueryVariables>(
    GetAllReportsDocument,
    options
  );
}
export function useGetAllReportsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllReportsQuery,
    GetAllReportsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllReportsQuery, GetAllReportsQueryVariables>(
    GetAllReportsDocument,
    options
  );
}
export function useGetAllReportsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetAllReportsQuery,
        GetAllReportsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetAllReportsQuery,
    GetAllReportsQueryVariables
  >(GetAllReportsDocument, options);
}
export type GetAllReportsQueryHookResult = ReturnType<
  typeof useGetAllReportsQuery
>;
export type GetAllReportsLazyQueryHookResult = ReturnType<
  typeof useGetAllReportsLazyQuery
>;
export type GetAllReportsSuspenseQueryHookResult = ReturnType<
  typeof useGetAllReportsSuspenseQuery
>;
export type GetAllReportsQueryResult = Apollo.QueryResult<
  GetAllReportsQuery,
  GetAllReportsQueryVariables
>;
export const GetCreateReportFormDataDocument = gql`
  query GetCreateReportFormData {
    allGroundStations(sortField: "name", sortOrder: "ASC") {
      id
      name
    }
    allSatellites(sortField: "name", sortOrder: "ASC") {
      id
      name
    }
    allEmployees(sortField: "name", sortOrder: "ASC") {
      id
      name
    }
  }
`;

/**
 * __useGetCreateReportFormDataQuery__
 *
 * To run a query within a React component, call `useGetCreateReportFormDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCreateReportFormDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCreateReportFormDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCreateReportFormDataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCreateReportFormDataQuery,
    GetCreateReportFormDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCreateReportFormDataQuery,
    GetCreateReportFormDataQueryVariables
  >(GetCreateReportFormDataDocument, options);
}
export function useGetCreateReportFormDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCreateReportFormDataQuery,
    GetCreateReportFormDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCreateReportFormDataQuery,
    GetCreateReportFormDataQueryVariables
  >(GetCreateReportFormDataDocument, options);
}
export function useGetCreateReportFormDataSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetCreateReportFormDataQuery,
        GetCreateReportFormDataQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetCreateReportFormDataQuery,
    GetCreateReportFormDataQueryVariables
  >(GetCreateReportFormDataDocument, options);
}
export type GetCreateReportFormDataQueryHookResult = ReturnType<
  typeof useGetCreateReportFormDataQuery
>;
export type GetCreateReportFormDataLazyQueryHookResult = ReturnType<
  typeof useGetCreateReportFormDataLazyQuery
>;
export type GetCreateReportFormDataSuspenseQueryHookResult = ReturnType<
  typeof useGetCreateReportFormDataSuspenseQuery
>;
export type GetCreateReportFormDataQueryResult = Apollo.QueryResult<
  GetCreateReportFormDataQuery,
  GetCreateReportFormDataQueryVariables
>;
export const GetReportDetailsDocument = gql`
  query GetReportDetails($id: ID!) {
    allReports(filter: { id: $id }) {
      id
      title
      type
      date
      satellite_id
      employee_id
      Satellite {
        id
        name
      }
      Comments {
        id
        date
        content
        employee_id
        Employee {
          name
        }
      }
      Employee {
        id
        name
      }
      GroundStation {
        id
        name
        coordinates
        status
        network
        Contacts {
          id
          date
          type
          executionScript
        }
      }
    }
  }
`;

/**
 * __useGetReportDetailsQuery__
 *
 * To run a query within a React component, call `useGetReportDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReportDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReportDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetReportDetailsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetReportDetailsQuery,
    GetReportDetailsQueryVariables
  > &
    (
      | { variables: GetReportDetailsQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetReportDetailsQuery, GetReportDetailsQueryVariables>(
    GetReportDetailsDocument,
    options
  );
}
export function useGetReportDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetReportDetailsQuery,
    GetReportDetailsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetReportDetailsQuery,
    GetReportDetailsQueryVariables
  >(GetReportDetailsDocument, options);
}
export function useGetReportDetailsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetReportDetailsQuery,
        GetReportDetailsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetReportDetailsQuery,
    GetReportDetailsQueryVariables
  >(GetReportDetailsDocument, options);
}
export type GetReportDetailsQueryHookResult = ReturnType<
  typeof useGetReportDetailsQuery
>;
export type GetReportDetailsLazyQueryHookResult = ReturnType<
  typeof useGetReportDetailsLazyQuery
>;
export type GetReportDetailsSuspenseQueryHookResult = ReturnType<
  typeof useGetReportDetailsSuspenseQuery
>;
export type GetReportDetailsQueryResult = Apollo.QueryResult<
  GetReportDetailsQuery,
  GetReportDetailsQueryVariables
>;
