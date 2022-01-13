/* 4f8d7a21524f0151f71473edf7f5720a52c5fd76
 * This file is automatically generated by graphql-let. */

import * as Types from "graphql-let/__generated__/__types__";
export declare type ProductPartsFragment = {
  __typename?: 'Product';
  id: string;
  name: string;
  slug: string;
  product_type: Types.ProductType;
  price?: number | null | undefined;
  sale_price?: number | null | undefined;
  min_price?: number | null | undefined;
  max_price?: number | null | undefined;
  quantity: number;
  unit: string;
  type: {
    __typename?: 'Type';
    id: string;
    name: string;
    slug: string;
    settings?: {
      __typename?: 'TypeSettings';
      productCard: string;
    } | null | undefined;
  };
  image?: {
    __typename?: 'Attachment';
    id?: string | null | undefined;
    thumbnail?: string | null | undefined;
    original?: string | null | undefined;
  } | null | undefined;
};
export declare const ProductPartsFragmentDoc: import("@apollo/client").DocumentNode;