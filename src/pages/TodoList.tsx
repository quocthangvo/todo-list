import React, { useEffect, useState } from "react";
import TodoListTable from "../components/TodoList/TodoListTable";
import type { IPerson } from "../utils/interface/TodoList/Person";
import { people } from "../data/TodoList/TodoListData";
import TodoListForm from "../components/TodoList/TodoListForm";

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

  return (
    <React.Fragment>
      <div className="text-center"></div>
      <div className="border-b border-gray-300 flex justify-between p-4">
        <div>TodoList</div>
      </div>
      <div className="flex gap-2 items-end">
        <div className="grid grid-cols-8 gap-4">
          <div className="grid grid-cols-subgrid">
            <p className="">Name</p>
            <input
              type="text"
              value={search.name}
              onChange={(e) =>
                setSearch((prev) => ({ ...prev, name: e.target.value }))
              }
              className="border rounded-lg p-2"
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
              className="border rounded-lg p-2 "
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
              className="border rounded-lg p-2 "
              placeholder="Enter"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setOpen(true)}
            className="text-white bg-blue-700 hover:bg-blue-800 rounded-full text-sm px-5 py-2.5 cursor-pointer"
          >
            Add
          </button>
          <button className="text-white bg-yellow-400 hover:bg-yellow-500 rounded-full text-sm px-5 py-2.5 cursor-pointer">
            Edit
          </button>
          <button className="text-white bg-red-600 hover:bg-red-700 rounded-full text-sm px-5 py-2.5 cursor-pointer">
            Remove
          </button>
        </div>
      </div>

      <TodoListTable data={filteredList} />

      <TodoListForm open={open} onClose={() => setOpen(false)} />
    </React.Fragment>
  );
};

export default TodoList;
