import Product from "@/models/product/Product";

interface Props {
  listItem: Product[];
  onClick: (product: Product) => void;
}

const ListForm = ({ listItem, onClick }: Props) => {
  return (
    <>
      {listItem.map((product) => (
        <div
          data-testid={"product"}
          key={product.productId}
          onClick={() => onClick(product)}
          className="flex space-x-2 items-center mb-4 cursor-pointer"
        >
          <img className="w-[100px] rounded-3xl" src={product.thumbnail} alt="thumbnail" />
          <div key={product.productId}>
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-sm">{product.description}</p>
            <p className="text-sm">{product.priceFormat()}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListForm;
