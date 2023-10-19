import Product from "../product/Product";

export type CartType = {
  product: Product;
  quantity: number;
};

export default class Cart {
  readonly items: CartType[] = [];

  constructor({ items = [] }: { items?: CartType[] } = {}) {
    this.items = items;
  }

  addProduct(product: Product) {
    const findIndex = this.items.findIndex((cart) => cart.product.productId === product.productId);

    if (findIndex !== -1) {
      return this.editQuantity(product.productId);
    }

    return new Cart({
      items: [
        ...this.items,
        {
          product,
          quantity: 1,
        },
      ],
    });
  }

  editQuantity(id: string, isUpQuantity: Boolean = true) {
    const findIndex = this.items.findIndex((cart) => cart.product.productId === id);
    if (findIndex !== -1) {
      if (isUpQuantity) {
        this.items[findIndex].quantity += 1;
      } else {
        this.items[findIndex].quantity -= 1;
      }
    }
    return new Cart({ items: this.items });
  }

  totalCount() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  removeProduct(productId: string): Cart {
    const newItems = this.items.filter((item) => item.product.productId !== productId);
    return new Cart({ items: newItems });
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  getItems(): CartType[] {
    return this.items;
  }
}
