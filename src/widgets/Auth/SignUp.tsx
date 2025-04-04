import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useSignUpMutation } from "entities/auth/api/authApi";
import JwtInMemo from "entities/auth/model/inMemoryJWT";
import { useAppDispatch } from "shared/model";
import { login } from "entities/auth/model/slice";

type FormValues = {
  email: string;
  password: string;
  repeatPass: string;
};

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const [signUp, { data, isSuccess }] = useSignUpMutation();

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async ({
    email,
    password,
    repeatPass,
  }) => {
    if (password === repeatPass) {
      await signUp({
        userName: email,
        password: password,
        role: 1,
      });
    } else {
      alert("пароль не совпадает с повторным паролем");
    }
  };
  useEffect(() => {
    if (isSuccess) {
      const { accessToken, accessTokenExpiration, userName } = data || {};
      if (accessToken && accessTokenExpiration && userName) {
        JwtInMemo.setToken(accessToken, accessTokenExpiration);
        console.log("IN JWT", JwtInMemo.getToken());
        console.log("userName", userName);
        dispatch(login(userName));
      }
    }
  }, [data, isSuccess, dispatch]);

  const [eye, setEye] = useState(true);
  const [eye2, setEye2] = useState(true);

  // redirect
  // const navigate = useNavigate();
  // const email = useAppSelector((state) => state.authSlice.email);
  // useEffect(() => {
  //   if (email) {
  //     navigate("/");
  //   }
  // }, [email]);

  //

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-[500px] min-h-[400px] gap-x-1 gap-y-8 items-end rounded bg-slate-100 justify-start py-10 px-[100px] mx-auto mb-auto mt-[100px]"
    >
      <h2 className="mx-auto text-xl mb-4">Создать аккаунт</h2>
      <label className="flex justify-start gap-x-5 " htmlFor="">
        <p className="">Email:</p>
        <input
          {...register("email")}
          className="h-6 border-b-2 border-gc1 rounded"
          type="email"
        />
      </label>
      <label className="flex gap-x-5 justify-between relative " htmlFor="">
        <p className="">Пароль:</p>
        <input
          {...register("password")}
          className="h-6 rounded"
          type={`${eye ? "text" : "password"}`}
        />
        <div
          onClick={() => setEye(!eye)}
          className="absolute right-2 top-1 z-30"
        >
          {eye ? <AiFillEye /> : <AiOutlineEyeInvisible />}
        </div>
      </label>
      <label
        className="flex gap-x-5 justify-between relative whitespace-nowrap"
        htmlFor=""
      >
        <p className="">Повторите пароль:</p>
        <input
          {...register("repeatPass")}
          className="h-6 rounded"
          type={`${eye2 ? "text" : "password"}`}
        />
        <div
          onClick={() => setEye2(!eye2)}
          className="absolute right-2 top-1 z-30"
        >
          {eye2 ? (
            <AiFillEye color="black" />
          ) : (
            <AiOutlineEyeInvisible color="black" />
          )}
        </div>
      </label>

      <button
        type="submit"
        className=" mx-auto bg-slate-500 px-5 h-10 text-center text-white rounded hover:opacity-80 transition-all"
      >
        Создать аккаунт
      </button>
      <div className="flex mt-4 gap-x-2 mx-auto">
        У вас есть аккаунт?
        <Link to="/Login">
          <p className="text-blue-600"> Войти.</p>
        </Link>
      </div>
    </form>
  );
};
