import React from "react";
import { NavLink, Outlet } from "react-router-dom"; // Use NavLink for active class
import { FaHome } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { HiMenu } from "react-icons/hi";
import { FaBook } from "react-icons/fa6";
import { PiUsersThreeFill } from "react-icons/pi";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { MdContacts } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {


  // const [isAdmin] = useAdmin(); //ading the true leter we setting the admin
  const isAdmin=true
  
  console.log("checking admin ",isAdmin)


  return (
    <div className="flex">
      <div className="bg-slate-300 w-[250px] p-4 h-[100vh]">
        <ul>







          {isAdmin ? (
            <>
              <li className="p-2 rounded-md">
                <NavLink
                  to="/dashboard/home"
                  className={({ isActive }) =>
                    `flex items-center space-x-2 p-2 rounded-md ${
                      isActive ? "bg-orange-500 text-white" : "hover:bg-white"
                    }`
                  }
                >
                  <FaHome />
                  <span>Admin Home</span>
                </NavLink>
              </li>

              <li className="p-2 rounded-md">
                <NavLink
                  to="/dashboard/additems"
                  className={({ isActive }) =>
                    `flex items-center space-x-2 p-2 rounded-md ${
                      isActive ? "bg-orange-500 text-white" : "hover:bg-white"
                    }`
                  }
                >
                  <PiForkKnifeFill />
                  <span>Add Items</span>
                </NavLink>
              </li>

              <li className="p-2 rounded-md">
                <NavLink
                  to="/dashboard/manageitems"
                  className={({ isActive }) =>
                    `flex items-center space-x-2 p-2 rounded-md ${
                      isActive ? "bg-orange-500 text-white" : "hover:bg-white"
                    }`
                  }
                >
                  <HiMenu />
                  <span>MANAGA ITEMS</span>
                </NavLink>
              </li>

              <li className="p-2 rounded-md">
                <NavLink
                  to="/dashboard/carts"
                  className={({ isActive }) =>
                    `flex items-center space-x-2 p-2 rounded-md ${
                      isActive ? "bg-orange-500 text-white" : "hover:bg-white"
                    }`
                  }
                >
                  <FaBook />
                  <span>MANAGE BOOKINGS</span>
                </NavLink>
              </li>

              <li className="p-2 rounded-md">
                <NavLink
                  to="/dashboard/users"
                  className={({ isActive }) =>
                    `flex items-center space-x-2 p-2 rounded-md ${
                      isActive ? "bg-orange-500 text-white" : "hover:bg-white"
                    }`
                  }
                >
                  <PiUsersThreeFill />
                  <span>ALL USERS</span>
                </NavLink>
              </li>

              <li className="p-2 rounded-md">
                <NavLink
                  to="/dashboard/bookings"
                  className={({ isActive }) =>
                    `flex items-center space-x-2 p-2 rounded-md ${
                      isActive ? "bg-orange-500 text-white" : "hover:bg-white"
                    }`
                  }
                >
                  <PiUsersThreeFill />
                  <span>MY BOOKINGS</span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="p-2 rounded-md">
                <NavLink
                  to="/dashboard/home"
                  className={({ isActive }) =>
                    `flex items-center space-x-2 p-2 rounded-md ${
                      isActive ? "bg-orange-500 text-white" : "hover:bg-white"
                    }`
                  }
                >
                  <FaHome />
                  <span>User Home</span>
                </NavLink>
              </li>

              <li className="p-2 rounded-md">
                <NavLink
                  to="/dashboard/reservation"
                  className={({ isActive }) =>
                    `flex items-center space-x-2 p-2 rounded-md ${
                      isActive ? "bg-orange-500 text-white" : "hover:bg-white"
                    }`
                  }
                >
                  <PiForkKnifeFill />
                  <span>Reservation</span>
                </NavLink>
              </li>

              <li className="p-2 rounded-md">
                <NavLink
                  to="/dashboard/payment-history"
                  className={({ isActive }) =>
                    `flex items-center space-x-2 p-2 rounded-md ${
                      isActive ? "bg-orange-500 text-white" : "hover:bg-white"
                    }`
                  }
                >
                  <HiMenu />
                  <span>Payment History</span>
                </NavLink>
              </li>

              <li className="p-2 rounded-md">
                <NavLink
                  to="/dashboard/carts"
                  className={({ isActive }) =>
                    `flex items-center space-x-2 p-2 rounded-md ${
                      isActive ? "bg-orange-500 text-white" : "hover:bg-white"
                    }`
                  }
                >
                  <FaBook />
                  <span>MY Carts</span>
                </NavLink>
              </li>

              <li className="p-2 rounded-md">
                <NavLink
                  to="/dashboard/review"
                  className={({ isActive }) =>
                    `flex items-center space-x-2 p-2 rounded-md ${
                      isActive ? "bg-orange-500 text-white" : "hover:bg-white"
                    }`
                  }
                >
                  <PiUsersThreeFill />
                  <span>ADD Review</span>
                </NavLink>
              </li>

              <li className="p-2 rounded-md">
                <NavLink
                  to="/dashboard/bookings"
                  className={({ isActive }) =>
                    `flex items-center space-x-2 p-2 rounded-md ${
                      isActive ? "bg-orange-500 text-white" : "hover:bg-white"
                    }`
                  }
                >
                  <PiUsersThreeFill />
                  <span>MY BOOKINGS</span>
                </NavLink>
              </li>
            </>
          )}
          <hr />

          <li className="p-2 rounded-md">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center space-x-2 p-2 rounded-md ${
                  isActive ? "bg-orange-500 text-white" : "hover:bg-white"
                }`
              }
            >
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>

          <li className="p-2 rounded-md">
            <NavLink
              to="/dashboard/menu"
              className={({ isActive }) =>
                `flex items-center space-x-2 p-2 rounded-md ${
                  isActive ? "bg-orange-500 text-white" : "hover:bg-white"
                }`
              }
            >
              <HiMenu />
              <span>Menu</span>
            </NavLink>
          </li>

          <li className="p-2 rounded-md">
            <NavLink
              to="/dashboard/shop"
              className={({ isActive }) =>
                `flex items-center space-x-2 p-2 rounded-md ${
                  isActive ? "bg-orange-500 text-white" : "hover:bg-white"
                }`
              }
            >
              <RiShoppingBag4Fill />
              <span>Shop</span>
            </NavLink>
          </li>

          <li className="p-2 rounded-md">
            <NavLink
              to="/dashboard/contact"
              className={({ isActive }) =>
                `flex items-center space-x-2 p-2 rounded-md ${
                  isActive ? "bg-orange-500 text-white" : "hover:bg-white"
                }`
              }
            >
              <MdContacts />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
