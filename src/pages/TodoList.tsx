import React, { useEffect, useRef, useState } from "react";
import TodoListTable from "../components/TodoList/TodoListTable";
import type { IPerson } from "../utils/interface/TodoList/Person";
import { people } from "../data/TodoList/TodoListData";
import TodoListForm from "../components/TodoList/TodoListForm";

import { BsSearch } from "react-icons/bs";
import { MdAccountCircle, MdAdd, MdManageAccounts } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

const TodoList = () => {
  const [todoList, setTodoList] = useState<IPerson[]>(people);

  const [search, setSearch] = useState({
    name: "",
    age: "",
    address: "",
  });

  const [open, setOpen] = useState(false);

  // FETCH
  const filteredList = todoList.filter((item) => {
    const matchName =
      search.name === "" ||
      item.Name.toLowerCase().includes(search.name.toLowerCase());

    const matchAge =
      search.age === "" || item.Age.toString().includes(search.age);

    const matchAddress =
      search.address === "" ||
      item.Address.toLowerCase().includes(search.address.toLowerCase());

    return matchName && matchAge && matchAddress;
  });

  const [dropdown, setDropdown] = useState(false);

  return (
    <React.Fragment>
      <div className="border-b border-gray-300 flex justify-between items-center p-4">
        <div className="text-2xl font-bold">TodoList</div>

        <div className="flex items-center gap-2">
          <div className="relative w-64">
            <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-400 rounded-lg py-2 pl-10 pr-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <MdAccountCircle
            className="cursor-pointer text-4xl"
            onClick={() => setDropdown(!dropdown)}
          />
          {dropdown && (
            <div className="absolute right-4 top-16 w-44 bg-white rounded-lg border border-gray-200 z-50">
              <button className="w-full px-4 py-2 text-left  hover:bg-gray-200 hover:rounded-xl flex items-center gap-2">
                <MdManageAccounts className="text-xl" /> Acount
              </button>
              <button className="w-full px-4 py-2 text-left  hover:bg-gray-200 hover:rounded-xl flex items-center gap-2">
                <IoMdSettings className="text-xl" /> Setting
              </button>
              <button className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-200 hover:rounded-xl flex items-center gap-2">
                <CiLogout className="text-xl" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="max-w-[1280px] items-center mx-auto p-4">
        <div className="flex gap-2 items-end">
          <div className="grid grid-cols-6 gap-4">
            <div className="grid grid-cols-subgrid">
              <p className="">Name</p>
              <input
                type="text"
                value={search.name}
                onChange={(e) =>
                  setSearch((prev) => ({ ...prev, name: e.target.value }))
                }
                className="border rounded-lg p-2  border-gray-300"
                placeholder="Enter"
              />
            </div>
            <div className="grid grid-cols-subgrid">
              <p className="">Age</p>
              <input
                type="number"
                value={search.age}
                onChange={(e) =>
                  setSearch((prev) => ({ ...prev, age: e.target.value }))
                }
                className="border rounded-lg p-2  border-gray-300"
                placeholder="Enter"
              />
            </div>
            <div className="grid grid-cols-subgrid">
              <p className="">Address</p>
              <input
                type="text"
                value={search.address}
                onChange={(e) =>
                  setSearch((prev) => ({ ...prev, address: e.target.value }))
                }
                className="border rounded-lg p-2  border-gray-300 "
                placeholder="Enter"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setOpen(true)}
              className="text-white bg-green-600 hover:bg-green-700 transition duration-300  transform-view rounded-lg text-sm p-4 py-2.5 cursor-pointer flex justify-center whitespace-nowrap"
            >
              <MdAdd className="text-xl me-1" /> Add New Item
            </button>
          </div>
        </div>

        <TodoListTable data={filteredList} />

        <TodoListForm open={open} onClose={() => setOpen(false)} />
      </div>
    </React.Fragment>
  );
};

export default TodoList;
