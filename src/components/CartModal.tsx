"use client";
import Image from "next/image";
import React from "react";

const CartModal = () => {
  const cartItems = true;
  return (
    <div
      className="absolute right-0 top-12 bg-blue-50 text-sm w-max
    rounded-md p-4 z-10 shadow-lg shadow-blue-200 flex flex-col gap-8"
    >
      {!cartItems ? (
        <div>Cart is empty</div>
      ) : (
        <>
        <h2 className="text-xl">Shopping Cart</h2>
        <div className="flex flex-col gap-8">
          <div className="flex gap-4">
          <Image
            src={"/product.png"}
            alt="item image"
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          <div className="flex flex-col justify-between w-full">
            <div className="flex items-center justify-between gap-8">
              <h3 className="font-semibold">Product Name</h3>
              <div className="p-1 bg-gray-100 rounded-sm">$49</div>
            </div>
            <div className="text-sm text-gray-500">available</div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Qty. 2</span>
              <span className="text-blue-500">Remove</span>
            </div>
          </div>
        </div>
          <div className="flex gap-4">
          <Image
            src={"/product.png"}
            alt="item image"
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          <div className="flex flex-col justify-between w-full">
            <div className="flex items-center justify-between gap-8">
              <h3 className="font-semibold">Product Name</h3>
              <div className="p-1 bg-gray-100 rounded-sm">$49</div>
            </div>
            <div className="text-sm text-gray-500">available</div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Qty. 2</span>
              <span className="text-blue-500">Remove</span>
            </div>
          </div>
        </div>
        </div>
        <div>
          <div className="flex items-center justify-between font-semibold">
            <span>Subtotal</span>
            <span>$49</span>
          </div>
          <p className="text-gray-500 text-sm mt-2 mb-4">Shipping and taxes calculated at checkout.</p>
          <div className="flex justify-between text-sm">
            <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
            <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
