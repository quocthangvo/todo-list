import type { IProduct } from "../../interface/Products/Product";
import type { TableProps } from "../components/common/TableProps";

export type ProductSearchProps = {
  data: IProduct[];
  setData: (data: any) => void;
};

export type ProductTableProps = {
  header: TableProps[];
  data: IProduct[];
};

export type ProductTableHeaderProps = {
  header: TableProps[];
};

export type ProductTableBodyProps = {
  header: TableProps[];
  data: IProduct[];
};
