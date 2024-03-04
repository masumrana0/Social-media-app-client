/**
 * Title: 'authentication page define by Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 04-03-2024
 *
 */

import LoginForm from "./Login";
import home_theme from "/public/assests/home_theme_1.png";
import welcome from "/public/assests/welcome.png";
import RegisterForm from "./Register";
import Register from "./Register";
import Image from "next/image";
import Particles from "react-particles";

const Auth = () => {
  return (
    <div>
      <div className="bg-cover bg-center min-h-screen bg-blend-multiply bg-sky-800 bg-opacity-85">
        <div className="flex min-h-screen justify-center items-center lg:gap-28 flex-wrap p-10">
          <div>
            <Image
              src={welcome}
              width={600}
              height={600}
              alt="Picture of Welcoming"
            />
          </div>
          <div>
            <span className="lg:text-8xl text-5xl font-bold ">
              <h2 className="text-white text-center ">WelCome To </h2>
              <h2 className="text-sky-500 bg-black py-4 px-1 rounded-md bg-opacity-80">
                CircleUp!
              </h2>
            </span>
            <p className="font-semibold text-xl my-2 lg:my-4 text-gray-200">
              Connect with Friends,Chat with free!{" "}
            </p>

            <button className="font-bold text-xl bg-sky-500 hover:bg-sky-800 transition-colors duration-300 px-8 p-2 text-white rounded">
              Join Us
            </button>
          </div>
        </div>
      </div>

      <LoginForm />
      {/* <RegisterForm /> */}
    </div>
  );
};

export default Auth;
