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
                categoryAttachments {
                    attachment {
                        id
                        uid
                        url
                    }
                }
                children {
                    id
                    uid
                    name
                    slug
                    parent {
                        id
                        name
                        slug
                    }
                    categoryAttachments {
                        attachment {
                            id
                            uid
                            url
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

        // console.log('CATEGORIES FETCHED!');

        // console.log('data', data.getAllCategories);

        const parsedData = data.getAllCategories.map(category => {
            const children = category.children.map(child => {
                return {
                    uid: child.uid,
                    name: child.name,
                    slug: child.slug,
                    parent: {
                        id: child.parent.id,
                        name: child.parent.name,
                        slug: child.parent.slug,
                    },
                    image: !child.categoryAttachments.length ? undefined : {
                        id: child.categoryAttachments[0].attachment.id,
                        thumbnail: child.categoryAttachments[0].attachment.url,
                        original: child.categoryAttachments[0].attachment.url,
                    },
                };
            });

            return {
                uid: category.uid,
                name: category.name,
                slug: category.slug,
                image: !category.categoryAttachments.length ? undefined : {
                    id: category.categoryAttachments[0].attachment.id,
                    thumbnail: category.categoryAttachments[0].attachment.url,
                    original: category.categoryAttachments[0].attachment.url,
                },
                children,
            }
        });

        return parsedData;
    }
}

const categoryService = new CategoryService();

export default categoryService;