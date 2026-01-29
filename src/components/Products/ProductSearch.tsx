import { useFormik } from "formik";
import type { ProductSearchProps } from "../../utils/props/ECommerce/Product";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

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
        setPage(1);
        await fetchProductList(true); // true = search mới
      } catch (e) {
        toast.error("This didn't work.");
      }
    },
  });

  // ACTION

  // FETCH
  const fetchProductList = async (isNewSearch = false) => {
    try {
      let url = `https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`;

      // search title
      if (formik.values.title) {
        url = `https://dummyjson.com/products/search?q=${formik.values.title}&limit=10&skip=${(page - 1) * 10}`;
      }

      // filter category
      if (formik.values.category) {
        url = `https://dummyjson.com/products/category/${formik.values.category}?limit=10&skip=${(page - 1) * 10}`;
      }

      const res = await axios.get(url);

      const products = res.data.products || [];

      if (page === 1 || isNewSearch) {
        setData(products);
      } else {
        setData((prev: any) => [...prev, ...products]);
      }
    } catch (error) {
      toast.error("Fetch failed");
    }
  };

  //FETCH

  useEffect(() => {
    fetchProductList();
  }, [page, refresh]);

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
          <button className="w-full rounded-lg p-2 bg-blue-600 text-white hover:bg-blue-700 cursor-pointer shadow-xl shadow-blue-500/50">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductSearch;
