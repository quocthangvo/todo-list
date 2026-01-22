import React, { useState } from "react";
import { toast } from "react-toastify";
import { people } from "../data/TodoList/TodoListData";
import type { IPerson } from "../utils/interface/TodoList/Person";

import TodoListTable from "../components/TodoList/TodoListTable";
import TodoListForm from "../components/TodoList/TodoListForm";

import Swal from "sweetalert2";
import TodoListHeader from "../components/TodoListHeader";
import TodoListSearch from "../components/TodoList/TodoListSearch";

const TodoList = () => {
  const [todoList, setTodoList] = useState<IPerson[]>(people);
  const [selectedItem, setSelectedItem] = useState<IPerson | null>(null);

  const [dropdown, setDropdown] = useState(false);
  const [modal, setModal] = useState(false);

  const [mode, setMode] = useState<string | null>(null);

  const [search, setSearch] = useState("");

  // FETCH
  const filteredList = todoList.filter((item) => {
    const keyword = search.toLowerCase();
    const search_item =
      item.Name.toLowerCase().includes(keyword) ||
      item.Address.toLowerCase().includes(keyword) ||
      item.Status.toLowerCase().includes(keyword) ||
      item.Card_ID.toString().includes(keyword);

    return search_item;
  });
  // FETCH

  // ACTION
  const addItem = () => {
    setMode("add");
    setSelectedItem(null);
    setModal(true);
  };

  const deleteItem = async (data: IPerson) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this data?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0575f3",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    const indexDelete = todoList.indexOf(data);
    if (indexDelete === -1) return;

    const tempList = [...todoList];

    tempList.splice(indexDelete, 1);
    setTodoList(tempList);

    toast.success("Delete Successfully!", {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
    });
  };

  const editItem = (data: IPerson) => {
    setMode("edit");
    setSelectedItem(data);
    setModal(true);
  };
  // ACTION

  return (
    <React.Fragment>
      <TodoListHeader
        dropdown={dropdown}
        setDropdown={setDropdown}
        search={search}
        setSearch={setSearch}
      />
      <div className="max-w-[1280px] items-center mx-auto p-4">
        <TodoListSearch onAdd={addItem} />

        <TodoListTable
          data={filteredList}
          onDelete={deleteItem}
          onEdit={editItem}
        />

        <TodoListForm
          modal={modal}
          setModal={setModal}
          data={todoList}
          setData={setTodoList}
          mode={mode}
          selectedItem={selectedItem}
        />
      </div>
    </React.Fragment>
  );
};

export default TodoList;
