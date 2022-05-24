import { CategoriesQueryOptionsType, Category } from '@framework/types';
import { useQuery } from 'react-query';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import categoryService from '../../../services/category.service';

export const fetchCategories = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const data = await categoryService.getAll();

  console.log('data: ', data);

  return { categories: { data: data as Category[] } };
};

export const useCategoriesQuery = (options: CategoriesQueryOptionsType) => {
  console.log('options: ', options);

  return useQuery<{ categories: { data: Category[] } }, Error>(
    [API_ENDPOINTS.CATEGORIES, options],
    fetchCategories
  );
};
