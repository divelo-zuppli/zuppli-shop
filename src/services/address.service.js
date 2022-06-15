import { gql } from 'graphql-request';

import { getClient } from 'src/graphql';

class BusinessService {
    async getAll({ authId }) {
        const graphQLClient = await getClient();

        const query = gql`
        query getUser (
            $authUid: String!,
        ) {
          getUser(
              getOneUserInput: {
                  authUid: $authUid,
              }
          ) {
              id,
              uid,
              businesses {
                  uid
                  name
                  address
                  phoneNumber
              }
          }
      }
        `;

        const variables = {
            authUid: authId,
        };

        const data = await graphQLClient.request(query, variables);

        // console.log('REFERENCES FETCHED!');

        // console.log('data', data.getAllReferences);

            const businesses = data.getUser.businesses.map(business => {
              const address = {
                address: business.address,
                phoneNumber: business.phoneNumber,
                name: business.name,
                uid: business.uid
              }
                return {
                    address: address,
                    default: true,
                    id: business.id,
                    title: business.name
                }
            });

        return businesses;
    }

    async createBusiness(addressInfo) {
        const graphQLClient = await getClient();

        const mutation = gql`
            mutation createBusiness (
                $address: String!,
                $name: String!,
                $phoneNumber: String!,
                $authUid: String!
            ) {
                createBusiness(
                    createBusinessInput: {
                        address: $address,
                        name: $name,
                        authUid: $authUid,
                        phoneNumber: $phoneNumber,
                    }
                ) {
                    uid
                    id
                    address
                    phoneNumber
                    name
                    createdAt
                    updatedAt
                }
            }
        `

        const data = await graphQLClient.request(mutation, addressInfo);

        return data
    }

    async updateBusiness(addressInfo) {
        const graphQLClient = await getClient();

        const mutation = gql`
            mutation updateBusiness (
                $authUid: String!,
                $address: String!,
                $name: String!,
                $phoneNumber: String!,
                $uid: String!
            ) {
                updateBusiness (
                    getOneBusinessInput: {
                        uid: $uid
                    },
                    updateBusinessInput: {
                        address: $address,
                        authUid: $authUid,
                        name: $name,
                        phoneNumber: $phoneNumber
                    }
                ) {
                    address
                    name
                    phoneNumber
                    uid
                }
            }
        `

        const data = await graphQLClient.request(mutation, addressInfo);

        return data
    }
}

const BusinessesService = new BusinessService();

export default BusinessesService;