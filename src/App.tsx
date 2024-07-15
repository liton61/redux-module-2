import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const  count  = useSelector((state:string) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center border gap-5 p-10 rounded bg-slate-100">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-600 font-semibold text-xl text-white p-3 rounded"
        >
          Increment
        </button>
        <h1 className="text-2xl font-semibold">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-600 font-semibold text-xl text-white p-3 rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
