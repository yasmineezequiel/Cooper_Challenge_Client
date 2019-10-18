import React from 'react'
import {
  Input
} from 'semantic-ui-react'

const InputFields = (props) => {
  return (
    <>
        <div>
          <label>Distance</label>
          <Input type="text" placeholder="" id="distance" onChange={props.inputChangeHandler}></Input>
        </div>

        <div>
          <label>Your age</label>
          <Input type="text" placeholder="" id="age" onChange={props.inputChangeHandler}></Input>
        </div>

        <select id="gender" onChange={props.inputChangeHandler}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
    </>
  )
}

export default InputFields;