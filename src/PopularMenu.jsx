import React from "react";
import HeaderTitles from "./HeaderTitiles";
import menu from "./assets/menu.json";
import MenuCard from "./MenuCardshared/MenuCard";

const PopularMenu = () => {
  // console.log(menu)

  const popularMenu = menu.filter((item) => item.category === "popular");

  // console.log(popularMenu);

  return (
    <div>
      <HeaderTitles
        mainheading="From Our Menu"
        subheading="- - - Checkit Out - - - "
      ></HeaderTitles>
      <div className="grid grid-cols-2 gap-10 m-8">

        {popularMenu.map((res) => (
          <MenuCard
            price={res.price}
            recipe={res.recipe}
            title={res.name}
            image={res.image}
            key={res._id}
          ></MenuCard>
        ))}


        <button className="btn w-[100px] justify-center text-center ml-[80%]">Full Menu</button>
      </div>

     
    
     

    </div>
  );
};

export default PopularMenu;
