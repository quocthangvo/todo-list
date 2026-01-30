import { useEffect, useRef, useState } from "react";
import type { ProductTableProps } from "../../utils/props/ECommerce/Product";
import ProductTableBody from "./ProductTable/ProductTableBody";
import ProductTableHeader from "./ProductTable/ProductTableHeader";
import ProductTablePagination from "./ProductTable/ProductTablePagination";

const ProductTable = ({
  header,
  data,
  page,
  setPage,
  currentPage,
  setCurrentPage,
  setGetChooseRow,
}: ProductTableProps) => {
  const [activeRow, setActiveRow] = useState<null | number | undefined>(null);
  const [initialKey, setInitialKey] = useState<number | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  const onActiveRow = (key: number, data: any) => {
    if (initialKey === key) {
      setActiveRow(null);
      if (setGetChooseRow) {
        setGetChooseRow({});
      }
      setInitialKey(null);
    } else {
      setActiveRow(key);
      if (setGetChooseRow) {
        setGetChooseRow(data);
      }

      setInitialKey(key);
    }
  };

  useEffect(() => {
    setActiveRow(null);
    if (setGetChooseRow) {
      setGetChooseRow({});
    }
  }, [page]);
  return (
    <div className="relative overflow-x-auto shadow-md mt-5 rounded-lg">
      <table className="w-full text-left">
        <ProductTableHeader header={header} />
        <ProductTableBody
          header={header}
          data={data}
          activeRow={activeRow}
          onActiveRow={onActiveRow}
        />
      </table>
      <ProductTablePagination
        page={page}
        setPage={setPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProductTable;
