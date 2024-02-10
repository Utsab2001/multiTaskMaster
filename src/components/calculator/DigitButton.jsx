import React from "react";
import { ACTIONS } from "./Calculator2";
// import { ACTIONS } from "./Calculator";

export default function DigitButton({ dispatch, digit }) {
  return (
    <>
      <button
        type="button"
        onClick={() =>
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })
        }
        className="cursor-pointer text-lg h-12 w-12 text-center  outline-none  rounded-[50%] bg-slate-800"
      >
        {digit}
      </button>
    </>
  );
}
