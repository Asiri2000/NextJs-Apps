import React from "react";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Destinations from "./Destinations";

const page = () => {
  return (
    <>
      <ResponsiveNav forceBg={true} />

      <Destinations />

    </>
  );
};

export default page;
