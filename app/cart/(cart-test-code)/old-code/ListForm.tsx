interface Props {
  listItem: ProductType[];
  onClick: (product: ProductType) => void;
}

const ListForm = ({ listItem, onClick }: Props) => {
  return (
    <>
      {listItem.map((product) => (
        <div
          data-testid={"product"}
          key={product.id}
          onClick={() => onClick(product)}
          className="flex space-x-2 items-center mb-4 cursor-pointer"
        >
          <img className="w-[100px] rounded-3xl" src={product.thumbnail} alt="thumbnail" />
          <div key={product.id}>
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-sm">{product.description}</p>
            <p className="text-sm">{Intl.NumberFormat("ko-KR").format(product.price)}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListForm;
