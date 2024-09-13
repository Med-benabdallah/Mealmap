import React from 'react'
import Heroimg from "../../../public/images/hero.jpg";
import Image from "next/image";

function CategoryList() {
  return (
    <div className='flex flex-col justify-center items-center'>
       <div className="w-[150px] h-[150px] rounded-full relative ">
            <Image
              src={Heroimg}
              className="rounded-full"
              layout="fill"
              style={{ objectFit: "cover" }}
              alt="picture of the best dish of the week"
            />
           
          </div>
          <div className='pt-4'><p>Desert</p></div>
    </div>
  )
}

export default CategoryList