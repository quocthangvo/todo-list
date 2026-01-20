// type SearchState = {
//   name: string;
//   age: string;
//   address: string;
// };

// type TodoListSearchProps = {
//   search: SearchState;
//   setSearch: React.Dispatch<React.SetStateAction<SearchState>>;
// };

// const TodoListSearch = ({ search, setSearch }: TodoListSearchProps) => {
//   return (
//     <div className="grid grid-cols-6 gap-4">
//       <div className="grid grid-cols-subgrid">
//         <p className="">Name</p>
//         <input
//           type="text"
//           value={search.name}
//           onChange={(e) =>
//             setSearch((prev) => ({ ...prev, name: e.target.value }))
//           }
//           className="border rounded-lg p-2  border-gray-300"
//           placeholder="Enter"
//         />
//       </div>
//       <div className="grid grid-cols-subgrid">
//         <p className="">Age</p>
//         <input
//           type="number"
//           value={search.age}
//           onChange={(e) =>
//             setSearch((prev) => ({ ...prev, age: e.target.value }))
//           }
//           className="border rounded-lg p-2  border-gray-300"
//           placeholder="Enter"
//         />
//       </div>
//       <div className="grid grid-cols-subgrid">
//         <p className="">Address</p>
//         <input
//           type="text"
//           value={search.address}
//           onChange={(e) =>
//             setSearch((prev) => ({ ...prev, address: e.target.value }))
//           }
//           className="border rounded-lg p-2  border-gray-300 "
//           placeholder="Enter"
//         />
//       </div>
//     </div>
//   );
// };

// export default TodoListSearch;
