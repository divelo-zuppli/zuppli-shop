import { gql } from 'graphql-request';

import { getClient } from '../graphql';

class CategoryService {
    async getAll() {
        const graphQLClient = await getClient();

        const query = gql`
        query getAllCategories (
            $limit: Int,
            $skip: Int,
            $q: String,
            $onlyRoots: Boolean
        ) {
            getAllCategories (
                getAllCategoriesInput: {
                    limit: $limit,
                    skip: $skip,
                    q: $q,
                    onlyRoots: $onlyRoots
                }
            ) {
                id
                uid
                name
                slug
                parent {
                    id
                    name
                    slug
                }
                children {
                    id
                    name
                    slug
                    parent {
                        id
                        name
                        slug
                    }
                    children {
                        id
                        name
                        slug
                        parent {
                            id
                            name
                            slug
                        }
                    }
                }
            }
        }
        `;

        const variables = {
            onlyRoots: true,
        };

        const data = await graphQLClient.request(query, variables);

        console.log('CATEGORIES FETCHED!');

        return data.getAllCategories;
    }
}

const categoryService = new CategoryService();

export default categoryService;