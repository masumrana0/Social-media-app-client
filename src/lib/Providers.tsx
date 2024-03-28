"use client";
import { store } from "@/Redux/store";
import React from "react";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntRegistry";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </Provider>
  );
};

export default Providers;
