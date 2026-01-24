import type { IPerson } from "../../interface/TodoList/Person";

export type TodoListHeaderProps = {
  dropdown: boolean;
  setDropdown: (drop: boolean) => void;
  search: string;
  setSearch: (data: string) => void;
};

export type TodoListSearchProps = {
  onAdd: () => void;
};

export type TodoListTableProps = {
  data: IPerson[];
  onDelete: (item: IPerson) => void;
  onEdit: (item: IPerson) => void;
  pageSize: number;
  currentPage: number;
  setPageSize: (data: number) => void;
  setCurrentPage: (data: number) => void;
};

export type TodoListFormProps = {
  modal: boolean;
  setModal: (item: boolean | any) => void;
  data: IPerson[];
  setData: (data: IPerson[] | any) => void;
  mode: string | any;
  selectedItem: IPerson | null;
};
