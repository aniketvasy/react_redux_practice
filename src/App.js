import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum, editNum, multiNum } from "./actions/index.js";
function App() {
  const changeTheNumber = useSelector((state) => state.changeTheNumber);
  const multiPlyTheNumber = useSelector((state) => state.multiPlyTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="container">
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div className="quantity">
            <a
              className="quantity__minus"
              title="Decrement"
              onClick={() => dispatch(decNum())}
            >
              <span>-</span>
            </a>
            <input
              name="quantity"
              type="text"
              className="quantity__input"
              value={changeTheNumber}
              onChange={(e) => dispatch(editNum(e.target.value))}
            />
            <a
              className="quantity__plus"
              title="Increment"
              onClick={() => dispatch(incNum(5))}
            >
              <span>+</span>
            </a>
            <a
              className="quantity__plus"
              title="Increment"
              onClick={() => dispatch(multiNum(5))}
            >
              <span>+</span>
            </a>
            <input
              name="quantity"
              type="text"
              className="quantity__input"
              value={multiPlyTheNumber}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
