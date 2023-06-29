import React from "react";
import { useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleRemove = (index) => {
    // Create a copy of the cart items array
    const updatedCartItems = [...cartItems];
    // Remove the product at the specified index
    updatedCartItems.splice(index, 1);
    // Update the cart items state
    setCartItems(updatedCartItems);
  };

  return (
    <div className="bg-gray-100 py-4 px-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th className="relative px-6 py-3">
                <span className="sr-only">Remove</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {cartItems.length === 0 ? (
              <tr>
                <td className="px-6 py-4 whitespace-nowrap" colSpan="5">
                  No items in the cart
                </td>
              </tr>
            ) : (
              cartItems.map((product, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={product.image}
                          alt={product.name}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {product.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {product.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      ${product.price}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="number"
                      className="w-16 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      defaultValue="1"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      ${product.price}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemove(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-500">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;