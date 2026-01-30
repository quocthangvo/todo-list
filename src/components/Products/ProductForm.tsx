import * as Yup from "yup";

import { IoMdClose } from "react-icons/io";
import type { ProductFormProps } from "../../utils/props/ECommerce/Product";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";

type Category = {
  slug: string;
  name: string;
  url: string;
};

const ProductForm = ({
  data,
  setData,
  setRefresh,
  openModal,
  setOpenModal,
  checkFunction,
}: ProductFormProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  let condition = {
    Title: Yup.string().required("Please do not leave it blank!"),
    Category: Yup.string().required("Please do not leave it blank!"),
    Brand: Yup.string().required("Please do not leave it blank!"),
    Price: Yup.string().required("Please do not leave it blank!"),
    Sku: Yup.string().required("Please do not leave it blank!"),
    Availability_Status: Yup.string().required("Please do not leave it blank!"),
  };
  let validationSchema = Yup.object().shape(condition);
  // ACTION
  const formik = useFormik({
    initialValues: {
      Title: checkFunction === "edit" ? data.title : "",
      Category: checkFunction === "edit" ? data.category : "",
      Brand: checkFunction === "edit" ? data.brand : "",
      Price: checkFunction === "edit" ? data.price : "",
      Sku: checkFunction === "edit" ? data.sku : "",
      Availability_Status:
        checkFunction === "edit" ? data.availabilityStatus : "",
    },
    validationSchema,
    onSubmit: async (data) => {
      try {
        if (checkFunction === "add") {
          const res = await fetch("https://dummyjson.com/products/add", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: data.Title,
              category: data.Category,
              brand: data.Brand,
              price: Number(data.Price),
              sku: data.Sku,
              availabilityStatus: data.Availability_Status,
            }),
          });

          const result = await res.json();
          setData((prev: any) => [result, ...prev]);

          toast.success("Product added successfully!");

          // Reload list
          setRefresh((prev: any) => prev + 1);

          // Close modal nếu có
          setOpenModal(!openModal);
        } else {
        }
      } catch (error: any) {
        toast.error("error");
      }
    },
  });
  // ACTION

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <div>
      <div
        className={`${
          openModal ? "flex " : "hidden "
        } transition-all ease-out duration-300 overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 justify-center items-center 
            w-full md:inset-0 h-[calc(100%)] max-h-full bg-black/50`}
      >
        <div className="w-[800px] bg-white rounded-lg relative">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-600 dark:text-white">
                {checkFunction === "add" ? "Add" : "Edit"}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center cursor-pointer"
                onClick={() => setOpenModal(false)}
              >
                <IoMdClose />
              </button>
            </div>
            <div className="px-4 py-6 grid grid-cols-3 gap-4">
              <div className="">
                <div>Title</div>
                <input
                  type="text"
                  name="Title"
                  value={formik.values.Title}
                  onChange={formik.handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                {formik.touched.Title && formik.errors.Title && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.Title}
                  </div>
                )}
              </div>
              <div className="">
                <div>Category</div>
                <select
                  name="Category"
                  value={formik.values.Category}
                  onChange={formik.handleChange}
                  className="w-full border rounded-lg p-2 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value=""></option>

                  {categories.map((cat) => (
                    <option key={cat.slug} value={cat.slug}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                {formik.touched.Category && formik.errors.Category && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.Category}
                  </div>
                )}
              </div>
              <div className="">
                <div>Brand</div>
                <input
                  type="text"
                  name="Brand"
                  value={formik.values.Brand}
                  onChange={formik.handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                {formik.touched.Brand && formik.errors.Brand && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.Brand}
                  </div>
                )}
              </div>
              <div className="">
                <div>Price</div>
                <input
                  type="text"
                  name="Price"
                  value={formik.values.Price}
                  onChange={formik.handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                {formik.touched.Price && formik.errors.Price && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.Price}
                  </div>
                )}
              </div>
              <div className="">
                <div>Rating</div>
                <input
                  type="text"
                  name="Rating"
                  onChange={formik.handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="">
                <div>Sku</div>
                <input
                  type="text"
                  name="Sku"
                  value={formik.values.Sku}
                  onChange={formik.handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                {formik.touched.Sku && formik.errors.Sku && (
                  <div className="text-red-500 text-sm">
                    {formik.errors.Sku}
                  </div>
                )}
              </div>
              <div className="">
                <div>Availability Status</div>
                <select
                  name="Availability_Status"
                  value={formik.values.Availability_Status}
                  onChange={formik.handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value=""></option>
                  <option value="In Stock">In Stock</option>
                  <option value="Low Stock">Low Stock</option>
                </select>
                {formik.touched.Availability_Status &&
                  formik.errors.Availability_Status && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.Availability_Status}
                    </div>
                  )}
              </div>
              <div className="">
                <div>Description</div>
                <input
                  type="text"
                  name="Description"
                  onChange={formik.handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <div className="flex gap-2 justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="submit"
                  className="bg-[#1c63f0] text-white text-sm rounded-xl 
                    shadow-[0_10px_20px_rgba(30,136,229,0.3)] 
                    hover:bg-blue-700 duration-300 max-w-full  
                    font-medium px-5 py-2.5 text-center cursor-pointer"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className=" bg-[#e02424] text-white text-sm rounded-xl 
                    shadow-[0_10px_20px_rgba(244,67,54,0.3)]
                    hover:bg-red-700 duration-300 max-w-full 
                    font-medium  px-5 py-2.5 text-center cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
