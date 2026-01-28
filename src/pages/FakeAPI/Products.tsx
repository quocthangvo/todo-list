import React from "react";
import Card from "../../components/common/Card";
import BreadCrumb from "../../components/TodoList/BreadCrumb";
import ProductSearch from "../../components/Products/ProductSearch";
import ProductTable from "../../components/Products/ProductTable";
import { PRODUCT_TABLE } from "../../utils/constants/Product";

const Products = () => {
  return (
    <React.Fragment>
      <Card>
        <div className="items-center mx-auto p-4">
          <BreadCrumb />
          <ProductSearch />
          <ProductTable header={PRODUCT_TABLE} />
        </div>
      </Card>
    </React.Fragment>
  );
};

export default Products;
