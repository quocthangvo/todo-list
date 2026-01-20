import { TODOLIST_TABLE } from "../../utils/constants/TodoList/TodoList";
import type { IPerson } from "../../utils/interface/TodoList/Person";
import { MdDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
type TodoListTableProps = {
  data: IPerson[];
};

const TodoListTable = ({ data }: TodoListTableProps) => {
  const statusClass: { [key: string]: string } = {
    Done: "text-green-600 font-bold",
    Pending: "text-yellow-600 font-bold",
    Canceled: "text-red-600 font-bold",
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 ">
      <table className="w-full text-left">
        <thead className=" bg-gray-200">
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
                colSpan={6}
                className="px-6 py-6 text-center text-gray-500 italic"
              >
                No data available
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr
                key={index}
                className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <td className="px-6 py-3">{item.ID}</td>
                <td className="px-6 py-3 max-w-32">{item.Name}</td>
                <td className="px-6 py-3">{item.Age}</td>
                <td className="px-6 py-3 max-w-48">{item.Address}</td>
                <td className={`px-6 py-3 ${statusClass[item.Status]}`}>
                  {item.Status}
                </td>
                <td className="px-6 py-3">
                  <div>
                    <button className="text-blue-600 text-2xl me-5 cursor-pointer">
                      <AiOutlineEdit />
                    </button>
                    <button className="text-red-600 text-2xl cursor-pointer">
                      <MdDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoListTable;
