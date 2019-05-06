import React, { Component } from 'react'

export default class CheckboxOption extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="checkBoxContainer">
        <li className="radioClass">
          <input id="checkbox" type="checkbox" style={{marginRight: "6px"}}/>
          <label>{this.props.typeOfPost}</label>
        </li>
      </div>
    )
  }
}

