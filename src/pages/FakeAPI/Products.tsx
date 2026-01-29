import React, { useState } from "react";
import Card from "../../components/common/Card";
import BreadCrumb from "../../components/TodoList/BreadCrumb";
import ProductSearch from "../../components/Products/ProductSearch";
import ProductTable from "../../components/Products/ProductTable";
import { PRODUCT_TABLE } from "../../utils/constants/Product";
import type { IProduct } from "../../utils/interface/Products/Product";

const Products = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  return (
    <React.Fragment>
      <Card>
        <div className="items-center mx-auto p-4">
          <BreadCrumb />
          <ProductSearch data={productList} setData={setProductList} />
          <ProductTable header={PRODUCT_TABLE} data={productList} />
        </div>
      </Card>
    </React.Fragment>
  );
};

export default Products;
