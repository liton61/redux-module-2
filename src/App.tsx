// import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
// import { RootState } from "./redux/store";


function App() {

  const {count} = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch();

  return (
    <div  className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center border gap-5 p-10 rounded bg-slate-100">
        <button onClick={() => dispatch(increment())} className="bg-green-600 font-semibold text-xl text-white p-3 rounded">Increment</button>
        <h1 className="text-2xl font-semibold">{count}</h1>
        <button onClick={() => dispatch(decrement())} className="bg-red-600 font-semibold text-xl text-white p-3 rounded">Decrement</button>
      </div>
    </div>
  )
}

export default App
