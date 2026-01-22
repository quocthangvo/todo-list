import type { IPerson } from "../../interface/TodoList/Person";



export type TodoListSearchProps = {
    onAdd: () => void;
};

export type TodoListTableProps = {
    data: IPerson[];
    onDelete: (item: IPerson) => void;
    onEdit: (item: IPerson) => void;
};

export type TodoListFormProps = {
    modal: boolean;
    setModal: (item: boolean | any) => void;
    data: IPerson[];
    setData: React.Dispatch<React.SetStateAction<IPerson[]>>;
    mode: string | any;
    selectedItem: IPerson | null;
};