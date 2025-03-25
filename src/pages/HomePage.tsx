import { MatchMediaProps, useMatchMedia } from "shared/model/UseMatchMedia";
import CarouselProducts from "widgets/CarouselProducts/CarouselProducts";
import ClothesTags from "widgets/ClothesTags/ClothesTags";
import { useEffect } from "react";
import {
  useGetKidProductQuery,
  useGetManProductQuery,
  useGetWomanProductQuery,
} from "entities/product/api/productApi";

const HomePage = () => {
  const { isMobile, isTablet }: MatchMediaProps = useMatchMedia();
  const manProduct = useGetManProductQuery();
  const womanProduct = useGetWomanProductQuery();
  const kidProduct = useGetKidProductQuery();

  return (
    <div
      className={`container max-w-[1149px] mx-auto px-[5px] flex flex-auto ${
        isMobile && "mt-[90px] "
      } ${isTablet && "px-3"} `}
    >
      <div className="">
        {/* i understand how use not-last-child in tailwnd, but is not  . This is delete last child margin bottom */}
        <div className="mb-[-80px]">
          <CarouselProducts
            human_c={"woman"}
            data={womanProduct.data}
            isError={womanProduct.isError}
            isLoading={womanProduct.isLoading}
            isSuccess={womanProduct.isSuccess}
            key={"woman product"}
            title="ТОВАРЫ ДЛЯ ЖЕНЩИН"
          />
          <CarouselProducts
            human_c={"man"}
            title="ТОВАРЫ ДЛЯ МУЖЧИН"
            data={manProduct.data}
            isError={manProduct.isError}
            isLoading={manProduct.isLoading}
            isSuccess={manProduct.isSuccess}
            key={"man product"}
          />
          <CarouselProducts
            human_c={"kid"}
            data={kidProduct.data}
            isError={kidProduct.isError}
            isLoading={kidProduct.isLoading}
            isSuccess={kidProduct.isSuccess}
            key={"kid product"}
            title="ТОВАРЫ ДЛЯ ДЕТЕЙ"
          />
        </div>
        <div className=" p-5 max-w-[250px] "></div>
        <ClothesTags />
      </div>
    </div>
  );
};

export default HomePage;
