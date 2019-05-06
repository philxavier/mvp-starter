import React, { Component } from 'react'
import MissionImg from './MissionImg.jsx';

export default class TemplateMission extends Component {

  constructor(props) {
        super(props)
         
  }
        
  render() {
    let {classPost, nameOfCity, boss, cost, src} = this.props;
    return (
      <div> 
         <MissionImg nameOfCity={nameOfCity} classPost={classPost} boss={boss} cost={cost} src={src}/>
      </div>
    )
  }
}


