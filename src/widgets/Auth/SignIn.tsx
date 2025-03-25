import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSignInMutation } from "entities/auth/api/authApi";
import JwtInMemo from "entities/auth/model/inMemoryJWT";
import { useAppDispatch } from "shared/model";
import { login } from "entities/auth/model/slice";

type FormValues = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const [signIn, { data, isSuccess }] = useSignInMutation();
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async ({ email, password }) => {
    await signIn({ userName: email, password: password });
  };

  useEffect(() => {
    if (isSuccess) {
      const { accessToken, accessTokenExpiration, userName } = data;
      JwtInMemo.setToken(accessToken, accessTokenExpiration);
      console.log("IN JWT", JwtInMemo.getToken());
      console.log("userName", userName);
      dispatch(login(userName));
    }
  }, [data, isSuccess]);

  const [eye, setEye] = useState(true);

  // redirect
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // const email = useAppSelector((state) => state.authSlice.email);
  // useEffect(() => {
  // if (email) {
  //   navigate(from, { replace: true });
  // }
  // return () => {
  //   dispatch(setStatus());
  // };
  // }, [email]);

  //
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-[500px] min-h-[400px] gap-x-1 gap-y-8 items-end rounded bg-slate-100 justify-start py-10 px-[100px] mx-auto mb-auto mt-[100px]"
    >
      <h2 className="mx-auto text-xl mb-4">Вход</h2>
      <label className="flex justify-start gap-x-5 " htmlFor="">
        <p className="select-none">Email:</p>
        <input
          {...register("email")}
          className="h-6 border-b-2 border-gc1 rounded"
          type="text"
          autoComplete="off"
        />
      </label>
      <label className="flex gap-x-5 justify-between relative " htmlFor="">
        <p className="select-none">Пароль:</p>
        <input
          {...register("password")}
          className="h-6 rounded"
          type={`${eye ? "text" : "password"}`}
          autoComplete="off"
        />
        <div
          onClick={() => setEye(!eye)}
          className={`${
            !eye && "opacity-50"
          } absolute right-2 z-30 translate-y-1/4 select-none`}
        >
          {eye ? <FaEye /> : <FaEyeSlash />}
        </div>
      </label>
      {/* {loginStatus === "error" && (
        <div className="text-red-400 text-sm mx-auto">
          Не удалось войти в аккаунт <br /> проверьте логин и пароль
        </div>
      )} */}
      <button
        type="submit"
        className=" mx-auto bg-slate-500 px-10 h-10 text-center text-white rounded hover:opacity-80 transition-all select-none"
      >
        Войти
      </button>
      <div className="flex mt-4 gap-x-2 mx-auto">
        У вас нет аккаунта?
        <Link to="/signup">
          <p className="text-blue-600"> Создать</p>
        </Link>
      </div>
    </form>
  );
};
