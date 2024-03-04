"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin } from "@/types/auth";
import userLoginSchema from "@/schema/login.schema";
import Button from "../ui/Button";

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userLoginSchema),
  });
  const onSubmit = (data: ILogin): void => console.log(data);  

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
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
            className={`mt-1 p-2 w-full border rounded-md ${errors.email?.message && "border-red-500 outline-none border-1"}`}
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
            className={`mt-1 p-2 w-full border rounded-md    ${errors.password?.message && "border-red-500 outline-none border-1"}`}
          />
          <p className="text-red-500">{errors.password?.message}</p>
        </div>
        <div className="mt-6 w-full">
          <Button type="submit">login</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
