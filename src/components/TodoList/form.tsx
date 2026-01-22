import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import type { IPerson } from "../../utils/interface/TodoList/Person";
import { toast } from "react-toastify";

type TodoListFormProps = {
  open: boolean;
  onClose: () => void;
  data: IPerson[];
  setData: (data: IPerson[]) => void;
  mode: string;
  selectedItem: IPerson | null;
};

const TodoListForm = ({
  open,
  onClose,
  data,
  setData,
  mode,
  selectedItem,
}: TodoListFormProps) => {
  const [form, setForm] = useState({
    ID: 0,
    Name: "",
    Card_ID: 0,
    Birthday: "",
    Address: "",
    Status: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const getNextId = () => {
    if (data.length === 0) return 1;
    return Math.max(...data.map((item) => item.ID)) + 1;
  };

  // ACTION
  const handleSubmit = () => {
    if (
      !form.Name ||
      !form.Card_ID ||
      !form.Address ||
      !form.Birthday ||
      !form.Status
    )
      return;

    if (mode === "add") {
      const newItem: IPerson = {
        ...form,
        ID: getNextId(),
      };
      setData([...data, newItem]);

      toast.success("Add Successfully!", {
        position: "top-right",
        autoClose: 1500,
        theme: "light",
      });
    } else {
      setData(data.map((item) => (item.ID === form.ID ? { ...form } : item)));

      toast.success("Edit Successfully!", {
        position: "top-right",
        autoClose: 1500,
        theme: "light",
      });
    }
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setForm({
      ID: 0,
      Name: "",
      Card_ID: 0,
      Birthday: "",
      Address: "",
      Status: "",
    });
  };

  //fill data vào input
  useEffect(() => {
    if (mode === "edit" && selectedItem) {
      setForm(selectedItem);
    }
  }, [mode, selectedItem]);

  // ACTION
  return (
    <div>
      {open && (
        <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/50 backdrop-blur-xs">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <div className="text-xl font-bold">
                  {mode === "add" ? "Add Todo List" : "Edit Todo List"}
                </div>
                <button
                  type="button"
                  className="text-neutral-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-lg w-8 h-8  flex justify-center items-center cursor-pointer"
                  data-modal-hide="default-modal"
                  onClick={onClose}
                >
                  <IoMdClose />
                </button>
              </div>

              <div></div>
              <div className="grid grid-cols-2 p-5 gap-2">
                <div>
                  <p>Name</p>
                  <input
                    type="text"
                    name="Name"
                    value={form.Name}
                    onChange={handleChange}
                    className="rounded-sm p-2  border border-gray-300 text-gray-900 w-full focus:outline-none focus:border-blue-500 "
                  />
                </div>

                <div>
                  <p>Card ID</p>
                  <input
                    type="number"
                    name="Card_ID"
                    value={form.Card_ID}
                    onChange={handleChange}
                    className="rounded-sm p-2  border border-gray-300 text-gray-900 w-full focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <p>Birthday</p>
                  <input
                    type="date"
                    name="Birthday"
                    value={form.Birthday}
                    onChange={handleChange}
                    className="rounded-sm p-2  border border-gray-300 text-gray-900 w-full focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <p>Address</p>
                  <input
                    type="text"
                    name="Address"
                    value={form.Address}
                    onChange={handleChange}
                    className="rounded-sm p-2  border border-gray-300 text-gray-900 w-full focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="">
                  <p>Status</p>
                  <select
                    name="Status"
                    value={form.Status}
                    onChange={handleChange}
                    className=" border border-gray-300 text-gray-900 rounded-lg p-2 w-full focus:outline-none focus:border-blue-500"
                  >
                    <option value=""></option>
                    <option value="Done">Done</option>
                    <option value="Pending">Pending</option>
                    <option value="Canceled">Canceled</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white bg-[#0575f3] hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium rounded-lg border border-gray-300 hover:border-gray-400 cursor-pointer"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoListForm;
