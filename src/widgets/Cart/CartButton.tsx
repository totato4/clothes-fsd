import { BsCart4 } from "react-icons/bs";

export const CartButton = ({
  openGoodsCart,
  open,
}: {
  openGoodsCart: () => void;
  open: boolean;
}) => {
  return (
    <button
      onClick={openGoodsCart}
      className="fixed w-[50px] h-[50px] bg-[#F8991D] bottom-[10%] right-[5%]  rounded-[50%] flex items-center justify-center hover:bg-orange-400 transition-colors"
    >
      <BsCart4
        className={`w-[50%] h-[50%] -mt-1 text-[#d8d8d8] ${
          open && " animate-bounce"
        }`}
      />
    </button>
  );
};
