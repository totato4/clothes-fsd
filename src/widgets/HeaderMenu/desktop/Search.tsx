import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "shared/model";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search");
  // const query = searchParams.get('q') == null ? '' : searchParams.get('q');

  const [value, setValue] = useState<string>(query || "");

  const debouncedValue = useDebounce<string>(value, 400);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!debouncedValue) {
      searchParams.delete("search");
      setSearchParams(searchParams);
    } else {
      searchParams.set("search", debouncedValue);
      setSearchParams(searchParams);
    }
  }, [debouncedValue]);

  const onClearInput = () => {
    searchParams.delete("search");
    setSearchParams(searchParams);
    setValue("");
  };

  return (
    <div className="font-normal text-[12px] leading-[14.63px] flex items-start justify-center relative w-[200px] h-[20px]  desktop:mt-[-5.5px] desktop:mr-[4.4px] group">
      {!value && (
        <div className=" w-5 h-5">
          <div className=" group-hover:hidden">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 7.89217C0 12.2439 3.5472 15.7843 7.90726 15.7843C9.80317 15.7843 11.5454 15.1149 12.9091 14.0004L18.6493 19.7297C18.7226 19.8031 18.8097 19.8613 18.9057 19.901C19.0016 19.9406 19.1045 19.961 19.2083 19.9609C19.3649 19.9613 19.518 19.9152 19.6482 19.8285C19.7785 19.7418 19.88 19.6185 19.9399 19.4742C19.9998 19.3298 20.0154 19.171 19.9846 19.0178C19.9539 18.8646 19.8783 18.7239 19.7674 18.6137L14.0272 12.8845C15.1438 11.5234 15.8145 9.78448 15.8145 7.89217C15.8145 3.54043 12.2673 0 7.90726 0C3.5472 0 0 3.54043 0 7.89217ZM1.58145 7.89217C1.58145 4.41094 4.41937 1.57843 7.90726 1.57843C11.3959 1.57843 14.2331 4.41094 14.2331 7.89217C14.2331 11.3734 11.3951 14.2059 7.90726 14.2059C4.41937 14.2059 1.58145 11.3734 1.58145 7.89217Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      )}
      <input
        type="text"
        value={value}
        className=" placeholder:text-gc1 placeholder:font-normal w-[200px] h-[20px] border-white text-[12px] outline-none focus:outline-nonegroup-focus:border-b-2 group-focus:border-b-gray-400
              shadow-none"
        placeholder="Например: Платье Gucci"
        onChange={(e) => onChangeInput(e)}
      />
      {value && (
        <div className="absolute right-0">
          <svg
            onClick={onClearInput}
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 6L18 18" stroke="#000000" strokeLinecap="round" />
            <path d="M18 6L6.00001 18" stroke="#000000" strokeLinecap="round" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Search;
