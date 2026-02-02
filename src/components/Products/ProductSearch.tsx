import { useFormik } from "formik";
import type { ProductSearchProps } from "../../utils/props/ECommerce/Product";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

type Category = {
  slug: string;
  name: string;
  url: string;
};

const ProductSearch = ({
  data,
  setData,
  page,
  setPage,
  refresh,
  setRefresh,
  currentPage,
  setCheckFunction,
  modal,
  setModal,
  getChooseRow,
}: ProductSearchProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  // ACTION
  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
    },
    onSubmit: async () => {
      try {
        setPage((prev: any) => ({
          ...prev,
          pages: 1,
        }));
        await fetchProductList(true); // true = search mới
      } catch (e) {
        toast.error("This didn't work.");
      }
    },
  });

  const addProduct = () => {
    setCheckFunction("add");
    setModal(!modal);
  };

  const deleteProduct = async () => {
    if (!getChooseRow?.id) {
      toast.error("No data selected");
      return;
    }

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#155DFC",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await fetch(`https://dummyjson.com/products/${getChooseRow.id}`, {
        method: "DELETE",
      });

      setData((prev: any[]) =>
        prev.filter((item) => item.id !== getChooseRow.id)
      );
      // setRefresh((oldKey: any) => oldKey + 1);
      Swal.fire("Deleted!", "Product has been deleted.", "success");
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  const editProduct = async () => {
    if (getChooseRow?.id) {
      setCheckFunction("edit");
      setModal(!modal);
    } else {
      toast.error("Please choose a data in table");
    }

    // try {
    //   const res = await fetch(`https://dummyjson.com/products/${data.id}`, {
    //     method: "PUT", // hoặc PATCH
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       title: formik.values.title,
    //       category: formik.values.category,
    //       brand: formik.values.brand,
    //       price: Number(formik.values.price),
    //       sku: formik.values.,
    //       availabilityStatus: formik.values.,
    //     }),
    //   });
    //   const updated = await res.json();
    //   setData((prev: any) =>
    //     prev.map((item) =>
    //       item.id === updated.id ? { ...item, ...updated } : item
    //     )
    //   );
    //   toast.success("Product updated!");
    //   setModal(!modal);
    // } catch (err) {
    //   toast.error("Update failed");
    // }
  };

  // ACTION

  // FETCH
  const fetchProductList = async (isNewSearch = false) => {
    try {
      const { pages, pageSize } = page;
      const skip = (pages - 1) * pageSize;

      let url = `https://dummyjson.com/products?limit=${pageSize}&skip=${skip}`;

      // Search theo title
      if (formik.values.title) {
        url = `https://dummyjson.com/products/search?q=${formik.values.title}&limit=${pageSize}&skip=${skip}`;
      }

      // Filter category
      if (formik.values.category) {
        url = `https://dummyjson.com/products/category/${formik.values.category}?limit=${pageSize}&skip=${skip}`;
      }

      const res = await axios.get(url);
      const products = res.data.products || [];

      // cập nhật total
      setPage((prev: any) => ({
        ...prev,
        total: res.data.total,
      }));

      // Trang đầu hoặc search mới → replace
      if (pages === 1 || isNewSearch) {
        setData(products);
      }
      // Load thêm → append
      else {
        setData((prev: any) => [...prev, ...products]);
      }
    } catch (error) {
      toast.error("Fetch failed");
    }
  };

  //FETCH

  useEffect(() => {
    fetchProductList();
  }, [page.pages, currentPage, page.pageSize, refresh]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div className="flex gap-2 items-end">
      <form
        className="w-full grid grid-cols-8 items-end  gap-2"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <label className="">Name</label>
          <input
            type="text"
            placeholder="Enter..."
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            className="w-full border rounded-lg p-2 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label>Category</label>
          <select
            name="category"
            value={formik.values.category}
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
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="w-full rounded-lg p-2 bg-blue-400 text-white hover:bg-blue-500 cursor-pointer"
          >
            Search
          </button>
          <button
            type="button"
            onClick={addProduct}
            className="w-full rounded-lg py-2 px-4 bg-blue-600 text-white hover:bg-blue-700 cursor-pointer shadow-xl shadow-blue-500/50"
          >
            Add
          </button>
          <button
            type="button"
            onClick={editProduct}
            className="w-full rounded-lg py-2 px-4 bg-yellow-500 text-white hover:bg-yellow-600 cursor-pointer shadow-xl shadow-yellow-500/50"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={deleteProduct}
            className="w-full rounded-lg py-2 px-4 bg-red-600 text-white hover:bg-red-700 cursor-pointer shadow-xl shadow-red-500/50"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductSearch;
