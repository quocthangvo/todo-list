import { RiArrowDropDownLine } from "react-icons/ri";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

type TodoListTablePaginationProps = {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
};

const PAGE_SIZES = [2, 5, 10];
const TodoListTablePagination = ({
  totalItems,
  currentPage,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: TodoListTablePaginationProps) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  return (
    <div className="flex justify-between items-center px-6 py-3">
      {/* PAGE SIZE */}
      <div className="relative flex items-center gap-2">
        <span>Show per page:</span>

        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-2 "
        >
          {PAGE_SIZES.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      {/* PAGINATION */}
      <nav className="flex items-center ">
        {/* PREV */}
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="cursor-pointer  py-2 px-2.5   border border-gray-300 text-gray-800 first:rounded-s-lg last:rounded-e-lg"
        >
          <GrFormPrevious />
        </button>

        {/* PAGE NUMBERS */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`cursor-pointer  bg-gray-50 text-gray-800 border border-gray-300 py-1.5 px-3 text-sm
              ${page === currentPage ? "bg-gray-300" : "hover:bg-gray-200"}
            `}
          >
            {page}
          </button>
        ))}

        {/* NEXT */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="cursor-pointer min-w-9.5 py-2 px-2.5   border border-gray-300 text-gray-800 first:rounded-s-lg last:rounded-e-lg"
        >
          <GrFormNext />
        </button>
      </nav>
    </div>
  );
};
export default TodoListTablePagination;
