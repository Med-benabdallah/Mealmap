import React from "react";

import Image from "next/image";

import Heroimg from "../../../public/images/hero.jpg";

function CategoryList() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative h-[150px] w-[150px] rounded-full">
        <Image
          src={Heroimg}
          className="rounded-full"
          layout="fill"
          style={{ objectFit: "cover" }}
          alt="picture of the best dish of the week"
        />
      </div>
      <div className="pt-4">
        <p>Desert</p>
      </div>
    </div>
  );
}

export default CategoryList;
