import {
  decrement,
//   increment,
  incrementAsync,
//   incrementByAmount,
} from "../state/counter/counterSlice";
import type { AppDispatch, RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
        {/* <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment
        </button> */}
        {/* <button onClick={()=>dispatch(increment())}>Increment</button> */}
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}
