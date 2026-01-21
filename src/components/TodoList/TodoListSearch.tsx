import { MdAdd } from "react-icons/md";

type TodoListSearchProps = {
  onAdd: () => void;
};

const TodoListSearch = ({ onAdd }: TodoListSearchProps) => {
  return (
    // <div className="grid grid-cols-6 gap-4">
    //   <div className="grid grid-cols-subgrid">
    //     <p className="">Name</p>
    //     <input
    //       type="text"
    //       value={search.name}
    //       onChange={(e) =>
    //         setSearch((prev) => ({ ...prev, name: e.target.value }))
    //       }
    //       className="border rounded-lg p-2  border-gray-300"
    //       placeholder="Enter"
    //     />
    //   </div>
    //   <div className="grid grid-cols-subgrid">
    //     <p className="">Age</p>
    //     <input
    //       type="number"
    //       value={search.age}
    //       onChange={(e) =>
    //         setSearch((prev) => ({ ...prev, age: e.target.value }))
    //       }
    //       className="border rounded-lg p-2  border-gray-300"
    //       placeholder="Enter"
    //     />
    //   </div>
    //   <div className="grid grid-cols-subgrid">
    //     <p className="">Address</p>
    //     <input
    //       type="text"
    //       value={search.address}
    //       onChange={(e) =>
    //         setSearch((prev) => ({ ...prev, address: e.target.value }))
    //       }
    //       className="border rounded-lg p-2  border-gray-300 "
    //       placeholder="Enter"
    //     />
    //   </div>
    // </div>
    <div className="flex gap-2 items-end">
      <div className="flex gap-2">
        <button
          onClick={() => {
            onAdd();
          }}
          className="text-white bg-green-600 hover:bg-green-700 transition duration-300  transform-view rounded-lg text-sm p-4 py-2.5 cursor-pointer flex justify-center whitespace-nowrap"
        >
          <MdAdd className="text-xl me-1" /> Add New Item
        </button>
      </div>
    </div>
  );
};

export default TodoListSearch;
