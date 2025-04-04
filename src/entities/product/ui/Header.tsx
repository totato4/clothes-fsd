import { useSearchParams } from "react-router-dom";

// const array = {
//   man: "Товары для мужчин",
//   woman: "Товары для женщин",
//   kid: "Товары для детей",
// };

const Header = ({ totalCount = 0 }: { totalCount?: number }) => {
  const [searchParams] = useSearchParams();

  const human = searchParams.get("clothes_c")
    ? searchParams.get("clothes_c")
    : searchParams.get("human_c") && searchParams.get("human_c");
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-4 font-bold text-[20px] leading-[24.38px] text-black2">
          {human?.toUpperCase()}
          <div className="font-normal text-[20px] leading-[24.38px] text-gcCBCBCB">
            {totalCount} товаров
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 0H13C12.45 0 12 0.45 12 1C12 1.55 12.45 2 13 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0ZM18 11C18 10.45 17.55 10 17 10L1 10C0.450001 10 0 10.45 0 11C0 11.55 0.450001 12 1 12L17 12C17.55 12 18 11.55 18 11ZM17 5L7 5C6.45 5 6 5.45 6 6C6 6.55 6.45 7 7 7L17 7C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5Z"
              fill="#E5E5E5"
            />
          </svg>
          <div className="flex items-center gap-1 text-[12px] leading-[14.63px] font-semibold">
            по популярности
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
        </div>
      </div>
    </>
  );
};

export default Header;
