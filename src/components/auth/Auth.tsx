/**
 * Title: 'authentication page define by Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 04-03-2024
 *
 */
"use client";
import LoginForm from "./Login";
import home_theme from "/public/assests/home_theme_1.png";
import welcome from "/public/assests/welcome.png";
import RegisterForm from "./Register";
import Register from "./Register";
import Image from "next/image";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { changeAuthState } from "@/Redux/Slices/authSlice";

const Auth = () => {
  const dispatch = useAppDispatch();
  const isRegisterModalOpen = useAppSelector(
    (state) => state.authSlice.authState
  );

  return (
    <div className={` min-h-screen mt-20  `}>
      <div className=" flex  justify-center flex-wrap    lg:gap-10   ">
        {/* welcome text */}
        <div className="  ">
          <span className="lg:text-8xl text-5xl font-bold   ">
            <h2 className="  text-center ">WelCome To </h2>
            <h2 className="text-sky-500  py-4 px-1 rounded-md bg-opacity-80 text-center lg:text-left">
              CircleUp!
            </h2>
            <div>
              <Image
                src={welcome}
                width={300}
                height={300}
                alt="Picture of Welcoming"
              />
            </div>
          </span>
          <p className="font-semibold text-xl     ">
            Connect with Friends,Chat with free!{" "}
          </p>
        </div>

        {/* authentication form */}
        <div className="lg:w-1/4 w-full m-4 lg:m-0 ">
          <LoginForm />
          {isRegisterModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-md">
                <RegisterForm />
                <button
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={() => dispatch(changeAuthState())}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
