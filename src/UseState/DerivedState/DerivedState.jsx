import { useState } from "react";

const DerivedState = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "black t shirt", quantity: 1 },
    { id: 2, title: "blue Jeans", quantity: 1 },
    { id: 3, title: "kurtas", quantity: 1 },
  ]);

  const [selectedId, setSelectedId] = useState();
  const selectedProduct = products.find((p) => p.id == selectedId);

  const selectProductHandler = (id) => {
    setSelectedId(id);
  };

  const incrementHandler = (id) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });
    });
  };

  return (
    <>
      <p>
        {selectedProduct?.title} {selectedProduct?.quantity}
      </p>
      {products.map((product) => (
        <div key={product.id}>
          {product.title} {product.quantity}
          <button onClick={() => selectProductHandler(product.id)}>
            Choose
          </button>
          <button onClick={() => incrementHandler(product.id)}>+</button>
        </div>
      ))}
    </>
  );
};

export default DerivedState;
