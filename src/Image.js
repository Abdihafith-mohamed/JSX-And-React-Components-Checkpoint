import product from "./product";

function Image() {
  return <img src={product.image} alt={product.name} width="100%" />;
}

export default Image;
