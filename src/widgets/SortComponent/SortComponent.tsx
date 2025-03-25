import { useState } from "react";
import ItemFilter from "./ItemFilter";
import { useLocation, useSearchParams } from "react-router-dom";
import { arrayBrand, arrayColor, arraySize } from "./constants/Constants";
import SortPrice from "./SortPrice";

const SortComponent = () => {
  return (
    <div className="flex justify-between text-[14px] leading-[17.07px] font-normal text-black2 ">
      <div className="flex justify-center items-center  gap-x-[10px]">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 2H15.8293C15.4175 0.83481 14.3062 0 13 0C11.6938 0 10.5825 0.83481 10.1707 2H1C0.44772 2 0 2.44772 0 3C0 3.55228 0.44772 4 1 4H10.1707C10.5825 5.16519 11.6938 6 13 6C14.3062 6 15.4175 5.16519 15.8293 4H17C17.5523 4 18 3.55228 18 3C18 2.44772 17.5523 2 17 2ZM13 4C13.5523 4 14 3.55228 14 3C14 2.44772 13.5523 2 13 2C12.4477 2 12 2.44772 12 3C12 3.55228 12.4477 4 13 4ZM0 9C0 8.4477 0.44772 8 1 8H2.17071C2.58254 6.83481 3.69378 6 5 6C6.30622 6 7.4175 6.83481 7.8293 8H17C17.5523 8 18 8.4477 18 9C18 9.5523 17.5523 10 17 10H7.8293C7.4175 11.1652 6.30622 12 5 12C3.69378 12 2.58254 11.1652 2.17071 10H1C0.44772 10 0 9.5523 0 9ZM5 10C5.55229 10 6 9.5523 6 9C6 8.4477 5.55229 8 5 8C4.44772 8 4 8.4477 4 9C4 9.5523 4.44772 10 5 10ZM1 14C0.44772 14 0 14.4477 0 15C0 15.5523 0.44772 16 1 16H10.1707C10.5825 17.1652 11.6938 18 13 18C14.3062 18 15.4175 17.1652 15.8293 16H17C17.5523 16 18 15.5523 18 15C18 14.4477 17.5523 14 17 14H15.8293C15.4175 12.8348 14.3062 12 13 12C11.6938 12 10.5825 12.8348 10.1707 14H1ZM14 15C14 15.5523 13.5523 16 13 16C12.4477 16 12 15.5523 12 15C12 14.4477 12.4477 14 13 14C13.5523 14 14 14.4477 14 15Z"
            fill="#E5E5E5"
          />
        </svg>
        <ItemFilter title="Цвет" valuesList={arrayColor} paramName="color_c" />
        <ItemFilter title="Размер" valuesList={arraySize} paramName="size_c" />
        <ItemFilter title="Бренд" valuesList={arrayBrand} paramName="brand_c" />

        <SortPrice />
      </div>
      <div
        // className={`${discount === "discount" && "text-[#F8991D]"} relative`}
        className="relative"
      >
        <button className=" z-50" onClick={() => console.log("СКИДКА")}>
          Товары со скидкой
        </button>
      </div>
    </div>
  );
};

// const MultipleChecks = () => {
//   const [brandArr, setBrandArr] = React.useState<any>([]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     const checked = e.target.checked;
//     console.log(value, checked);
//     if (checked) {
//       setBrandArr([...brandArr, value]);
//     } else {
//       setBrandArr(brandArr.filter((e: any) => e !== value));
//     }
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     console.log(brandArr);
//   };

//   return (
//     <div>
//       <form action="" className="grid gap-y-5" onSubmit={handleSubmit}>
//         <label htmlFor="">Select:</label>
//         <div>
//           <input
//             type="checkbox"
//             name="Brands"
//             value="Brand1"
//             onChange={handleChange}
//           />
//           <label htmlFor="">&nbsp; Brand1</label>
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             name="Brands"
//             value="Brand2"
//             onChange={handleChange}
//           />
//           <label htmlFor="">&nbsp; Brand2</label>
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             name="Brands"
//             value="Brand3"
//             onChange={handleChange}
//           />
//           <label htmlFor="">&nbsp; Brand3</label>
//         </div>
//         <input type="submit" value="submit" />
//       </form>
//     </div>
//   );
// };

// export default MultipleChecks;

export default SortComponent;
