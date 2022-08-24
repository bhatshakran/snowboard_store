import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="mx-2 my-2">
      <Image src="/logo_snowboard.png" alt="mountains" width="45" height="35" />
    </div>
  );
};

export default Logo;
