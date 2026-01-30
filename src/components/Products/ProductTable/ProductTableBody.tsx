import type { ProductTableBodyProps } from "../../../utils/props/ECommerce/Product";
import Typography from "../../common/Typography";
import "../../../css/product.css";
const ProductTableBody = ({
  header,
  data,
  activeRow,
  onActiveRow,
}: ProductTableBodyProps) => {
  return (
    <tbody>
      {data?.length === 0 ? (
        <tr>
          <td colSpan={header?.length}>
            <Typography
              className="p-4 text-center"
              name={"No data available"}
            />
          </td>
        </tr>
      ) : (
        data.map((item, index) => {
          return (
            <tr
              key={index}
              className={`${
                index % 2 === 0
                  ? activeRow === index
                    ? "bg-blue-400 text-white"
                    : "bg-white dark:bg-[#202940] dark:text-white"
                  : activeRow === index
                  ? "bg-blue-400 text-white"
                  : "bg-slate-50 dark:bg-[#202940] dark:text-white"
              }`}
              onClick={() => onActiveRow(index, item)}
            >
              <td className="p-4">{item.title}</td>
              <td className="p-4">{item.category}</td>
              <td className="p-4">{item.brand}</td>
              <td className="p-4">{item.price}</td>
              <td className="p-4">{item.rating}</td>
              <td className="p-4">{item.sku}</td>
              <td className="text-center">
                <span
                  className={`text-sm px-4 py-2  ${
                    item.availabilityStatus == "In Stock"
                      ? "rounded-full text-green-600 bg-green-100"
                      : "rounded-full text-red-600 bg-red-100"
                  }`}
                >
                  {item.availabilityStatus}
                </span>
              </td>
              <td className="p-4 w-60">
                <div className="relative group ">
                  <div className="line-clamp-2 break-words cursor-pointer">
                    {item.description}
                  </div>

                  <div
                    className="absolute left-0 top-full mt-1 hidden group-hover:block
                    bg-gray-700 text-white text-xs p-2 rounded
                    shadow-lg max-w-sm z-50 whitespace-normal"
                  >
                    {item.description}
                  </div>
                </div>
              </td>
            </tr>
          );
        })
      )}
    </tbody>
  );
};

export default ProductTableBody;
