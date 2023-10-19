export default class Product {
  readonly productId: string;
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly thumbnail: string;

  constructor({
    productId,
    name,
    price,
    description,
    thumbnail,
  }: {
    productId: string;
    name: string;
    price: number;
    description: string;
    thumbnail: string;
  }) {
    this.productId = productId;
    this.name = name;
    this.price = price;
    this.description = description;
    this.thumbnail = thumbnail;
  }

  priceFormat(count: number = 1) {
    return Intl.NumberFormat("ko-KR").format(this.price * count);
  }
}
