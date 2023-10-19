export interface ReviewType {
  id: number;
  name: string;
  content: string;
  rating: number;
}

const mockProductList: ProductType[] = [
  {
    id: 1,
    name: "상품 1",
    price: 1000,
    thumbnail: "https://via.placeholder.com/150",
    description: "상품 1 설명",
    reviews: [
      {
        id: 1,
        name: "홍길동",
        content: "상품 좋아요",
        rating: 5,
      },
      {
        id: 2,
        name: "김철수",
        content: "상품 별로",
        rating: 3,
      },
    ],
  },
  {
    id: 2,
    name: "상품 2",
    price: 2000,
    thumbnail: "https://via.placeholder.com/150",
    description: "상품 2 설명",
    reviews: [
      {
        id: 3,
        name: "김영희",
        content: "상품 별로",
        rating: 3,
      },
    ],
  },
  {
    id: 3,
    name: "상품 3",
    price: 3000,
    thumbnail: "https://via.placeholder.com/150",
    description: "상품 3 설명",
    reviews: [],
  },
];

export { mockProductList };
