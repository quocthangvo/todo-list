const ProductSearch = () => {
  return (
    <div className="flex gap-2 items-end">
      <div className="grid grid-cols-8 gap-4 items-end">
        <div>
          <label className="">Name</label>
          <input
            type="text"
            placeholder="Enter..."
            className="w-full border rounded-lg p-2 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="">Category</label>
          <select
            name="Category"
            className="w-full border rounded-lg p-2 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div>
          <label className="">Brand</label>
          <select
            name="Brand"
            className="w-full border rounded-lg p-2 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button className="w-full rounded-lg p-2 bg-blue-400 text-white hover:bg-blue-500 cursor-pointer">
            Search
          </button>
          <button className="w-full rounded-lg p-2 bg-blue-600 text-white hover:bg-blue-700 cursor-pointer shadow-xl shadow-blue-500/50">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
