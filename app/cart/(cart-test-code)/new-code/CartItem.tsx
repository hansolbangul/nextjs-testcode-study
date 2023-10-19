import { CartType } from "@/models/cart/Cart";
import React from "react";

interface Props {
  cartProduct: CartType;
  onClick: (productId: string) => void;
}

const CartItem = ({ cartProduct, onClick }: Props) => {
  return (
    <div
      onClick={() => onClick(cartProduct.product.productId)}
      data-testid="cart-product"
      className="flex items-center border border-[#8ad393] p-4 rounded-xl mb-4 relative cursor-pointer"
    >
      <img
        className="rounded-2xl"
        width={60}
        height={60}
        src={cartProduct.product.thumbnail}
        alt={cartProduct.product.name}
      />
      <h2 className="mx-2 text-lg flex-auto">{cartProduct.product.name}</h2>
      <p>
        <span data-testid="cart-product-count">{cartProduct.quantity}</span>개
      </p>
    </div>
  );
};

export default CartItem;
