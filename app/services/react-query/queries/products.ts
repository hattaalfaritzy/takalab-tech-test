import {useQuery} from 'react-query';
import {AxiosResponse} from 'axios';
import {ApiService} from 'app/services/ApiService';
import {useStore} from 'app/store';

/**
 *
 * @returns Deals with my request details api
 * Caching handled by react query
 */
export const GetAllProducts = () => {
  const productServices = ApiService.createInstance();

  return useQuery(['ProductsAll'], async () => {
    const response: AxiosResponse = await productServices.getAllProducts();
    return response.data;
  });
};

export const GetProductById = (id: string) => {
  const productServices = ApiService.createInstance();

  return useQuery(['ProductsById'], async () => {
    if (id) {
      const response: AxiosResponse = await productServices.getProductById(id);
      return response.data;
    } else {
      return false;
    }
  });
};
