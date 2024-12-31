import React from "react";
import { NavLink, Outlet } from "react-router-dom"; // Use NavLink for active class
import { FaHome } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { HiMenu } from "react-icons/hi";
import { FaBook } from "react-icons/fa6";
import { PiUsersThreeFill } from "react-icons/pi";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { MdContacts } from "react-icons/md";

const DashboardLayout = () => {
  const navItems = [
    { name: "User Home", icon: <FaHome />, to: "/dashboard/home" },
    {
      name: "Reservation",
      icon: <PiForkKnifeFill />,
      to: "/dashboard/reservation",
    },
    {
      name: "Payment History",
      icon: <HiMenu />,
      to: "/dashboard/payment-history",
    },
    { name: "MY Carts", icon: <FaBook />, to: "/dashboard/carts" },
    { name: "ADD Review", icon: <PiUsersThreeFill />, to: "/dashboard/review" },
    {
      name: "MY BOOKINGS",
      icon: <PiUsersThreeFill />,
      to: "/dashboard/bookings",
    },
    { name: "Home", icon: <FaHome />, to: "/" },
    { name: "Menu", icon: <HiMenu />, to: "/dashboard/menu" },
    { name: "Shop", icon: <RiShoppingBag4Fill />, to: "/dashboard/shop" },
    { name: "Contact", icon: <MdContacts />, to: "/dashboard/contact" },
  ];

  return (
    <div className="flex">
      <div className="bg-slate-300 w-[250px] p-4 h-[100vh]">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="p-2 rounded-md">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center space-x-2 p-2 rounded-md ${
                    isActive ? "bg-orange-500 text-white" : "hover:bg-white"
                  }`
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
