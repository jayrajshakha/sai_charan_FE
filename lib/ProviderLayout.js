"use client";

import React, { Fragment } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import "../styles/font.css";
import ToastProvider from "./ToastProvider";

const ProviderLayout = ({ children }) => {
  return (
    <Fragment>
      <ToastProvider>
        <GlobalStyles />
        {children}
      </ToastProvider>
    </Fragment>
  );
};

export default ProviderLayout;
