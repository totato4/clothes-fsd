import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Product } from "entities/product/api/types";

// type MyIitem = IProduct | image_url;
// type image_url = { image_url: string | undefined };
type props = {
  item: Product;
  children?: ReactNode | string | number;
};

const ProductCard = ({ item, children }: props) => {
  const { id, price, discount, image_url, title } = item;

  return (
    <div className="text-black2  font-medium text-[11px] leading-[13.41px] flex flex-col gap-y-[5px]">
      <Link key={id} to={`/Item/${id}`}>
        <div className="relative max-w-[224px] max-h-[340px] select-none">
          <img
            className="w-[224px] h-[340px] overflow-hidden object-cover"
            src={`../img/${image_url}`}
            alt="clothes photo"
          />

          {discount ? (
            <div className="absolute bottom-2 right-2 py-[5px] px-[10px] text-white bg-yc1">
              {`-${discount}%`}
            </div>
          ) : (
            ""
          )}
        </div>
      </Link>
      <span className="text-[10px] leading-[12.19px]">{title}</span>
      <div className="flex  gap-2">
        <span className={`${discount !== 0 && discount ? "line-through" : ""}`}>
          {price} ₽
        </span>
        {discount !== 0 && discount && price ? (
          <span className="text-yc1">
            {Math.ceil(price - (discount / 100) * price)} ₽
          </span>
        ) : (
          ""
        )}
      </div>
      {children}
    </div>
  );
};

export default ProductCard;
