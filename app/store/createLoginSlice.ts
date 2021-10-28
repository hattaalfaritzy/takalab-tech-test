import {StateCreator} from 'zustand';

export interface ILoginSlice {
  isLoggedIn: boolean;

  userId: number;
  userAddress: {
    id: string;
    name: string;
    detail: string;
  }[];

  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUserAddress: (addreses: any) => boolean;
}

export const createLoginSlice: StateCreator<ILoginSlice> = (set, get) => ({
  isLoggedIn: true,
  userId: 1,
  userAddress: [
    {
      id: '1',
      name: 'Home',
      detail: '7835 New Road 3, Kilcoole. Zipcode 12926-3874',
    },
  ],
  setIsLoggedIn: (isLoggedIn): void => {
    set({isLoggedIn});
  },
  setUserAddress: (addreses) => {
    set({userAddress: addreses});

    console.log(get().userAddress);
    return true;
  },
});
