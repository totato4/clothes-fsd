import { addOneItem } from "entities/cart";
import { useGetOneProductQuery } from "entities/product/api/productApi";
import ItemPageLoader from "entities/product/ui/ItemPageLoader";
import ProductCard from "entities/product/ui/ProductCard";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "shared/model";
import { MatchMediaProps, useMatchMedia } from "shared/model/UseMatchMedia";

export const ProductPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id = 0 }: { id?: number } = useParams();

  const { data, isLoading, isError } = useGetOneProductQuery({ id });
  const navigate = useNavigate();
  useEffect(() => {
    isError && navigate("/");
  }, [isError, navigate]);
  return (
    <div className=" flex flex-col justify-center items-center relative max-w-[1144px] mx-auto min-h-100%">
      <GoBackButton />
      {isLoading ? (
        <ItemPageLoader />
      ) : (
        <>
          {data && <ProductCard item={data.product[0]} />}
          <div className="flex gap-x-2 items-center justify-between pt-3 text-sm">
            <button className="bg-yellow-300 rounded-md p-2 hover:bg-yellow-400 duration-500">
              Купить
            </button>
            <button
              // onClick={() => {
              //   data && setCart(data.product[0]);
              // }}
              onClick={() => {
                dispatch(addOneItem(id));

                console.log("click");
              }}
              className="bg-yellow-300 rounded-md p-2 hover:bg-yellow-400 duration-500"
            >
              Добавить в корзину
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const GoBackButton = () => {
  const navigate = useNavigate();
  const { isMobile }: MatchMediaProps = useMatchMedia();
  return (
    <button
      onClick={() => navigate(-1)}
      className={`${
        isMobile ? "mb-[20px] " : "mb-[50px] mr-auto ml-[20px] "
      } rounded-sm whitespace-nowrap hover:text-orange-400 transition duration-150`}
    >
      Вернуться назад
    </button>
  );
};
