import React from "react";
import { useGallery } from "../../context/galleryContext";

const CartList = () => {
  const { cartItems, removeFromCart } = useGallery();
  return (
    <div className="py-10 px-5 flex flex-col gap-5 items-start">
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <div
            className="inline-flex gap-x-5 justify-between items-center"
            key={item.id}
          >
            <img
              src={item.url}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <button
              className="p-3 rounded-lg bg-red-400 text-white
             font-semibold text-sm"
              onClick={() => removeFromCart(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default CartList;
