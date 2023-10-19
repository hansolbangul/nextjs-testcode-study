import { act, fireEvent, getByTestId, render } from "@testing-library/react";
import NewCode from "./page";

describe("old-code test", () => {
  it("product를 클릭해서 장바구니에 담는다.", async () => {
    const { getAllByTestId, getByTestId } = render(<NewCode />);

    const products = getAllByTestId("product");
    expect(products).toHaveLength(3);

    await act(async () => {
      fireEvent.click(products[0]);
    });

    const cartProduct = getByTestId("cart-product");
    const cartProductCount = getByTestId("cart-product-count");
    expect(cartProduct).toBeInTheDocument();
    expect(cartProductCount).toHaveTextContent("1");
  });

  it("장바구니 하나의 상품 2개 클릭", () => {
    const { getAllByTestId, getByTestId } = render(<NewCode />);

    const products = getAllByTestId("product")[0];

    fireEvent.click(products);
    fireEvent.click(products);

    const cartProducts = getByTestId("cart-product-count");
    expect(cartProducts.textContent).toBe("2");
  });

  it("상품 제거하기", () => {
    const { getAllByTestId, getByTestId } = render(<NewCode />);

    const products = getAllByTestId("product")[0];

    fireEvent.click(products);
    fireEvent.click(products);

    const cartItem = getByTestId("cart-product");

    fireEvent.click(cartItem);

    expect(cartItem).not.toBeInTheDocument();
  });
});
