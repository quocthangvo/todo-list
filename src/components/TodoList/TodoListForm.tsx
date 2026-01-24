import { useEffect } from "react";
import { useFormik } from "formik";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import type { IPerson } from "../../utils/interface/TodoList/Person";
import type { TodoListFormProps } from "../../utils/props/TodoList/TodoList";

import * as Yup from "yup";

const TodoListForm = ({
  modal,
  setModal,
  data,
  setData,
  mode,
  selectedItem,
}: TodoListFormProps) => {
  const getNextId = () => {
    if (data.length === 0) return 1;
    return Math.max(...data.map((item) => item.ID)) + 1;
  };
  const validationSchema = Yup.object({
    Name: Yup.string().required("Name is required"),
    Card_ID: Yup.number().required("Card ID is required"),
    Birthday: Yup.string().required("Birthday is required"),
    Status: Yup.string().required("Status is required"),
  });
  // ACTION
  const formik = useFormik({
    initialValues: {
      Name: "",
      Card_ID: 0,
      Birthday: "",
      Address: "",
      Status: "",
      ...(mode === "edit" && selectedItem ? selectedItem : {}),
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (mode === "add") {
        const newItem: IPerson = {
          ...values,
          ID: getNextId(),
        };
        setData((prev: any) => [...prev, newItem]);

        toast.success("Add Successfully!", {
          position: "top-right",
          autoClose: 1500,
          theme: "light",
        });
      } else {
        setData((prev: any) =>
          prev.map((item: any) =>
            item.ID === values.ID ? { ...item, ...values } : item
          )
        );

        toast.success("Edit Successfully!", {
          position: "top-right",
          autoClose: 1500,
          theme: "light",
        });
      }
      resetForm();
      setModal((prev: any) => !prev);
    },
  });

  useEffect(() => {
    if (!modal) {
      formik.resetForm();
    }
  }, [modal]);

  // ACTION
  return (
    <div>
      {modal && (
        <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/50 backdrop-blur-xs">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <form onSubmit={formik.handleSubmit}>
              <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                  <div className="text-xl font-bold">
                    {mode === "add" ? "Add Todo List" : "Edit Todo List"}
                  </div>
                  <button
                    type="button"
                    className="text-neutral-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-lg w-8 h-8  flex justify-center items-center cursor-pointer"
                    data-modal-hide="default-modal"
                    onClick={() => setModal(!modal)}
                  >
                    <IoMdClose />
                  </button>
                </div>

                <div className="grid grid-cols-2 p-5 gap-2">
                  <div>
                    <p>Name</p>
                    <input
                      type="text"
                      name="Name"
                      value={formik.values.Name}
                      onChange={formik.handleChange}
                      className="rounded-sm p-2  border border-gray-300 text-gray-900 w-full focus:outline-none focus:border-blue-500 "
                    />
                    {formik.touched.Name && formik.errors.Name && (
                      <p className="text-red-500 text-sm">
                        {formik.errors.Name}
                      </p>
                    )}
                  </div>

                  <div>
                    <p>Card ID</p>
                    <input
                      type="number"
                      name="Card_ID"
                      value={formik.values.Card_ID}
                      onChange={formik.handleChange}
                      className="rounded-sm p-2  border border-gray-300 text-gray-900 w-full focus:outline-none focus:border-blue-500"
                    />
                    {formik.touched.Card_ID && formik.errors.Card_ID && (
                      <p className="text-red-500 text-sm">
                        {formik.errors.Card_ID}
                      </p>
                    )}
                  </div>

                  <div>
                    <p>Birthday</p>
                    <input
                      type="date"
                      name="Birthday"
                      value={formik.values.Birthday}
                      onChange={formik.handleChange}
                      className="rounded-sm p-2  border border-gray-300 text-gray-900 w-full focus:outline-none focus:border-blue-500"
                    />
                    {formik.touched.Birthday && formik.errors.Birthday && (
                      <p className="text-red-500 text-sm">
                        {formik.errors.Birthday}
                      </p>
                    )}
                  </div>

                  <div>
                    <p>Address</p>
                    <input
                      type="text"
                      name="Address"
                      value={formik.values.Address}
                      onChange={formik.handleChange}
                      className="rounded-sm p-2  border border-gray-300 text-gray-900 w-full focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="">
                    <p>Status</p>
                    <select
                      name="Status"
                      value={formik.values.Status}
                      onChange={formik.handleChange}
                      className=" border border-gray-300 text-gray-900 rounded-lg p-2 w-full focus:outline-none focus:border-blue-500"
                    >
                      <option value=""></option>
                      <option value="Done">Done</option>
                      <option value="Pending">Pending</option>
                      <option value="Canceled">Canceled</option>
                    </select>
                    {formik.touched.Status && formik.errors.Status && (
                      <p className="text-red-500 text-sm">
                        {formik.errors.Status}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    type="submit"
                    className="text-white bg-[#0575f3] hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="py-2.5 px-5 ms-3 text-sm font-medium rounded-lg border border-gray-300 hover:border-gray-400 cursor-pointer"
                    onClick={() => setModal(!modal)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoListForm;
