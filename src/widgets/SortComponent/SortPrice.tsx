import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PopupClick } from "shared/types";
import RangeSlider from "./RangeSlider";
import SortPriceCategory from "./SortPriceCategory";

const sortCatList = [1000, 2000, 3000, 5000, 10000];

const SortPrice = () => {
  const [show, setShow] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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

  // Range Slider
  const [price_min, setPrice_min] = useState(0);
  const [price_max, setPrice_max] = useState(10000);
  const [searchParams, setSearchParams] = useSearchParams();

  // const onChangeValue = (paramName: string, value: string) => {
  //   searchParams.set(paramName, value);
  // };

  const updateRange = (_event: Event, value: number[]) => {
    setPrice_min(value[0]);
    setPrice_max(value[1]);
  };

  // Price change
  const handleSubmit = () => {
    price_min > 1
      ? searchParams.set("price_min", String(price_min))
      : searchParams.delete("price_min");
    price_max < 10000
      ? searchParams.set("price_max", String(price_max))
      : searchParams.delete("price_max");
    setSearchParams(searchParams);
  };

  return (
    <div ref={ref} className="grid relative ">
      <div
        onClick={() => togglePopup()}
        className={` ${
          show && "shadow-md"
        } flex justify-center items-center pt-[7px] pb-[3px] px-[9px] gap-x-[7px] `}
      >
        <button>Цена</button>
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
        <div className="flex flex-col z-20 absolute bottom-0 right-0 translate-x-[0%] translate-y-[100%] w-[230px] bg-white shadow-md ">
          <div className="flex whitespace-nowrap pt-5 pl-5 mb-[10px] font-semibold">
            задать диапазон
          </div>
          <div className="mx-auto my-[10px]">
            <input
              className="[appearance:textfield] w-[95px] h-[30px] placeholder:text-gcC4 border border-gcE5"
              type="text"
              placeholder="от"
              value={price_min}
              onChange={(e) => setPrice_min(Number(e.target.value))}
            />
            <input
              className="[appearance:textfield] w-[95px] h-[30px] placeholder:text-gcC4 border border-gcE5"
              type="text"
              placeholder="до"
              value={price_max}
              onChange={(e) => setPrice_max(Number(e.target.value))}
            />
          </div>
          <div>
            <RangeSlider
              updateRange={updateRange}
              RangeVal={[price_min, price_max]}
            />
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="bg-black2 text-white w-[190px] h-[40px] flex justify-center items-center mx-auto my-5"
            >
              Применить
            </button>
          </div>
          <div className="flex justify-between relative">
            <div className="border-[0.5px] w-[159px] border-gcE5 mb-[11px] " />
            <div className="mr-5 absolute right-0 top-0 translate-y-[-45%]  text-gcE5">
              ИЛИ
            </div>
          </div>
          <div className="flex flex-col mb-[30px] mx-[20px] gap-y-[16px]">
            {sortCatList.map((arr, i) => (
              <SortPriceCategory
                key={i}
                catValue={arr}
                amount={Math.floor(Math.random() * 100) + 1}
                price_max={price_max}
                setPrice_max={setPrice_max}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortPrice;
