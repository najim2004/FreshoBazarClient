import gql from "graphql-tag";

export const REGISTER_USER = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      success
      message
      error
      error_message
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      success
      message
      error
      error_message
      token
    }
  }
`;