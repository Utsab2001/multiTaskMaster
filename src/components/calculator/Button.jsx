import React from 'react'

export default function Button(props) {
  return (
    <>
    
    <button type="button" className={props.class}         onClick={() =>
          dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })
        }>{props.name}</button>
    </>
  )
}
