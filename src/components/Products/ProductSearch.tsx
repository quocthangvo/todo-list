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

const ProductSearch = ({ data, setData }: ProductSearchProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  // ACTION
  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      brand: "",
    },
    onSubmit: async (values) => {
      try {
        const products = await fetchProduct(values);

        setData(products);
      } catch (e) {
        toast.error("This didn't work.");
      }
    },
  });

  // ACTION

  // FETCH
  const fetchProduct = async (params: {
    title?: string;
    category?: string;
    brand?: string;
  }) => {
    try {
      let url = "https://dummyjson.com/products";

      // ưu tiên search theo title
      if (params.title) {
        url = `https://dummyjson.com/products/search?q=${params.title}`;
      }

      // nếu có category thì override
      if (params.category) {
        url = `https://dummyjson.com/products/category/${params.category}`;
      }

      const res = await axios.get(url);

      let products = res.data.products || [];

      return products;
    } catch (e) {
      toast.error("This didn't work.");
    }
  };

  //FETCH

  useEffect(() => {
    fetchProduct({});
  }, []);

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
