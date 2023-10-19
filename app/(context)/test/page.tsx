"use client";

import React from "react";
import Cart from "@/models/cart/Cart";
import Product from "@/models/product/Product";

const cart = new Cart();

const Test = () => {
  const appendCart = () => {
    cart.addProduct(
      new Product({
        name: "상품입니다.",
        description: "상품테스트",
        price: 1000,
        productId: "1",
        thumbnail: "https://via.placeholder.com/150",
      })
    );
    console.log(cart.getItems());
  };

  return (
    <>
      {cart.getItems().map((i) => (
        <>
          {i.product.name}
          {i.quantity}
        </>
      ))}
      <button type="button" onClick={appendCart}>
        추가하기
      </button>
    </>
  );
};

export default Test;
