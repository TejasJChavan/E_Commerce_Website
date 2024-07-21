import React, { useState } from "react";
import Navbar from "./Navbar";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      quantity: 2,
      price: 29.99,
      imageUrl: "https://m.media-amazon.com/images/I/51wSUsHMHWL._AC_UF350,350_QL80_.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      quantity: 1,
      price: 49.99,
      imageUrl: "https://m.media-amazon.com/images/S/mms-media-storage-prod/final/BrandPosts/brandPosts/cb0a1dce-4115-4c6c-b349-8a9e4554cbab/749b1be0-2a32-4c7a-b53d-32e8ab9f6261/media._SL480_.jpeg",
    },
    {
      id: 3,
      name: "Product 3",
      quantity: 3,
      price: 19.99,
      imageUrl: "https://m.media-amazon.com/images/S/mms-media-storage-prod/final/BrandPosts/brandPosts/bf01ecaa-ee1b-4d99-a176-56e6a5b50657/47c9fc92-0d4b-45ea-a39e-1e9f9d86c5f9/media._SL480_.jpeg",
    },
  ]);

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout!");
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
          {cartItems.length === 0 ? (
            <div className="text-center">
              <p className="text-lg">Your cart is empty.</p>
            </div>
          ) : (
            <div className="bg-white shadow-md rounded-lg p-6">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-left p-4"></th>
                    <th className="text-left p-4">Product</th>
                    <th className="text-left p-4">Quantity</th>
                    <th className="text-left p-4">Price</th>
                    <th className="text-left p-4">Total</th>
                    <th className="text-left p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="p-4">
                        <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                      </td>
                      <td className="p-4">{item.name}</td>
                      <td className="p-4">{item.quantity}</td>
                      <td className="p-4">${item.price.toFixed(2)}</td>
                      <td className="p-4">${(item.price * item.quantity).toFixed(2)}</td>
                      <td className="p-4">
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded-md"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end mt-6">
                <div className="text-xl font-bold mr-6">
                  Total: ${calculateTotal()}
                </div>
                <button
                  className="bg-blue-500 text-white px-6 py-3 rounded-md"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
