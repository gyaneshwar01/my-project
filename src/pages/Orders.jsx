import React from "react";
import { ACTIONS } from "../context/OrderContext";
import useOrderContext from "../hooks/useOrderContext";

function Orders() {
  const { orders, dispatch } = useOrderContext();

  const handleSell = (id) => {
    dispatch({ type: ACTIONS.REMOVE_ORDER, payload: { id: id } });
  };

  return orders.length > 0 ? (
    <div className="container w-[90%] mx-auto my-5">
      <h1 className="text-2xl my-2 text-center font-bold mb-5">Orders</h1>
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
          {orders.map((product) => (
            <tr className="bg-white border-b text-lg" key={product.id}>
              <th
                scope="row"
                className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {product.name}
              </th>
              <td className="px-3 py-4">{product.category}</td>
              <td className="px-3 py-4">${product.price}</td>
              <td className="px-3 py-4">
                <button
                  onClick={() => handleSell(product.id)}
                  className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-5 focus:outline-none hover:bg-pink-600 rounded text-lg"
                >
                  Sell
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <h1 className="font-bold text-center my-3 text-2xl">No Orders Yet!</h1>
  );
}

export default Orders;
