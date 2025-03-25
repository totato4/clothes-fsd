import { filterTagsArray } from "shared/Constants/Constants";
import { MatchMediaProps, useMatchMedia } from "shared/model/UseMatchMedia";

const ClothesTags = () => {
  const { isMobile, isTablet, isDesktop }: MatchMediaProps = useMatchMedia();
  return (
    <div
      className={`${
        isMobile &&
        "text-[9px] leading-[11px]  grid grid-cols-2 justify-between gap-x-1 gap-y-3 items-center mt-[110px]"
      }
            ${
              isTablet &&
              "font-normal grid grid-cols-3 justify-between  items-center text-[11px] leading-[13.41px] gap-x-[71px] gap-y-[25px] mt-[140px]"
            }
            ${
              isDesktop &&
              "font-normal grid grid-cols-5 justify-start whitespace-nowrap text-[11px] leading-[13.41px] gap-x-[71px] gap-y-[25px] mt-[171px]"
            }
              `}
    >
      {filterTagsArray.map((obj, i) => (
        <div
          key={i}
          className={`
              
              } text-[11px] leading-[13.41px] font-normal text-gc1 flex`}
        >
          <button className="">{obj}</button>
        </div>
      ))}
    </div>
  );
};

export default ClothesTags;
