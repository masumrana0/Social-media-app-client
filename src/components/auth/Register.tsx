"use client";
import userSignupSchema from "@/schema/register.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm: React.FC = () => {
  // React Form hook handler
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSignupSchema) });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from(
      { length: 100 },
      (_, index) => currentYear - index
    );
    return years;
  };

  const onSubmit = (data: any): void => {
    console.log("hello");

    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto mt-8 lg:p-6 p-10 bg-white rounded-md shadow-lg shadow-sky-200 ">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center">
        Sign Up
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name.firstName"
              className="block text-sm font-medium text-gray-600"
            >
              First Name
            </label>
            <input
              {...register("name.firstName")}
              type="text"
              id="name.firstName"
              name="name.firstName"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <p className="text-red-500 ms-2">
              {errors.name?.firstName?.message}
            </p>
          </div>
          <div>
            <label
              htmlFor="name.lastName"
              className="block text-sm font-medium text-gray-600"
            >
              Last Name
            </label>
            <input
              {...register("name.lastName")}
              type="text"
              id="name.lastName"
              name="name.lastName"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
        </div>
        <div className="mt-2">
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
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
          />
          <p className="text-red-500 ms-2">{errors.email?.message}</p>
        </div>
        <div className="mt-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <div className="flex  border rounded-md px-1 shadow-sm ">
            <input
              {...register("password")}
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              className="mt-1 p-2 w-full outline-none "
            />
            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <p className="text-red-500 ms-2">{errors.password?.message}</p>
        </div>
        <div className="mt-2">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-600"
          >
            Confirm Password
          </label>
          <div className="flex  border rounded-md px-1 shadow-sm">
            <input
              {...register("confirmPassword")}
              type={isConfirmPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className="mt-1 p-2 w-full outline-none "
            />
            <button
              type="button"
              onClick={() =>
                setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
              }
            >
              {isConfirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <p className="text-red-500 ms-2">{errors.confirmPassword?.message}</p>
        </div>
        {/* date of birth */}
        <div className="grid grid-cols-3 gap-4 mt-2">
          <div>
            <label
              htmlFor="day"
              className="block text-sm font-medium text-gray-600"
            >
              Day
            </label>
            <select
              id="day"
              name="day"
              className="mt-1 p-2 w-full border rounded-md"
              required
            >
              <option value="" disabled>
                Select Day
              </option>
              {Array.from({ length: 31 }, (_, index) => (
                <option key={index + 1} value={String(index + 1)}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="month"
              className="block text-sm font-medium text-gray-600"
            >
              Month
            </label>
            <select
              id="month"
              name="month"
              className="mt-1 p-2 w-full border rounded-md"
              required
            >
              <option value="" disabled>
                Select Month
              </option>
              {Array.from({ length: 12 }, (_, index) => (
                <option key={index + 1} value={String(index + 1)}>
                  {new Date(0, index).toLocaleString("default", {
                    month: "long",
                  })}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="year"
              className="block text-sm font-medium text-gray-600"
            >
              Year
            </label>
            <select
              {...register("year")}
              id="year"
              name="year"
              className="mt-1 p-2 w-full border rounded-md"
              required
            >
              <option value="" disabled>
                Select Year
              </option>
              {generateYears().map((year) => (
                <option key={year} value={String(year)}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-red-500 ms-2 ">{errors.year?.message}</p>
        <div className="mt-2">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-600"
          >
            Gender
          </label>
          <select
            {...register("gender")}
            id="gender"
            name="gender"
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <p className="text-red-500 ms-2">{errors.gender?.message}</p>
        </div>{" "}
        <div className="mt-6 w-full">
          {/* <Button>Sign Up</Button> */}
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
