import React, { useState } from "react";
import CheckBoxRadio from "./CheckBoxRadio";
import { PopupClick } from "shared/types";
import { useSearchParams } from "react-router-dom";

type valuesList = {
  name: string;
  quantity: number;
  arrayName: string;
};

type props = {
  paramName: string;
  valuesList: valuesList[];
  title: string;
};

const ItemFilter = ({ paramName, valuesList, title }: props) => {
  const [val, setVal] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const onDeleteValue = () => {
    searchParams.delete(paramName);
    setSearchParams(searchParams);
    setShow(false);
    setVal("");
  };
  const onChangeValue = (value: string) => {
    setVal(value);
    searchParams.set(paramName, value);
    setSearchParams(searchParams);
  };

  //
  const [show, setShow] = React.useState(false);

  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const _event = event as MouseEvent & PopupClick;
      if (ref.current && !_event.composedPath().includes(ref.current)) {
        setShow(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const togglePopup = () => {
    setShow(!show);
  };

  //

  return (
    <div ref={ref} className="grid relative ">
      <div
        onClick={() => togglePopup()}
        className={`${
          show && "shadow-md"
        } flex justify-center items-center pt-[7px] pb-[3px] px-[9px] gap-x-[7px] `}
      >
        <button>{title}</button>
        <svg
          width="11"
          height="6"
          viewBox="0 0 11 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0.984221L0.984221 0L5.01578 4.03156L9.04734 0L10.0316 0.984221L5.01578 6L0 0.984221Z"
            fill="black"
          />
        </svg>
      </div>
      {show && (
        <form>
          <div className="flex flex-col z-20 absolute bottom-0 right-0 translate-x-[0%] translate-y-[100%] w-[230px] bg-white shadow-md ">
            <label className="my-5 mr-5 ml-auto cursor-pointer">
              <span
                onClick={onDeleteValue}
                className={"font-medium text-yc1 underline"}
              >
                Выбрать все
              </span>
            </label>
            <div className="w-full border-[0.5px] border-gcE5" />
            <div className="flex flex-col mb-[30px] mx-[20px] gap-y-[16px] my-5">
              {valuesList.map((obj, i) => (
                <div key={i} className="flex justify-between items-center ">
                  <label
                    className="flex gap-[15px] cursor-pointer  w-full mr-[20px]"
                    onClick={() => onChangeValue(obj.name)}
                  >
                    <input
                      value={obj.name}
                      // checked={!!val.find((elem) => elem == obj.name)}
                      checked={val == obj.name}
                      onChange={(e) => console.log("click")}
                      //             className=" before:w-[8px] before:h-[8px] before:border before:rounded-[50%] before:bg-yc1 before:border-yc1
                      //  border-gcE5 relative before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] "
                      className="hidden"
                    />
                    <CheckBoxRadio checked={val == obj.name} />

                    <span>{obj.name}</span>
                  </label>
                  <div className="text-gcE5">{obj.quantity}</div>
                </div>
              ))}
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ItemFilter;
