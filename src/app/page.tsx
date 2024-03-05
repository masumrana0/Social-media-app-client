"use client";
import { useEffect, useState } from "react";
import Auth from "@/components/auth/Auth";
import { isLoggedIn } from "@/service/auth.service";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const HomePage = () => {
  // const [isLogged, setIsLogged] = useState(false);

  // useEffect(() => {
  //   setIsLogged(isLoggedIn());
  // }, []);

  return (
    <div className="flex">
      {" "}
      <h3>This is home page</h3>
      <LoadingSpinner type="regular" />
    </div>
  );
};

export default HomePage;
