import React, { FC } from "react";
import Navbar from "../components/Navbar";

export const DefaultLayout: FC<any> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
