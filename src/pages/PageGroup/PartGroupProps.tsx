import { IPartGroup } from "../../interface/SystemSetting/PartGroup";
import { TableProps } from "../components/Table";
export interface IPartGroup {
  Part_No: string;
  Part_Name: string;
  Part_Group: string;
  Created_User: string;
  Dated_User: string;
}

export type PartGroupSearchProps = {
  page: number;
  setPartGroupData: (data: any) => void;
  setPage: (data: Object) => void;
  activeSort: { sortField: string; sortOrder: string };
  setIsLoading: (item: boolean) => void;
  refreshKey: number;
  setCheckFunction: (item: string) => void;
  modal: boolean;
  setModal: (item: boolean) => void;
  data: IPartGroup;
  setRefreshKey: (item: any) => void;
};

export type PartGroupTableProps = {
  header: TableProps[];
  data: IPartGroup[];
  page: number;
  setPage: (data: any) => void;
  getChooseRow?: (data: any) => void;
  activeSort: {
    sortField: string;
    sortOrder: string;
  };
  setActiveSort: (data: any) => void;
  isLoading: boolean;
  setOpenModalRow?: (item: boolean) => void;
  refreshKey?: number;
};

export type PartGroupTableHeaderProps = {
  header: TableProps[];
  activeSort: {
    sortField: string;
    sortOrder: string;
  };
  handleSorting: (sortField: string, sortOrder: string) => void;
};

export type PartGroupTableBodyProps = {
  header: TableProps[];
  data: IPartGroup[];
  activeRow: null | number | undefined;
  onActiveRow: (key: number, data: any) => void;
};

export type PartGroupFormProps = {
  data: IPartGroup;
  setRefreshKey: (item: any) => void;
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  checkFunction: string | null;
};
