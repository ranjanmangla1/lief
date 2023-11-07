
import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    getAllInjuryReports: injuryRecord
  }

  type Mutation {
    createUser(input: CreateUserInput!): user!
    createInjuryReport(input: CreateInjuryRecord): injuryRecord!
  }
  
  input CreateUserInput {
    email: String!
    password: String!
  }

  input CreateInjuryRecord {
    injuryDate: String!
    injuryTime: String!
    reporterName: String!
    bodyPartInjured: String!
  }
  
  type user {
    id: String!
    email: String!
    password: String!
  }

  type injuryRecord {
    id: ID!
    injuryDate: String!
    injuryTime: String!
    reporterName: String!
    bodyPartInjured: String!
  }
`;

export default typeDefs;