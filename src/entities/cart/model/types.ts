
// export type ProductInCart = {
//     quantity: number;
//     product: Product;
// } 

export type ProductInCart = {
id: number; quantity: number 
}

export type Cart = {
  itemsMap: ProductInCart[];
  version: number
}
