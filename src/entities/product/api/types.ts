export type Product = {
  id: number;
  title: string;
  discount: number;
  human_c: string;
  size_c: string;
  clothes_c: string;
  price: number;
  rating: number;
  brand: string;
  image_url: string;
  color: string;
}

export type ProductDto = {
  product: Product[],
  totalPages: string | number;
  totalCount: number;
}

export type params = {
  human_c?: string;
  search?: unknown;
}