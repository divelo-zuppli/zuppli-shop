import { gql } from 'graphql-request';

import { getClient } from '../graphql';

class ProductService {
    async getAll() {
        const graphQLClient = await getClient();

        const query = gql`
        query getAllReferences (
            $limit: Int,
            $skip: Int,
            $q: String,
        ) {
            getAllReferences (
                getAllReferencesInput: {
                    limit: $limit,
                    skip: $skip,
                    q: $q,
                }
            ) {
                id
                uid
                name
                sku
                description
                updatedAt
                createdAt
                category {
                    id
                    name
                    slug
                }
                referenceAttachments {
                    attachment {
                        uid
                        url
                        id
                    }
                }
            }
        }
        `;

        const data = await graphQLClient.request(query);

        // console.log('REFERENCES FETCHED!');

        // console.log('data', data.getAllReferences);

        const parsedData = data.getAllReferences.map(reference => {

            return {
                id: reference.id,
                name: reference.name,
                uid: reference.uid,
                sku: reference.sku,
                slug: reference.name,
                price: 12000,
                quantity: 30,
                sold: 8,
                unit: 'kg',
                description: reference.description,
                updatedAt: reference.updatedAt,
                createdAt: reference.createdAt,
                image: !reference.referenceAttachments.length ? undefined : {
                    id: reference.referenceAttachments[0].attachment.id,
                    thumbnail: reference.referenceAttachments[0].attachment.url,
                    original: reference.referenceAttachments[0].attachment.url,
                },
                category: {
                    id: reference.category.id,
                    name: reference.category.name,
                    slug: reference.category.slug,
                },
            }
        });

        // console.log("estoy llegando")

        // console.log('parsedData', parsedData);

        return parsedData;
    }
}

const referenceService = new ProductService();

export default referenceService;