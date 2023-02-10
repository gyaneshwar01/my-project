import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { ACTIONS } from "../context/ProductContext";
import useProductContext from "../hooks/useProductContext";

function Products() {
  const { products, dispatch } = useProductContext();

  const handleDelete = (id) => {
    dispatch({ type: ACTIONS.DELETE_PRODUCT, payload: { id: id } });
  };

  return products.length > 0 ? (
    <div className="container w-3/5 mx-auto my-10">
      <table className="text-sm w-full text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-xl">
            <th scope="col" className="px-3 py-3 w-1/3">
              Product name
            </th>
            <th scope="col" className="px-3 py-3 w-1/3">
              Category
            </th>
            <th scope="col" className="px-3 py-3 w-1/3">
              Price
            </th>
            <th scope="col" className="px-3 py-3 w-1/3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr className="bg-white border-b text-lg" key={product.id}>
              <th
                scope="row"
                className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {product.name}
              </th>
              <td className="px-3 py-4">{product.category}</td>
              <td className="px-3 py-4">{product.price}</td>
              <td className="px-3 py-4">
                <button
                  onClick={() => {
                    handleDelete(product.id);
                  }}
                >
                  <AiFillDelete className="text-center text-xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <h1 className="font-bold text-center my-3 text-2xl">No Products Added!</h1>
  );
}

export default Products;
