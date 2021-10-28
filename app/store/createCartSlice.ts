import {StateCreator} from 'zustand';

export interface ICartSlice {
  cart: {
    key: number;
    product: any;
    qty: number;
  }[];

  addToCart: (product: any, qty: number) => boolean;
  removeFromCart: (key: number) => boolean;
  updateQty: (key: number, qty: number) => boolean;
  clearCart: () => boolean;

  countTotal: () => number;
}

export const createCartSlice: StateCreator<ICartSlice> = (set, get) => ({
  cart: [],
  addToCart: (product, qty) => {
    let cart: any = get().cart;
    if (!cart.map((value: any) => value.key).includes(product.id)) {
      cart.push({
        key: product.id,
        product,
        qty,
      });
    } else {
      let index = cart.map((value: any) => value.key).indexOf(product.id);
      cart[index].qty += qty;
    }

    set({cart});

    return true;
  },
  removeFromCart: (key) => {
    let cart: any = get().cart;
    let index = cart.map((value: any) => value.key).indexOf(key);
    cart.splice(index, 1);

    set({cart});

    return true;
  },
  updateQty: (key, qty) => {
    let cart: any = get().cart;
    let index = cart.map((value: any) => value.key).indexOf(key);
    cart[index].qty = qty;

    set({cart});

    return true;
  },
  countTotal: () => {
    let cart: any = get().cart;
    let total = 0;

    cart.forEach((value: any) => {
      total += value.product.price * value.qty;
    });

    return total.toFixed(2);
  },
  clearCart: () => {
    set({cart: []});

    return true;
  },
});
