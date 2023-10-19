"use client";

import { useEffect, useState } from "react";
import { mockProductList } from "../mockProduct";
import ListForm from "./ListForm";
import CartItem from "./CartItem";

interface CartType extends ProductType {
  quantity: number;
}

const OldCode = () => {
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [cartList, setCartList] = useState<CartType[]>([]);

  useEffect(() => {
    (() => {
      setProductList(mockProductList);
    })();
  }, []);

  const addToCart = (product: ProductType) => {
    const findIndex = cartList.findIndex((i) => i.id === product.id);

    if (findIndex !== -1) {
      const addProduct = {
        ...cartList[findIndex],
        quantity: cartList[findIndex].quantity + 1,
      };

      setCartList((i) => i.map((j) => (j.id === product.id ? addProduct : j)));
      return;
    }

    setCartList((i) => [...i, { ...product, quantity: 1 }]);
  };

  const removeProduct = (product: ProductType) => {
    setCartList((i) => i.filter((j) => j.id !== product.id));
  };

  return (
    <div className="flex flex-col items-center mt-12">
      <h2 className="text-3xl font-bold text-center">Product List</h2>
      <p className="text-sm text-center mb-4">상품 목록</p>
      <ListForm onClick={addToCart} listItem={productList} />
      <h2 className="text-xl text-center font-bold mb-2">장바구니</h2>
      {cartList.map((cartProduct) => (
        <CartItem key={cartProduct.id} onClick={removeProduct} cartProduct={cartProduct} />
      ))}
    </div>
  );
};

export default OldCode;
