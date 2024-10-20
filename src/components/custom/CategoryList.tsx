import React from "react";
import Image from "next/image";

const CategoryList = ({ catId, catName, catImg }: { catId: string; catName: string; catImg: string }) => {
  console.log("Category Image URL:", catImg);  // Log the image URL

  return (
    <div key={catId} className="flex flex-col items-center justify-center">
      <div className="relative h-[150px] w-[150px] rounded-full overflow-hidden">
        <Image
          src={catImg} // Ensure this is a valid URL
          fill
          style={{ objectFit: "cover" }}
          alt={`Image for category ${catName}`}
          onError={(e) => console.error("Error loading image", e)} // Log any error
        />
      </div>
      <div className="pt-4">
        <p>{catName}</p>
      </div>
    </div>
  );
};

export default CategoryList;
