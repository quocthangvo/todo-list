import React, { useState } from "react";
import Card from "../../components/common/Card";
import BreadCrumb from "../../components/TodoList/BreadCrumb";
import ProductSearch from "../../components/Products/ProductSearch";
import ProductTable from "../../components/Products/ProductTable";
import { PRODUCT_TABLE } from "../../utils/constants/Product";
import type { IProduct } from "../../utils/interface/Products/Product";
import ProductForm from "../../components/Products/ProductForm";

const Products = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [getChooseRow, setGetChooseRow] = useState<IProduct | any>({});

  const [refresh, setRefresh] = useState<number>(0);
  const [page, setPage] = useState({ pages: 1, pageSize: 5, total: 0 });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [checkFunction, setCheckFunction] = useState<string | null>(null);

  return (
    <React.Fragment>
      <Card>
        <div className="items-center mx-auto p-4">
          <BreadCrumb />
          <ProductSearch
            data={productList}
            setData={setProductList}
            refresh={refresh}
            setRefresh={setRefresh}
            page={page}
            setPage={setPage}
            currentPage={currentPage}
            setCheckFunction={setCheckFunction}
            modal={openModal}
            setModal={setOpenModal}
            getChooseRow={getChooseRow}
          />

          <ProductTable
            header={PRODUCT_TABLE}
            data={productList}
            page={page}
            setPage={setPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setGetChooseRow={setGetChooseRow}
          />
          {openModal && (
            <ProductForm
              data={getChooseRow}
              setData={setProductList}
              setRefresh={setRefresh}
              openModal={openModal}
              setOpenModal={setOpenModal}
              checkFunction={checkFunction}
            />
          )}
        </div>
      </Card>
    </React.Fragment>
  );
};

export default Products;
