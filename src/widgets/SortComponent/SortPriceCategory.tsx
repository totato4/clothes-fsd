import { Dispatch, SetStateAction } from "react";

type props = {
  catValue: number;
  amount: number;
  price_max: number;
  setPrice_max: Dispatch<SetStateAction<number>>;
};

const SortPriceCategory: React.FC<props> = ({
  catValue,
  amount,
  price_max,
  setPrice_max,
}) => {
  return (
    <div
      onClick={() => setPrice_max(catValue)}
      className={`flex flex-nowrap justify-between items-center cursor-pointer hover:text-yc1 hover:transition-color ${
        price_max == catValue && "text-yc1 "
      } `}
    >
      <div className="flex gap-[15px]">
        <input
          type="radio"
          name="check1"
          id=" "
          className={`${
            price_max == catValue &&
            "before:w-[8px] before:h-[8px] before:border before:rounded-[50%] before:bg-yc1 before:border-yc1 border-gcE5 relative before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%]"
          }`}
          //   className={`${  active[0] == index ? "before:w-[6px] before:h-[6px] before:border before:rounded-[50%] before:bg-yc1 before:border-yc1  before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%]" : ""} border-gcE5 relative `}
        />
        <span>до {catValue} ₽</span>
      </div>
      <div className="text-gcE5">{amount}</div>
    </div>
  );
};

export default SortPriceCategory;
