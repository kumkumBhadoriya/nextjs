import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./feature/productSlice";
import { addToCart } from "./feature/cartSlice";
import AddToCart from "./components/AddToCart";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const productSelector = useSelector((state) => state.products.items);
  console.log(productSelector);
  return (
    <div>
      {productSelector.length &&
        productSelector.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <h2>Category : {item.category}</h2>
            <img src={item.thumbnail} alt="" />
            <p>{item.description}</p>
            <p>Price:{item.price}</p>
            <p>Rating:{item.rating}</p>
            <button onClick={() => dispatch(addToCart(item))}>
              Add to Cart
            </button>
          </div>
        ))}
        <AddToCart/>
    </div>
  );
}
