import { useSelector } from "react-redux";

export default function AddToCart() {
  const cartSelector = useSelector((state) => state.cart.items);
  return (
    <div>
      <span>{cartSelector.length ? cartSelector.length : 0}</span>
    </div>
  );
}
