import { useAppDispatch, useAppSelector, useDebounce } from "shared/model";
import { CartItem } from "./CartItem";
import { ProductInCart, clearCartData } from "entities/cart";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useUpdateCartMutation } from "entities/cart/api/cartApi";

export const CartPannel = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const dispatch = useAppDispatch();
  // const { userName, isLogged } = useAppSelector((state) => state.AUTH_TAG);
  const { itemsMap } = useAppSelector((state) => state.CART_TAG);

  // const debouncedValue = useDebounce<ProductInCart[]>(itemsMap, 5000);
  // const [updateData] = useUpdateCartMutation();
  // useEffect(() => {
  //   const updateCart = async () => {
  //     try {
  //       console.log(debouncedValue);
  //       await updateData({ userName, products: debouncedValue });
  //     } catch (err) {
  //       console.error("не удалось обновить корзину", err);
  //     }
  //   };
  //   updateCart();
  // }, [debouncedValue]);

  let countProduct = 0;
  if (Array.isArray(itemsMap)) {
    countProduct = itemsMap.reduce((acc, cur) => {
      acc = acc + cur.quantity;
      return acc;
    }, 0);
  }

  return (
    <div
      className={`flex flex-col items-center gap-y-8
      fixed top-0 right-0  bg-slate-200 h-full  w-full md:w-[300px]   transition duration-200 ${
        open ? " translate-x-0" : "translate-x-[100%]"
      }`}
    >
      {itemsMap.length ? (
        <div>Товаров в корзине: {countProduct}</div>
      ) : (
        <div>У вас нет товаров в корзине.</div>
      )}
      <div className="flex flex-col items-center w-full px-2 gap-y-5 text-sm">
        {itemsMap.length !== 0 &&
          itemsMap.map((elem, index) => (
            <CartItem key={index + "cartItem"} {...elem} />
          ))}
      </div>

      <div className="w-full flex justify-center items-center flex-col gap-4 mt-auto mb-8">
        {itemsMap.length !== 0 && (
          <button
            className="text-[15px] flex items-center justify-center bg-yellow-400 p-3 rounded-md w-[90%]"
            onClick={() => {
              dispatch(clearCartData());
              setOpen(false);
            }}
          >
            <div>Очистить корзину</div>
          </button>
        )}
        <button className="text-[15px] flex items-center justify-center bg-[#F8991D] p-3 rounded-md w-[90%]">
          Перейти к заказу
        </button>
        <button
          className="text-[15px] flex items-center justify-center bg-[#F8991D] p-3 rounded-md w-[90%]"
          onClick={() => setOpen(false)}
        >
          Закрыть корзину
        </button>
      </div>
    </div>
  );
};
