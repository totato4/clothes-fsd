import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/hash-navigation";

import ProductCard from "entities/product/ui/ProductCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MatchMediaProps, useMatchMedia } from "shared/model/UseMatchMedia";

import CarouselButton from "shared/uiKit/CarouselButton";
import Separator from "shared/uiKit/Separator";
import ItemPageLoader from "entities/product/ui/ItemPageLoader";
import { human_c, Product } from "entities/product/api/types";
import ResetButton from "features/ResetButton/ResetBtn";
import { useGetByHumanQuery } from "entities/product/api/productApi";

type props = {
  human_c: human_c;
  title: string;
};

const CarouselProducts = ({ human_c, title }: props) => {
  const { isMobile }: MatchMediaProps = useMatchMedia();
  const [swipe, setSwipe] = useState<SwiperCore | undefined>();
  const { data, isLoading, isSuccess, isError } = useGetByHumanQuery(human_c);

  const loading = [...new Array(6)].map(() => (
    <SwiperSlide>
      <ItemPageLoader />
    </SwiperSlide>
  ));

  return (
    <div className="container max-w-[1144px] mx-auto mt-[36px] mb-[80px]">
      <div className="flex justify-between mb-[10px] desktop:h-[40px]">
        <div
          className={`${
            isMobile && "mx-auto"
          } text-ctgName text-[20px] leading-[24.38px] font-bold desktop:my-auto`}
        >
          {title}
        </div>

        {!isMobile && (
          <div className="desktop:h-[40px] flex justify-between items-start desktop:w-[94px] desktop:gap-x-0 gap-x-2">
            <CarouselButton onClick={() => swipe?.slidePrev()} type={"left"} />

            <CarouselButton onClick={() => swipe?.slideNext()} type={"right"} />
          </div>
        )}
      </div>
      <div className="relative ">
        {isMobile && status !== "error" && (
          <div className="absolute left-0 top-[50%] translate-y-[-50%] z-10">
            <CarouselButton onClick={() => swipe?.slidePrev()} type={"left"} />
          </div>
        )}
        <div className="flex  desktop:w-[100vw] w-[95vw] max-w-[1144px] sm:px-0 px-[20px] ">
          {isError && <ResetButton />}
          <Swiper
            grabCursor={true}
            slidesPerView={5}
            spaceBetween={5}
            loop={true}
            onBeforeInit={(swipper) => setSwipe(swipper)}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              350: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              420: {
                slidesPerView: 2,
                spaceBetween: 5,
              },

              500: {
                slidesPerView: 3,
                spaceBetween: 5,
              },

              768: {
                slidesPerView: 5,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 5,
              },
              1182: {
                slidesPerView: 5,
                spaceBetween: 5,
              },
            }}
          >
            {isSuccess &&
              data.product.map((obj: Product) => (
                <SwiperSlide key={obj.id}>
                  <ProductCard item={obj} />
                </SwiperSlide>
              ))}
            {isLoading && loading}
          </Swiper>
        </div>
        {isMobile && status !== "error" && (
          <div className="absolute right-[0] top-[50%] translate-y-[-50%] z-10">
            <CarouselButton onClick={() => swipe?.slideNext()} type={"right"} />
          </div>
        )}
      </div>

      <div
        className={`flex gap-x-[19px] ${
          isMobile ? "justify-center" : "justify-between"
        } items-center pt-[18.5px]  `}
      >
        <Separator />
        <Link to={`/Category?human_c=${human_c}`}>
          <button
            className=" bg-black2 text-gc2 text-[14px] font-montserat font-semibold w-[224px] h-[50px] text-center whitespace-nowrap "
            onClick={() => window.scroll(0, 0)}
          >
            Показать все
          </button>
        </Link>
        {isMobile && <Separator />}
      </div>
    </div>
  );
};

export default CarouselProducts;
