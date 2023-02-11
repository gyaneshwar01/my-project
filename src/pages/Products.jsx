import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { ACTIONS } from "../context/ProductContext";
import useOrderContext from "../hooks/useOrderContext";
import useProductContext from "../hooks/useProductContext";
import useUserContext from "../hooks/useUserContext";

function Products() {
  const { products, dispatch } = useProductContext();

  const { orders, dispatch: dispatchOrder } = useOrderContext();

  const { user } = useUserContext();

  const handleDelete = (id) => {
    dispatch({ type: ACTIONS.DELETE_PRODUCT, payload: { id: id } });
  };

  const handleOrder = (product) => {
    dispatchOrder({
      type: "ADD_ORDER",
      payload: { order: { ...product, id: orders.length } },
    });
  };

  console.log(orders);

  return products.length > 0 ? (
    <div className="container w-3/5 mx-auto my-8">
      <h1 className="text-2xl my-2 text-center font-bold mb-5">Products</h1>
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
                {user.isAdmin ? (
                  <button
                    onClick={() => {
                      handleDelete(product.id);
                    }}
                  >
                    <AiFillDelete className="text-center text-xl" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleOrder(product)}
                    className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600 rounded text-lg"
                  >
                    Buy
                  </button>
                )}
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
