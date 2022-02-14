import React from "react";
import NavBar from "./NavBar";

export default function Layout({ children }: any) {
  return (
    <div className="flex flex-col w-full h-screen">
      <NavBar />
      <div className="flex w-full h-full">{children}</div>
    </div>
  );
}
