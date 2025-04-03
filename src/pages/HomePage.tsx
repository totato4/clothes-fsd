import { MatchMediaProps, useMatchMedia } from "shared/model/UseMatchMedia";
import CarouselProducts from "widgets/CarouselProducts/CarouselProducts";
import ClothesTags from "widgets/ClothesTags/ClothesTags";

const HomePage = () => {
  const { isMobile, isTablet }: MatchMediaProps = useMatchMedia();

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
            key={"woman product"}
            title="ТОВАРЫ ДЛЯ ЖЕНЩИН"
          />
          <CarouselProducts
            human_c={"man"}
            key={"woman product"}
            title="ТОВАРЫ ДЛЯ МУЖЧИН"
          />
          <CarouselProducts
            human_c={"kid"}
            key={"woman product"}
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
