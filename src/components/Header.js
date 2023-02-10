import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header>
      {/** Top nav */}
      <div className="flex items-center bg-buybase p-1 flex-grow py-2">
        {/** Image container */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/*  Search input */}
        <div>
          <input type="text" />
        </div>
      </div>

      {/** Bottom nav */}
      <div></div>
    </header>
  );
}

export default Header;