import { gql } from 'graphql-request';

import { getClient } from 'src/graphql';

class BusinessService {
    async getAll() {
        const graphQLClient = await getClient();

        const query = gql`
        {
          getUser(
              getOneUserInput: {
                  authUid: "zJ5nnZo1sxWAhPcFFQWslOh47g22",
              }
          ) {
              id,
              uid,
              businesses {
                  uid
                  name
                  address
              }
          }
      }
        `;

        const data = await graphQLClient.request(query);

        // console.log('REFERENCES FETCHED!');

        // console.log('data', data.getAllReferences);

            const businesses = data.getUser.businesses.map(business => {
              const address = {
                formatted_address: business.name,
                lat: "1.232228",
                lng: "104.221955"
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
}

const BusinessesService = new BusinessService();

export default BusinessesService;