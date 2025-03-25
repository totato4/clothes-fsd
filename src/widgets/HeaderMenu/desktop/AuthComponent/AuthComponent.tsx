import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "shared/model";
import { IoHomeOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { logout } from "entities/auth/model/slice";
import { clearCartData } from "entities/cart";

export const AuthComponent = () => {
  const { isLogged } = useAppSelector((state) => state.AUTH_TAG);
  return <>{isLogged ? <UserName /> : <AuthBtn />}</>;
};

const AuthBtn = () => {
  return (
    <Link
      to="/signin"
      className="flex justify-end items-center gap-x-2 px-2 text-lg text-[#F8991D] min-w-[70px] min-h-7 border border-[#F8991D] rounded-md"
    >
      Вход
      <IoHomeOutline className="text-[#F8991D]" />
    </Link>
  );
};

const UserName = () => {
  // const {userName} = useAppSelector((state) => state)
  const dispatch = useAppDispatch();
  const { userName } = useAppSelector((state) => state.AUTH_TAG);
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {
    dispatch(clearCartData());
    dispatch(logout());
  };
  const dropdown = (
    <div
      className={`flex flex-col justify-center items-center absolute right-2 text-[#F8991D] border border-[#F8991D] rounded-md min-w-[120px] py-2 bg-white px-2 gap-1`}
    >
      <Link
        to="/user"
        className="flex justify-center items-center gap-1 min-w-[70px] text-nowrap"
      >
        Пользователь <FaRegUserCircle className="text-[#F8991D]" />
      </Link>
      <Link
        to="/"
        className="flex justify-center items-center gap-1"
        onClick={() => handleLogout()}
      >
        Logout <FiLogOut className="text-[#F8991D] " />
      </Link>
    </div>
  );
  return (
    <div
      className="relative z-50 min-w-[70px]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <button
        className={`flex justify-center items-center gap-x-2 px-2 py-2 text-lg text-[#F8991D] min-w-[70px] min-h-7  `}
      >
        {userName}
      </button>
      {isOpen && dropdown}
    </div>
  );
};
