import { useState } from "react";
import HeaderLOGO from "./HeaderLOGO";
import Search from "./Search";
import MenuItem from "./MenuItem";
import MenuDropDown from "./MenuDropDown";
import { AuthComponent } from "./AuthComponent/AuthComponent";
// import { useAppDispatch } from "shared/model";

export enum MenuTitle {
  WOMAN = "ЖЕНСКАЯ ОДЕЖДА",
  MAN = "МУЖСКАЯ ОДЕЖДА",
  KID = "ДЕТСКАЯ ОДЕЖДА",
}
export enum forHuman {
  WOMAN = "woman",
  MAN = "man",
  KID = "kid",
}

const Menu = () => {
  const [category, setCategory] = useState(0);
  // const category = useAppSelector((state) => state.filterSlice.filter.category);
  // const dispatch = useAppDispatch();
  return (
    <div onMouseLeave={() => setCategory(0)} className="w-full relative ">
      <div className="max-w-[1144px]  mx-auto px-0  py-6 flex items-center h-[60px] justify-end">
        <AuthComponent />
      </div>
      <div className="max-w-[1144px]  mx-auto px-0  py-6 flex items-center h-[60px]">
        <HeaderLOGO />
        <div className="flex mx-auto align-middle desktop:[&>*:nth-child(2)]:ml-[59px] desktop:[&>*:nth-child(2)]:mr-[80px] desktop:ml-[273px] desktop:gap-x-0 gap-x-4 font-normal text-[16px] leading-[19.5px] ">
          <MenuItem name={"ЖЕНЩИНАМ"}>
            <MenuDropDown
              category={category}
              setCategory={setCategory}
              title={MenuTitle.WOMAN}
              forHuman={forHuman.WOMAN}
            ></MenuDropDown>
          </MenuItem>

          <MenuItem name={"МУЖЧИНАМ"} pl={"59px"} pr={"80px"}>
            <MenuDropDown
              category={category}
              setCategory={setCategory}
              title={MenuTitle.MAN}
              forHuman={forHuman.MAN}
            ></MenuDropDown>
          </MenuItem>
          <MenuItem name={"ДЕТЯМ"}>
            <MenuDropDown
              category={category}
              setCategory={setCategory}
              title={MenuTitle.KID}
              forHuman={forHuman.KID}
            ></MenuDropDown>
          </MenuItem>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Menu;
