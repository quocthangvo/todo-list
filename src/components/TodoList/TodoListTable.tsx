import { TODOLIST_TABLE } from "../../utils/constants/TodoList/TodoList";
import type { IPerson } from "../../utils/interface/TodoList/Person";

import { MdDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
type TodoListTableProps = {
  data: IPerson[];
  onDelete: (item: IPerson) => void;
  onEdit: (item: IPerson) => void;
};

const TodoListTable = ({ data, onDelete, onEdit }: TodoListTableProps) => {
  const statusClass: { [key: string]: string } = {
    Done: "text-green-600 font-bold",
    Pending: "text-yellow-600 font-bold",
    Canceled: "text-red-600 font-bold",
  };

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
            data.map((item, index) => (
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
      <div className="flex justify-between items-center px-6 py-3">
        <div className="hs-dropdown [--placement:top-left] relative flex items-center">
          <div className="me-1">Show per page:</div>
          <button
            type="button"
            className="hs-dropdown-toggle py-2 px-2.5 inline-flex items-center gap-x-1 text-sm rounded-lg border border-gray-300 cursor-pointer"
          >
            5
            <RiArrowDropDownLine className="text-xl" />
          </button>
          <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 hidden z-50 transition-[margin,opacity] opacity-0 duration-300 mb-2 bg-white shadow-md rounded-lg p-1 space-y-0.5 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700">
            <button
              type="button"
              className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
            >
              5
            </button>
            <button
              type="button"
              className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
            >
              10
            </button>
            <button
              type="button"
              className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
            >
              20
            </button>
          </div>
        </div>
        <div className="grid justify-center sm:flex sm:justify-start sm:items-center gap-2">
          <nav className="flex justify-end items-center -space-x-px ">
            <button
              type="button"
              className="cursor-pointer min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              <GrFormPrevious />
              <span className="sr-only">Previous</span>
            </button>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center bg-gray-200 text-gray-800 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-hidden focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:border-neutral-700 dark:text-white dark:focus:bg-neutral-500"
            >
              1
            </button>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              2
            </button>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              3
            </button>
            <div className="hs-tooltip inline-block border border-gray-200 dark:border-neutral-700">
              <button
                type="button"
                className="hs-tooltip-toggle group min-h-9 min-w-9 flex justify-center items-center text-gray-400 hover:text-blue-600 p-2 text-sm focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:bg-white/10"
              >
                <span className=" text-xs">•••</span>
              </button>
            </div>
            <button
              type="button"
              className="min-h-9.5 min-w-9.5 flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              8
            </button>
            <button
              type="button"
              className=" cursor-pointer min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              <span className="sr-only">Next</span>
              <GrFormNext />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TodoListTable;
