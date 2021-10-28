import {useQuery} from 'react-query';
import {AxiosResponse} from 'axios';
import {ApiService} from 'app/services/ApiService';
import {useStore} from 'app/store';

/**
 *
 * @returns Deals with my request details api
 * Caching handled by react query
 */
export const GetUserDetails = () => {
  const userService = ApiService.createInstance();
  const userId = useStore((state) => state.userId);

  return useQuery(['UserDetails'], async () => {
    const response: AxiosResponse = await userService.getUserDetail(userId);
    return response.data;
  });
};
