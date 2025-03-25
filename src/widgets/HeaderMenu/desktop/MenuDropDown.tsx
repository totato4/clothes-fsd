import { FC, ReactNode } from "react";
import { clothesArray } from "shared/Constants/Constants";
import MenuDropDownList from "./MenuDropDownList";
import { MenuTitle, forHuman } from "./Menu";
const clothesCategoryArray = [
  [" Одежда "],
  ["Обувь  "],
  [" Аксессуары "],
  ["Спорт  "],
  [" Красота "],
  [" Распродажа "],
];

interface props {
  title: MenuTitle;
  children?: ReactNode;
  forHuman: forHuman;
  category: number;
  setCategory: (number: number) => void;
}

const MenuDropDown: FC<props> = ({
  title,
  forHuman,
  category,
  setCategory,
}) => {
  return (
    <div
      className="w-full flex flex-col justify-between items-center bg-white select-none 
    absolute z-20 left-0 right-0   bottom-0 translate-y-[100%]  shadow-inner  "
    >
      <div className=" flex flex-col items-center justify-start relative desktop:w-full sm:max-w-[1144px]">
        <div className="desktop:w-[1144px] sm:max-w-[1144px]">
          <div
            className="mt-[18px] bg-white w-full mx-auto
    "
          >
            <div className="h-[37.5px] flex desktop:justify-start sm:justify-center">
              <ul className="flex  font-medium text-gc1 text-[16px] leading-[19.5px] sm:gap-4 md:gap-5 desktop:gap-[40px]">
                {clothesCategoryArray.map((obj, i) => (
                  <li
                    className={` cursor-pointer hover:text-black2 relative hover:font-bold w-full 
                      ${
                        i == category &&
                        "text-black2 font-bold border-b-4 border-b-[#F8991D]"
                      }
                    `}
                    onMouseEnter={() => setCategory(i)}
                    key={i}
                  >
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-full -my-[3px] border-[0.5px] mb-[36px]" />
        <div className="font-bold text-[25px] leading-[30.48px] text-gcCBCBCB  mb-[25px] bg-white desktop:w-[1144px] max-w-[1144px] desktop:-ml-1">
          <span>{title}</span>
        </div>
        <MenuDropDownList forHuman={forHuman} handleChange={() => {}}>
          {clothesArray[category]}
        </MenuDropDownList>
      </div>
    </div>
  );
};

export default MenuDropDown;
