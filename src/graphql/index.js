import { GraphQLClient } from "graphql-request";
import { getAuth } from "firebase/auth";

import environment from "../environment";

import firebaseApp from "../firebase";

export const getClient = async () => {
  let headers = {};

  const auth = getAuth(firebaseApp);

  if (auth.currentUser) {
    const { token } = await auth.currentUser.getIdTokenResult();

    headers = {
      ...headers,
      authorization: `Bearer ${token}`
    };
  }

  const graphQLClient = new GraphQLClient(environment.GRAPHQL_ENDPOINT, {
    headers
  });

  return graphQLClient;
};