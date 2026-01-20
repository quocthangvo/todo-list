type TodoListFormProps = {
  open: boolean;
  onClose: () => void;
};

const TodoListForm = ({ open, onClose }: TodoListFormProps) => {
  return (
    <div>
      {open && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/50"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <div className="text-xl font-bold">Add Todo List</div>
                <button
                  type="button"
                  className="text-neutral-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                  onClick={onClose}
                >
                  X
                </button>
              </div>

              <div className="grid grid-cols-3 p-4 gap-4">
                <div>
                  <p>ID</p>
                  <input
                    type="text"
                    id="id"
                    className="border border-neutral-400 rounded-sm p-2"
                  />
                </div>

                <div>
                  <p>Name</p>
                  <input
                    type="text"
                    id="name"
                    className="border border-neutral-400 rounded-sm p-2"
                  />
                </div>

                <div>
                  <p>Age</p>
                  <input
                    type="text"
                    id="age"
                    className="border border-neutral-400 rounded-sm p-2"
                  />
                </div>

                <div>
                  <p>Address</p>
                  <input
                    type="text"
                    id="address"
                    className="border border-neutral-400 rounded-sm p-2"
                  />
                </div>

                <div>
                  <p>Image</p>
                  <input
                    type="text"
                    id="image_id"
                    className="border  border-neutral-400 rounded-sm p-2"
                  />
                </div>
              </div>

              <div className="flex justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="default-modal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer"
                >
                  Save
                </button>
                <button
                  type="button"
                  data-modal-hide="default-modal"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-white bg-red-600 rounded-lg border hover:bg-red-700 cursor-pointer"
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
