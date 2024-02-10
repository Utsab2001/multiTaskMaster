import React from 'react'
// import { ACTIONS } from './Calculator'
import { ACTIONS } from './Calculator2'

export default function OperationButton({dispatch,operation}) {
  return (
    <button
      type="button"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
      className="cursor-pointer text-lg h-12 w-12 text-center  outline-none  rounded-[50%] bg-slate-800"
    >
      {operation}
    </button>
  );
}
