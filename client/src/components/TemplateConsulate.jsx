import React, { Component } from 'react'
import ConsulateImg from './ConsulateImg.jsx';

export default class TemplateConsulate extends Component {

  constructor(props) {
        super(props)
         
  }
        
  render() {
    let {classPost, nameOfCity, boss, cost, src} = this.props;
    return (
      <div> 
         <ConsulateImg nameOfCity={nameOfCity} classPost={classPost} boss={boss} cost={cost} src={src}/>
      </div>
    )
  }
}


