import { useEffect, useState } from "react";

import { CartButton } from "./CartButton";
import { CartPannel } from "./CartPannel";
import { useAppDispatch, useAppSelector } from "shared/model";
import { useGetCartQuery } from "entities/cart/api/cartApi";
import { updateLocalCart } from "entities/cart/model/slice";

export const Cart = () => {
  const dispatch = useAppDispatch();
  const { isLogged, userName } = useAppSelector((state) => state.AUTH_TAG);
  const [open, setOpen] = useState<boolean>(false);
  const openGoodsCart = () => {
    setOpen(!open);
  };
  // const { data, isSuccess, isLoading } = useGetCartQuery({
  //   userName,
  // });

  // useEffect(() => {
  //   if (data) {
  //     dispatch(updateLocalCart(data));
  //     console.log(data, "обновился");
  //   }
  // }, [isSuccess, isLogged, isLoading, data]);
  return (
    <>
      {isLogged ? (
        <div className="w-full h-full relative z-50">
          <CartPannel open={open} setOpen={setOpen} />
          {!open && <CartButton open={open} openGoodsCart={openGoodsCart} />}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
