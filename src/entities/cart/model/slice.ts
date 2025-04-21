import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cart, ProductInCart } from "./types";

type CartSliceState = Cart;

const initialState: CartSliceState = {
  itemsMap: [],
  version: 0,
};

export const cartSlice = createSlice({
  name: "CART_TAG",
  initialState,
  reducers: {
    clearCartData: (state) => {
      state.itemsMap = [];
    },
    updateLocalCart: (state, action: PayloadAction<ProductInCart[]>) => {
      state.itemsMap = action.payload;
    },
    addOneItem: (state, action: PayloadAction<number>) => {
      const existingItem = state.itemsMap.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.itemsMap.push({ id: action.payload, quantity: 1 });
      }
    },
    removeOneItem: (state, action: PayloadAction<number>) => {
      const existingItem = state.itemsMap.find(
        (item) => item.id === action.payload
      );

      if (existingItem && existingItem.quantity <= 1) {
        return;
      }

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const indexToUpdate = state.itemsMap.findIndex(
        (item) => item.id === action.payload
      );
      const item = state.itemsMap[indexToUpdate];
      if (!item) {
        return;
      }
      state.itemsMap = state.itemsMap.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  // extraReducers: (builder) => {
  // builder.addMatcher(
  //   cartApi.endpoints.cart.matchFulfilled,
  //   (state: CartSliceState, { payload }) => {
  //     // update cart state if server sent actual version
  //     if (state.version <= payload.version) {
  //       state.itemsMap = payload.itemsMap
  //     }
  //   }
  // )
  // },
});

// export const selectCartTotalPrice = (state: RootState) =>
//   Object.values(state.cart.itemsMap).reduce(
//     (acc, item) => acc + item.quantity * item.product.price,
//     0
//   )

// export const selectProductsInCart = (state: RootState) =>
//   Object.values(state.cart.itemsMap)

// export const selectTotalQuantity = (state: RootState) =>
//   Object.values(state.cart.itemsMap).reduce(
//     (acc, item) => acc + item.quantity,
//     0
//   )

// export const selectProductInCart = createSelector(
//   selectProductsInCart,
//   (_: RootState, productId: number) => productId,
//   (items: ProductInCart[], productId: number): ProductInCart | undefined =>
//     items.find(({ product }) => product.id === productId)
// )

export const {
  addOneItem,
  removeOneItem,
  removeItem,
  clearCartData,
  updateLocalCart,
} = cartSlice.actions;
