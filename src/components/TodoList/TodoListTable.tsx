import { TODOLIST_TABLE } from "../../utils/constants/TodoList/TodoList";

import { MdDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";

import type { TodoListTableProps } from "../../utils/props/TodoList/TodoList";
import TodoListTablePagination from "./TodoListTable/TodoListTablePagination";
import { useState } from "react";

const TodoListTable = ({ data, onDelete, onEdit }: TodoListTableProps) => {
  const statusClass: { [key: string]: string } = {
    Done: "text-green-600 font-bold",
    Pending: "text-yellow-600 font-bold",
    Canceled: "text-red-600 font-bold",
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = data.slice(startIndex, startIndex + pageSize);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 ">
      <table className="w-full text-left">
        <thead className="bg-[#0575f3] text-white">
          <tr>
            {TODOLIST_TABLE.map((item, index) => (
              <th key={index} className="px-6 py-4 ">
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={7}
                className="px-6 py-6 text-center text-gray-500 italic"
              >
                No data available
              </td>
            </tr>
          ) : (
            paginatedData.map((item, index) => (
              <tr
                key={index}
                className={`border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                }`}
              >
                <td className="px-6 py-3">{item.ID}</td>
                <td className="px-6 py-3 max-w-32">{item.Name}</td>
                <td className="px-6 py-3">{item.Card_ID}</td>
                <td className="px-6 py-3">{item.Birthday}</td>
                <td className="px-6 py-3 max-w-48">{item.Address}</td>
                <td className={`px-6 py-3 ${statusClass[item.Status]}`}>
                  {item.Status}
                </td>
                <td className="px-6 py-3">
                  <div>
                    <button
                      onClick={() => onEdit(item)}
                      className="text-gray-600 text-2xl me-5 cursor-pointer"
                    >
                      <AiOutlineEdit />
                    </button>
                    <button className="text-red-600 text-2xl cursor-pointer">
                      <MdDelete onClick={() => onDelete(item)} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <TodoListTablePagination
        totalItems={data.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setCurrentPage(1); // reset về page 1
        }}
      />
    </div>
  );
};

export default TodoListTable;
