"use client";

import React, { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

type Props = {
  forceBg?: boolean;
};

const ResponsiveNav = ({ forceBg }: Props) => {
  const [showNav, setShowNav] = useState(false);

  const handNavShow = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);

  return (
    <div>
      <Nav openNav={handNavShow} forceBg={forceBg} />

      <MobileNav
        showNav={showNav}
        closeNav={handleCloseNav}
      />
    </div>
  );
};

export default ResponsiveNav;