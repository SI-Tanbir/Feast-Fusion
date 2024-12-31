import React from "react";
import { Link, Outlet } from "react-router";
import { FaHome } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { HiMenu } from "react-icons/hi";
import { FaBook } from "react-icons/fa6";
import { PiUsersThreeFill } from "react-icons/pi";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { MdContacts } from "react-icons/md";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="bg-slate-300 w-[250px] p-4 h-[100vh] ">
        <ul>
          <li className="hover:bg-white p-2 rounded-md  flex  ">
            <FaHome className="text-2xl mx-2" />
            <Link to={"/dashboard/home"}> Admin Home</Link>
          </li>

          <li className="hover:bg-white p-2 rounded-md  flex">
            <PiForkKnifeFill className="text-2xl mx-2" />

            <Link to={""}>Add Items</Link>
          </li>

          <li className="hover:bg-white p-2 rounded-md  flex">
            <HiMenu className="text-2xl mx-2" />

            <Link to={"/dashboard/home"}>Manage Items</Link>
          </li>

          <li className="hover:bg-white p-2 rounded-md  flex">
            <FaBook className="text-2xl mx-2" />

            <Link to={"/dashboard/home"}>Manage Bookings</Link>
          </li>

          <li className="hover:bg-white p-2 rounded-md  flex">
            <PiUsersThreeFill className="text-2xl mx-2" />

            <Link to={"/dashboard/home"}>All Users</Link>
          </li>

          <hr />

          <li className="hover:bg-white p-2 rounded-md  flex">
            <FaHome className="text-2xl mx-2" />

            <Link to={"/dashboard/home"}>Home</Link>
          </li>

          <li className="hover:bg-white p-2 rounded-md  flex">
            <HiMenu className="text-2xl mx-2" />

            <Link to={"/dashboard/home"}>Menu</Link>
          </li>

          <li className="hover:bg-white p-2 rounded-md  flex">
            <RiShoppingBag4Fill className="text-2xl mx-2" />

            <Link to={"/dashboard/home"}>Shop</Link>
          </li>

          <li className="hover:bg-white p-2 rounded-md  flex">
            <MdContacts className="text-2xl mx-2" />

            <Link to={"/dashboard/home"}>Contact</Link>
          </li>
        </ul>
      </div>

      <div>
        {/* Right side bar */}
        {/* */}

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
