import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { people } from "../data/TodoList/TodoListData";
import type { IPerson } from "../utils/interface/TodoList/Person";

import TodoListTable from "../components/TodoList/TodoListTable";
import TodoListForm from "../components/TodoList/TodoListForm";
import TodoListHeader from "../components/TodoListHeader";
import TodoListSearch from "../components/TodoList/TodoListSearch";

import Swal from "sweetalert2";
import useLocalStorage from "use-local-storage";

const TodoList = () => {
  const [todoList, setTodoList] = useLocalStorage<IPerson[]>(
    "todoList",
    people,
  );
  const [selectedItem, setSelectedItem] = useState<IPerson | null>(null);

  const [dropdown, setDropdown] = useState(false);
  const [modal, setModal] = useState(false);

  const [mode, setMode] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);

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

    setTodoList((prev = []) => {
      const newList = prev.filter((item) => item.ID !== data.ID);

      const newTotalPages = Math.ceil(newList.length / pageSize);

      if (currentPage > newTotalPages) {
        setCurrentPage(1);
      }

      return newList;
    });

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
          currentPage={currentPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
          setCurrentPage={setCurrentPage}
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
