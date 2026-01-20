import {
  getImageUrl,
  TODOLIST_TABLE,
} from "../../utils/constants/TodoList/TodoList";
import type { IPerson } from "../../utils/interface/TodoList/Person";
type TodoListTableProps = {
  data: IPerson[];
};

const TodoListTable = ({ data }: TodoListTableProps) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <table className="w-full text-left">
        <thead className=" text-white uppercase bg-blue-700">
          <tr>
            {TODOLIST_TABLE.map((item, index) => (
              <th key={index} className="px-6 py-4 ">
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
            >
              <td className="px-6 py-3 ">{item.ID}</td>
              <td className="px-6 py-3 ">{item.Name}</td>
              <td className="px-6 py-3 ">{item.Age}</td>
              <td className="px-6 py-3 ">{item.Address}</td>
              <td className="px-6 py-3 ">
                <img
                  src={getImageUrl(item)}
                  alt={item.Name}
                  className="rounded-full"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoListTable;
