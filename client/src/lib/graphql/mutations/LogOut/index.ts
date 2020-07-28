import { gql } from "apollo-boost";

export const LOG_OUT = gql`
  mutation LogOut($input: LogInInput) {
    logOut(input: $input) {
      id
      token
      avatar
      hasWallet
      didRequest
    }
  }
`;
