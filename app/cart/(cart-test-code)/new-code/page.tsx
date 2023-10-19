"use client";

import { useState } from "react";
import { mockProductList } from "../mockProduct";
import ListForm from "./ListForm";
import CartItem from "./CartItem";
import Cart from "@/models/cart/Cart";
import Product from "@/models/product/Product";

const NewCode = () => {
  const [productList] = useState(
    mockProductList.map(
      (i) =>
        new Product({
          productId: String(i.id),
          name: i.name,
          price: i.price,
          description: i.description,
          thumbnail: i.thumbnail,
        })
    )
  );
  const [cartList, setCartList] = useState(new Cart());

  const addToCart = (product: Product) => {
    setCartList(cartList.addProduct(product));
  };

  const removeProduct = (productId: string) => {
    setCartList(cartList.removeProduct(productId));
  };

  return (
    <div className="flex flex-col items-center mt-12">
      <h2 className="text-3xl font-bold text-center">Product List</h2>
      <p className="text-sm text-center mb-4">상품 목록</p>
      <ListForm onClick={addToCart} listItem={productList} />
      <h2 className="text-xl text-center font-bold mb-2">장바구니</h2>
      {cartList.getItems().map((cartProduct) => (
        <CartItem key={cartProduct.product.productId} onClick={removeProduct} cartProduct={cartProduct} />
      ))}
    </div>
  );
};

export default NewCode;
