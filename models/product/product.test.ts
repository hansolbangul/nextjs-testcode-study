import Product from "./Product";

const mockProduct = {} as Product;

export const productMockData = (data: Partial<Product>) => new Product({ ...mockProduct, ...data });

describe("Product Domain Test", () => {
  let products: Product[];

  beforeEach(() => {
    products = [];
  });

  it("값 넣어보기", () => {
    const productIds = ["123", "231", "3442"];

    products = productIds.reduce((prevProducts, productId) => {
      return [...prevProducts, productMockData({ productId })];
    }, products);

    expect(products).toHaveLength(3);
  });

  it("자리수 계산 확인하기", () => {
    const productIds = ["145", "2311", "235"];
    const priceMultiply = 1000;

    products = productIds.reduce((prevProducts, productId) => {
      return [...prevProducts, productMockData({ productId, price: Number(productId) * priceMultiply })];
    }, products);

    expect(products).toHaveLength(3);
    expect(products[0].priceFormat()).toBe("145,000");
    expect(products[1].priceFormat()).toBe("2,311,000");
    expect(products[2].priceFormat()).toBe("235,000");
  });

  it("상품 n개 가격 계산", () => {
    const productIds = ["145", "2311", "235"];
    const priceMultiply = 1000;

    products = productIds.reduce((prevProducts, productId) => {
      return [...prevProducts, productMockData({ productId, price: Number(productId) * priceMultiply })];
    }, products);

    expect(products).toHaveLength(3);
    expect(products[0].priceFormat(2)).toBe("290,000");
    expect(products[1].priceFormat(4)).toBe("9,244,000");
    expect(products[2].priceFormat(3)).toBe("705,000");
  });
});
