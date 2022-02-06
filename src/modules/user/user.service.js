
import { gql } from 'graphql-request';

import { getClient } from '../../graphql';

class UserService {
  async registerFromAuthUid({ authUid, email, fullName, phoneNumber }) {
    const graphQLClient = await getClient();

    const mutation = gql`
    mutation createUserFromAuthUid (
      $authUid: String!,
      $email: String!,
      $fullName: String,
      $phoneNumber: String,
    ) {
      createUserFromAuthUid (
        createUserFromAuthUidInput: {
            authUid: $authUid,
            email: $email,
            fullName: $fullName,
            phoneNumber: $phoneNumber,
        }
      ) {
          id
          uid
          authUid
          email
          phoneNumber
          fullName
          createdAt
          updatedAt
      }
    }
    `;

    const variables = {
      authUid,
      email,
      fullName,
      phoneNumber: undefined,
    };

    const data = await graphQLClient.request(mutation, variables);

    console.log('USER FROM AUTHUID REGISTRED!');

    return {
      ...data.createUserFromAuthUid
    };
  }
}

const userService = new UserService();

export default userService;

