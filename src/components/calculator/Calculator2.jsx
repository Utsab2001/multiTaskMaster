// import "./calculator.css";
import { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import { Link } from "react-router-dom";
//We have made an object of probable actions
export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  DELETE_DIGIT: "delete-digit",
  CLEAR: "clear",
  CHOOSE_OPERATION: "choose-operation",
  EVALUATE: "evaluate",
};
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }
      if (state.currentOperand == null) {
        return state;
      }
      if (state.currentOperand.length == 1) {
        return {
          ...state,
          currentOperand: null,
        };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };
    case ACTIONS.EVALUATE:
      if (
        state.previousOperand == null ||
        state.currentOperand == null ||
        state.operation == null
      ) {
        return state;
      }
      return {
        ...state,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
        overwrite: true,
      };
    default:
      return state;
  }
}

const evaluate = ({ previousOperand, currentOperand, operation }) => {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  let computation = "";
  if (isNaN(prev) || isNaN(current)) {
    return "";
  }
  switch (operation) {
    case "+":
      computation = prev + current;
      console.log(computation);
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
    case "%":
      computation = (prev * current) / 100;
      break;
  }
  // console.log(computation);
  return computation.toString();
};

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});
function formatOperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

function App() {
  // const [count, setCount] = useState(0);
  // const [state, dispatch] = useReducer(first, second, third)
  const [{ previousOperand, currentOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <>
      <Link to='/' className="back flex gap-1 fixed top-4 left-4 text-white cursor-pointer">
        <img src="/back.png" alt="" width={20} />
        <p>Back</p>
      </Link>
      <div
        className="flex text-white items-center justify-center sm:justify-end w-full h-[585px]  bg-cover bg-center bg-opacity-5 overflow-hidden sm:pr-16 md:pr-20 lg:pr-36"
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_8sdPnr-i0V6WT9FnI-tN4oh2yA01KAWthA&usqp=CAU)",
        }}
      >
        <div className="calculator-grid pl-2 grid justify-center mt-2  w-[260px] h-[500px] rounded-xl bg-gradient-to-b from-slate-950 to-gray-800">
          <div className="col-span-4 flex flex-col items-end justify-around p-3 break-words w-full break-all rounded-xl">
            <div className="previous-operand text-gray-300 text-lg">
              {formatOperand(previousOperand)} {operation}
            </div>
            <div className="current-operand text-2xl">
              {formatOperand(currentOperand)}
            </div>
          </div>
          <button
            className="cursor-pointer  text-md h-12 w-12 text-center font-semibold outline-none  rounded-[50%] bg-slate-800 text-pink-600"
            onClick={() => dispatch({ type: ACTIONS.CLEAR, payload: {} })}
          >
            AC
          </button>
          <button
            className="cursor-pointer text-md h-12 w-12 text-center  outline-none  rounded-[50%] bg-slate-800"
            onClick={() =>
              dispatch({ type: ACTIONS.DELETE_DIGIT, payload: {} })
            }
          >
            DEL
          </button>
          <OperationButton dispatch={dispatch} operation="%" />
          <OperationButton dispatch={dispatch} operation="÷" />
          <DigitButton dispatch={dispatch} digit="1" />
          <DigitButton dispatch={dispatch} digit="2" />
          <DigitButton dispatch={dispatch} digit="3" />
          <OperationButton dispatch={dispatch} operation="*" />
          <DigitButton dispatch={dispatch} digit="4" />
          <DigitButton dispatch={dispatch} digit="5" />
          <DigitButton dispatch={dispatch} digit="6" />
          <OperationButton dispatch={dispatch} operation="+" />
          <DigitButton dispatch={dispatch} digit="7" />
          <DigitButton dispatch={dispatch} digit="8" />
          <DigitButton dispatch={dispatch} digit="9" />
          <OperationButton dispatch={dispatch} operation="-" />
          <DigitButton dispatch={dispatch} digit="0" />
          <DigitButton dispatch={dispatch} digit="." />
          {/* <Button name="00"/> */}
          <button
            className="col-span-2 cursor-pointer text-xl h-12 w-22 text-center rounded-3xl bg-gradient-to-r from-pink-500 to-orange-500 outline-none"
            onClick={() => dispatch({ type: ACTIONS.EVALUATE, payload: {} })}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
