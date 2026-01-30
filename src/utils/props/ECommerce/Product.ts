import type { IProduct } from "../../interface/Products/Product";
import type { TableProps } from "../components/common/TableProps";

type pageProps = {
  pages: number;
  pageSize: number;
  total: number;
};

export type ProductSearchProps = {
  data: IProduct[];
  setData: (data: any) => void;
  page: pageProps;
  setPage: (page: pageProps | any) => void;
  refresh: number;
  setRefresh: (refresh: any) => void;
  currentPage: number;
  setCheckFunction: (item: string) => void;
  modal: boolean;
  setModal: (modal: any) => void;
  getChooseRow: IProduct;

};

export type ProductTableProps = {
  header: TableProps[];
  data: IProduct[];
  page: pageProps;
  setPage: (page: pageProps | any) => void;
  currentPage: number;
  setCurrentPage: (page: number | any) => void;
  setGetChooseRow?: (data: any) => void;
};

export type ProductTableHeaderProps = {
  header: TableProps[];
};

export type ProductTableBodyProps = {
  header: TableProps[];
  data: IProduct[];
  activeRow: null | number | undefined;
  onActiveRow: (key: number, data: any) => void;
};

export type ProductTablePaginationProps = {
  page: pageProps;
  setPage: (page: pageProps) => void;
  currentPage: number;
  setCurrentPage: (page: number | any) => void;
};

export type ProductFormProps = {
  data: IProduct;
  setData: (data: any) => void;
  setRefresh: (item: any) => void;
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  checkFunction: string | null;
};
