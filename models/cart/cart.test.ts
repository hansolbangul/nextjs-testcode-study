import { productMockData } from "../product/product.test";
import Cart from "./Cart";

describe("Cart Domain Test", () => {
  const duplication = "231";
  const productIds = [duplication, "12", "134", "534", duplication, "50"];

  const cart = productIds.reduce((prevCart, productId) => {
    return prevCart.addProduct(productMockData({ productId }));
  }, new Cart());

  it("카트 수량 확인하기", () => {
    const duplicationCount = cart.getItems().find((i) => i.product.productId === duplication)?.quantity;

    expect(cart.totalCount()).toBe(6);
    expect(duplicationCount).toBe(2);
  });

  it("카트 수량 줄이기", () => {
    const newCart = cart.editQuantity(duplication, false);

    const findProduct = cart.getItems().find((i) => i.product.productId === duplication);

    expect(newCart.totalCount()).toBe(5);
    expect(findProduct?.quantity).toBe(1);
  });

  it("카트 삭제하기", () => {
    const newCart = cart.removeProduct(duplication);

    expect(newCart.totalCount()).toBe(4);
    expect(newCart.getItems().find((i) => i.product.productId === duplication)).toBeUndefined();
  });

  it("금액확인", () => {
    const mockPrices = [1000, 2000, 3000, 4000, 1000, 5000];

    const newCart = productIds.reduce((prevCart, productId, index) => {
      return prevCart.addProduct(productMockData({ productId, price: mockPrices[index] }));
    }, new Cart());

    const totalPrice = mockPrices.reduce((prev, cur) => prev + cur, 0);

    expect(newCart.getTotalPrice()).toBe(totalPrice);
  });
});
