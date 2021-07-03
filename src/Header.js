/** @jsxImportSource @emotion/react */

import React from "react";
import "twin.macro";

function Header() {
  return (
    <header tw="flex justify-start px-10 py-4 bg-gray-400 flex-row flex-nowrap items-start content-center uppercase">
      <div tw="py-1 shadow-lg bg-gray-600 text-gray-200 rounded-lg m-1 w-20 text-center hover:bg-gray-700 cursor-pointer">
        home
      </div>
      <div tw="py-1  shadow-lg bg-gray-600 text-gray-200 rounded-lg m-1 w-20 text-center hover:bg-gray-700 cursor-pointer">
        about
      </div>
      <div tw="py-1  shadow-lg bg-gray-600 text-gray-200 rounded-lg m-1 w-20 text-center hover:bg-gray-700 cursor-pointer">
        contact
      </div>
      <div tw="py-1  shadow-lg bg-gray-600 text-gray-200 rounded-lg m-1 w-20 text-center hover:bg-gray-700 cursor-pointer ml-auto">
        login
      </div>
    </header>
  );
}

export default Header;
