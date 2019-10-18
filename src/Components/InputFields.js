import React from 'react'

const InputFields = (props) => {
  return (
    <>
        <div>
          <label>Distance</label>
          <input id="distance" onChange={props.inputChangeHandler}></input>
        </div>

        <div>
          <label>Your age</label>
          <input id="age" onChange={props.inputChangeHandler}></input>
        </div>

        <select id="gender" onChange={props.inputChangeHandler}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
    </>
  )
}

export default InputFields;