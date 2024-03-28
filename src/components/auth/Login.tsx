"use client";
import React from "react";

import { changeAuthState } from "@/Redux/Slices/authSlice";
import { useLoginMutation } from "@/Redux/api/authApi";
import { useAppDispatch } from "@/Redux/hooks";
import { authKey } from "@/constants/storegeKey";
import userLoginSchema from "@/schema/login.schema";
import { ILogin } from "@/types/auth";
import { setToLocalStorage } from "@/utils/local-storage";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Button from "../shared/Button";

const LoginForm: React.FC = () => {
  // form handler
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userLoginSchema),
  });

  // redux
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [setLogin, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: ILogin) => {
    const res = await setLogin(data).unwrap();
    if (res.accessToken) {
      setToLocalStorage(authKey, res?.accessToken);
      router.push("/");
    }
  };

  return (
    <div className=" w-full mx-auto mt-8 lg:p-6 p-9 bg-white rounded-md shadow-md shadow-sky-300">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="email"
            name="email"
            className={`mt-1 p-2 w-full border rounded-md  outline-none ${errors.email?.message && "border-red-500  border-1"}`}
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>
        <div className="mt-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className={`mt-1 p-2 w-full border rounded-md outline-none   ${errors.password?.message && "border-red-500  border-1"}`}
          />
          <p className="text-red-500">{errors.password?.message}</p>
        </div>
        <div className="mt-6 w-full">
          <div className="mt-6 w-full">
            <Button isLoading={isLoading}>login</Button>
          </div>
        </div>
      </form>
      <div className="flex justify-center mt-8">
        <Link href="/forgotten-password" className="text-sky-500">
          {" "}
          Forgotten Password?
        </Link>
      </div>
      <hr className="my-4  " />

      <div className="flex justify-center ">
        <button
          onClick={() => dispatch(changeAuthState())}
          className="text-sm px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-sky-600 transition-colors duration-300 "
        >
          Create New Account
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
