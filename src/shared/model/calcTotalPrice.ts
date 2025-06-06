import { Product } from "entities/product/api/types";

export const calcTotalPrice = (products: Product[]) => {
  return products.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

export const calcTotalCount = (products: Product[]) => {
  return products.reduce((sum, obj) => obj.count + sum, 0);
};
