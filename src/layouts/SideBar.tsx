import { PiSidebarSimpleDuotone } from "react-icons/pi";

import { BiLogoTailwindCss, BiSolidDashboard } from "react-icons/bi";
import { useState } from "react";
import { RiArrowDropDownLine, RiDashboard2Fill } from "react-icons/ri";
import { FaCircle, FaShoppingCart, FaUserFriends } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { MdArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import TodoList from "../pages/TodoList";
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  console.log(dropdown);
  return (
    <BrowserRouter>
      <div>
        <div
          className={`fixed top-0 left-0 z-40 h-screen transition-all duration-300 sm:translate-x-0 
            ${collapsed ? "w-24" : "w-60"}`}
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 border-r-2 border-gray-200 shadow-lg">
            <div className="px-2 py-4 flex justify-between items-center border-b-2 border-gray-200">
              {!collapsed && (
                <div className=" flex items-center font-bold">
                  <BiLogoTailwindCss className="text-2xl text-blue-400 me-1" />
                  Tailwind
                </div>
              )}

              <PiSidebarSimpleDuotone
                className="text-2xl cursor-pointer"
                onClick={() => setCollapsed((prev) => !prev)}
              />
            </div>

            <ul className="space-y-2 font-medium mt-4">
              <li>
                <Link
                  to="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <RiDashboard2Fill className="w-6 h-6 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white" />
                  {!collapsed && <span className="ms-3">Dashboard</span>}
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setDropdown((prev) => !prev)}
                  className="cursor-pointer flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <FaShoppingCart className="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white" />

                  {!collapsed && (
                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      E-commerce
                    </span>
                  )}

                  <div>
                    {dropdown ? (
                      <MdArrowDropUp className="w-8 h-6" />
                    ) : (
                      <MdOutlineArrowDropDown className="w-8 h-6" />
                    )}
                  </div>
                </button>
                {dropdown && (
                  <ul className="transform transition-all duration-300 ease-in-out ">
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg  group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <FaCircle className="w-2 h-2 ms-2" />
                        {!collapsed && <div className="ms-5">Products</div>}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2  text-gray-900 transition duration-75 rounded-lg  group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <FaCircle className="w-2 h-2 ms-2" />
                        {!collapsed && <div className="ms-5">Billing</div>}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center w-full p-2  text-gray-900 transition duration-75 rounded-lg  group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <FaCircle className="w-2 h-2 ms-2 " />
                        {!collapsed && <div className="ms-5">Invoice</div>}
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <BiSolidDashboard className="w-6 h-6 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white" />
                  {!collapsed && (
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Kanban
                    </span>
                  )}
                  {!collapsed && (
                    <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      Pro
                    </span>
                  )}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <IoIosMail className="w-6 h-6 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white" />
                  {!collapsed && (
                    <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                  )}
                  {!collapsed && (
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      3
                    </span>
                  )}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaUserFriends className="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white" />
                  {!collapsed && (
                    <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                  )}
                </a>
              </li>
              <li>
                <Link
                  to="/todolist"
                  className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaBagShopping className="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white" />
                  {!collapsed && (
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      TodoList
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={`${collapsed ? "ml-24" : "ml-60"}`}>
          <Routes>
            <Route path="/todolist" element={<TodoList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default SideBar;
