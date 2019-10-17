Import React from 'react'

const InputFields = (props) => {
  return (
    <>
        <label>Distance</label>
        <input id="distance" onChange={this.onChange.bind(this)}></input>

        <select id="gender" onChange={this.onChange.bind(this)}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>

        <label>Age</label>
        <input id="age" onChange={this.onChange.bind(this)}></input>
    </>
  )
}

export default InputFields;