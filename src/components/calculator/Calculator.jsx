// import React from 'react'

// const Calculator = () => {
//   return (
//     <div
//       className="h-auto items-center px-20 w-[100%] xml:h-[550px] bg-cover bg-center bg-opacity-50 overflow-hidden "
//       style={{
//         backgroundImage:
//           "url(https://i0.wp.com/iodghana.org/wp-content/uploads/2019/05/background-pink-wedge-left-03.png?fit=2405%2C1469&ssl=1)",
//       }}
//     >
//       Calculator
//     </div>
//   );
// }

// export default Calculator
import "./calculator.css";
// import Button from "./Button";
import { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
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
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">
            {formatOperand(previousOperand)} {operation}
          </div>
          <div className="current-operand">{formatOperand(currentOperand)}</div>
        </div>
        <button onClick={() => dispatch({ type: ACTIONS.CLEAR, payload: {} })}>
          AC
        </button>
        <button
          onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT, payload: {} })}
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
          className="span-two"
          onClick={() => dispatch({ type: ACTIONS.EVALUATE, payload: {} })}
        >
          =
        </button>
      </div>
    </>
  );
}

export default App;
