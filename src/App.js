import { useSelector, useDispatch } from 'react-redux';
import { 
  increment,
  decrement,
  incrementBy
} from './features/counter/counterSlice';
import './App.css';

function App() {
  // useSelector will subscribe this component to any
  // changes in the store
  // Anytime state updates this component will rerender
  const count = useSelector(state => state.counter.value);

  const dispatch = useDispatch();

  // when increment button is clicked
  // fires off increment action craator
  // creating an increment action and
  // dispatching it to the increment reducer
  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleIncrementByClick() {
    dispatch(incrementBy(2));
  }

  return (
    <div className="App">
      <h1>Counter App</h1>

      <p>{count}</p>

      <button onClick={handleDecrementClick}>
        Decrement
      </button>

      <button onClick={handleIncrementClick}>
        Increment
      </button>

      <button onClick={handleIncrementByClick}>
        Increment By
      </button>
    </div>
  );
}

export default App;
