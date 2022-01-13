/* ea1c6b45be4f6571809fc6ef1f2a8895d3aa2492
 * This file is automatically generated by graphql-let. */

import * as Types from "graphql-let/__generated__/__types__";
import * as Apollo from '@apollo/client';
export declare type GroupsQueryVariables = Types.Exact<{
  text?: Types.Maybe<Types.Scalars['String']>;
  orderBy?: Types.Maybe<Array<Types.QueryTypesOrderByOrderByClause> | Types.QueryTypesOrderByOrderByClause>;
}>;
export declare type GroupsQuery = {
  __typename?: 'Query';
  types: Array<{
    __typename?: 'Type';
    id: string;
    name: string;
    slug: string;
    icon: string;
    banners?: Array<{
      __typename?: 'Banner';
      id: string;
      title?: string | null | undefined;
      image: {
        __typename?: 'Attachment';
        id?: string | null | undefined;
        original?: string | null | undefined;
        thumbnail?: string | null | undefined;
      };
    }> | null | undefined;
    settings?: {
      __typename?: 'TypeSettings';
      isHome: boolean;
      layoutType: string;
      productCard: string;
    } | null | undefined;
  }>;
};
export declare type GroupQueryVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['ID']>;
  slug?: Types.Maybe<Types.Scalars['String']>;
}>;
export declare type GroupQuery = {
  __typename?: 'Query';
  type: {
    __typename?: 'Type';
    id: string;
    banners?: Array<{
      __typename?: 'Banner';
      id: string;
      title?: string | null | undefined;
      description?: string | null | undefined;
      image: {
        __typename?: 'Attachment';
        id?: string | null | undefined;
        original?: string | null | undefined;
        thumbnail?: string | null | undefined;
      };
    }> | null | undefined;
    promotional_sliders?: Array<{
      __typename?: 'Attachment';
      id?: string | null | undefined;
      thumbnail?: string | null | undefined;
      original?: string | null | undefined;
    }> | null | undefined;
  };
};
export declare const GroupsDocument: Apollo.DocumentNode;
/**
 * __useGroupsQuery__
 *
 * To run a query within a React component, call `useGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupsQuery({
 *   variables: {
 *      text: // value for 'text'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */

export declare function useGroupsQuery(baseOptions?: Apollo.QueryHookOptions<GroupsQuery, GroupsQueryVariables>): Apollo.QueryResult<GroupsQuery, Types.Exact<{
  text?: Types.Maybe<string> | undefined;
  orderBy?: Types.Maybe<Types.QueryTypesOrderByOrderByClause | Types.QueryTypesOrderByOrderByClause[]> | undefined;
}>>;
export declare function useGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroupsQuery, GroupsQueryVariables>): Apollo.QueryTuple<GroupsQuery, Types.Exact<{
  text?: Types.Maybe<string> | undefined;
  orderBy?: Types.Maybe<Types.QueryTypesOrderByOrderByClause | Types.QueryTypesOrderByOrderByClause[]> | undefined;
}>>;
export declare type GroupsQueryHookResult = ReturnType<typeof useGroupsQuery>;
export declare type GroupsLazyQueryHookResult = ReturnType<typeof useGroupsLazyQuery>;
export declare type GroupsQueryResult = Apollo.QueryResult<GroupsQuery, GroupsQueryVariables>;
export declare const GroupDocument: Apollo.DocumentNode;
/**
 * __useGroupQuery__
 *
 * To run a query within a React component, call `useGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *   },
 * });
 */

export declare function useGroupQuery(baseOptions?: Apollo.QueryHookOptions<GroupQuery, GroupQueryVariables>): Apollo.QueryResult<GroupQuery, Types.Exact<{
  id?: Types.Maybe<string> | undefined;
  slug?: Types.Maybe<string> | undefined;
}>>;
export declare function useGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroupQuery, GroupQueryVariables>): Apollo.QueryTuple<GroupQuery, Types.Exact<{
  id?: Types.Maybe<string> | undefined;
  slug?: Types.Maybe<string> | undefined;
}>>;
export declare type GroupQueryHookResult = ReturnType<typeof useGroupQuery>;
export declare type GroupLazyQueryHookResult = ReturnType<typeof useGroupLazyQuery>;
export declare type GroupQueryResult = Apollo.QueryResult<GroupQuery, GroupQueryVariables>;