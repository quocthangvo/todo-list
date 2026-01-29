import type { ProductTableBodyProps } from "../../../utils/props/ECommerce/Product";
import Typography from "../../common/Typography";

const ProductTableBody = ({ header, data }: ProductTableBodyProps) => {
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
                  ? "bg-slate-50 dark:bg-blue-400 dark:text-white"
                  : "bg-white dark:bg-[#202940] dark:text-white"
              }`}
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
              <td className="p-4 w-60 overflow-hidden text-ellipsis ">
                {item.description}
              </td>
            </tr>
          );
        })
      )}
    </tbody>
  );
};

export default ProductTableBody;
