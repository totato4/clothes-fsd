import { addOneItem, removeItem, removeOneItem } from "entities/cart";
import { useGetOneProductQuery } from "entities/product/api/productApi";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useAppDispatch } from "shared/model";

type props = { id: number; quantity: number };

export const CartItem = ({ id, quantity }: props) => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useGetOneProductQuery({ id });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product</div>;
  if (!data?.product?.[0]) return <div>Product not found</div>;

  const product = data.product[0];

  return (
    <div className="flex flex-nowrap w-full max-h-17 justify-between">
      <img
        src={`../img/${product.image_url}`}
        alt="product"
        className="w-[20%]"
      />
      <div>
        <div>{product.title}</div>
        <div className="flex flex-nowrap flex-col gap-y-1 gap-x-1">
          <div>цена:{data.product[0].price * quantity} р</div>
          <div className="flex justify-center gap-x-2">
            <button onClick={() => dispatch(removeOneItem(id))}>
              <CiCircleMinus className="w-5 h-5" />
            </button>
            {quantity} шт.
            <button onClick={() => dispatch(addOneItem(id))}>
              <CiCirclePlus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <button
        className="h-full bg-gray-300 w-full max-w-[40px] justify-center items-center rounded-md group"
        onClick={() => dispatch(removeItem(id))}
      >
        <MdOutlineDeleteForever className="h-[25px] w-[25px] mx-auto group-hover:text-red-700 group-hover:animate-pulse" />
      </button>
    </div>
  );
};
