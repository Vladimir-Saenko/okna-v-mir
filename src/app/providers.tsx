"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

// Подключение внешних провайдеров в DOM
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default Providers;
