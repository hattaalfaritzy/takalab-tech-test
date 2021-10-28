import AsyncStorage from '@react-native-community/async-storage';
import create, {GetState, SetState, StoreApi} from 'zustand';
import {persist} from 'zustand/middleware';
import {createLoginSlice, ILoginSlice} from './createLoginSlice';
import {createThemeSlice, IThemeSlice} from './createThemeSlice';
import {createCartSlice, ICartSlice} from './createCartSlice';

interface IStore extends ILoginSlice, IThemeSlice, ICartSlice {}

/**
 * Make sure to enforce type for each slice
 */

export const useStore = create<IStore>(
  persist(
    (set, get, api) => ({
      ...createLoginSlice(
        set as unknown as SetState<ILoginSlice>,
        get as GetState<ILoginSlice>,
        api as unknown as StoreApi<ILoginSlice>,
      ),
      ...createThemeSlice(
        set as unknown as SetState<IThemeSlice>,
        get as GetState<IThemeSlice>,
        api as unknown as StoreApi<IThemeSlice>,
      ),
      ...createCartSlice(
        set as unknown as SetState<ICartSlice>,
        get as GetState<ICartSlice>,
        api as unknown as StoreApi<ICartSlice>,
      ),
    }),
    {
      name: 'app-storage',
      getStorage: () => AsyncStorage,
    },
  ),
);
