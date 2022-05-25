import { QueryOptionsType, Product } from '@framework/types';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import referenceService from '../../../services/product.service';

import { useInfiniteQuery } from 'react-query';
type PaginatedProduct = {
    data: Product[];
    paginatorInfo: any;
  };

export const fetchProducts = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const data = await referenceService.getAll();

  return {
    data: data as Product[],
    paginatorInfo: {
      nextPageUrl: '',
    },
  };
};

export const useProductsQuery = (options: QueryOptionsType) => {
  console.log('options: ', options);

  return useInfiniteQuery<PaginatedProduct, Error>(
    [API_ENDPOINTS.PRODUCTS, options],
    fetchProducts,
    {
      getNextPageParam: ({ paginatorInfo }) => paginatorInfo.nextPageUrl,
    }
  );
};
