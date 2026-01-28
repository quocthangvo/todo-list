import type { ProductTableProps } from "../../utils/props/ECommerce/Product";
import ProductTableBody from "./ProductTable/ProductTableBody";
import ProductTableHeader from "./ProductTable/ProductTableHeader";

const ProductTable = ({ header }: ProductTableProps) => {
  return (
    <div className="relative overflow-x-auto shadow-md mt-5 rounded-lg">
      <table className="w-full text-left">
        <ProductTableHeader header={header} />
        <ProductTableBody />
      </table>
    </div>
  );
};

export default ProductTable;
