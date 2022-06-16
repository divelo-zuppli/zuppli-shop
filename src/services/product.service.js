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
                measurementUnit
                measurementValue
                category {
                    id
                    name
                    slug
                }
                products {
                    sellPrice
                    salePrice
                    stock
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

            const productData = reference.products.map(product => {
                return {
                    salePrice: product.salePrice,
                    sellPrice: product.sellPrice,
                    stock: product.stock
                }
            })
            return {
                id: reference.id,
                name: reference.name,
                uid: reference.uid,
                sku: reference.sku,
                slug: reference.name,
                price: productData[0].sellPrice,
                sale_price: productData[0].salePrice,
                quantity: productData[0].stock,
                sold: 8,
                unit: `${reference.measurementValue + reference.measurementUnit}`,
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

        // console.log('parsedData', parsedData);

        return parsedData;
    }

    async getProductsByCategory(uid) {
        const graphQLClient = await getClient();

        const query = gql`
            query getCategoryReferences (
                $uid: String!
            ) {
                getCategoryReferences(
                    getCategoryReferencesInput: {
                        categoryUid: $uid
                    }
                ) {
                    name
                    description
                    measurementUnit
                    measurementValue
                    uid
                    sku
                    products {
                        costPrice
                        salePrice
                        sellPrice
                        stock
                        uid
                    }
                    category {
                        id
                        name
                        slug
                    }
                    referenceAttachments {
                        attachment {
                            url
                            uid
                            id
                        }
                    }
                }
            }
        `

        const variables = {
            uid: uid
        }

        const data = await graphQLClient.request(query, variables);

        const parsedData = data.getCategoryReferences.map(reference => {

            const productData = reference.products.map(product => {
                return {
                    salePrice: product.salePrice,
                    sellPrice: product.sellPrice,
                    stock: product.stock
                }
            })
            return {
                id: reference.id,
                name: reference.name,
                uid: reference.uid,
                sku: reference.sku,
                slug: reference.name,
                price: productData[0].sellPrice,
                sale_price: productData[0].salePrice,
                quantity: productData[0].stock,
                sold: 8,
                unit: `${reference.measurementValue + reference.measurementUnit}`,
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

        return parsedData;
    }

}

const referenceService = new ProductService();

export default referenceService;