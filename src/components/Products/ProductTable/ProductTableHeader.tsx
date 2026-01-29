import type { ProductTableHeaderProps } from "../../../utils/props/ECommerce/Product";

const ProductTableHeader = ({ header }: ProductTableHeaderProps) => {
  return (
    <thead>
      <tr>
        {header.map((item, key) => (
          <th
            key={key}
            className="border-gray-100 bg-blue-600/100 text-white font-semibold px-4 py-4"
          >
            {item.name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default ProductTableHeader;
