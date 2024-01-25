import React from "react";
// import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between px-4 pt-4">
      {/* <Image src="/images/Logo.png" width={150} height={100} /> */}
      <img src="/images/Logo.png" alt="Logo" className="h-14 w-32" />
      <p>icons</p>
    </div>
  );
};

export default Header;
