import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import ConsulateImg from './ConsulateImg.jsx';

export default class TemplateConsulate extends Component {

  constructor(props) {
        super(props)
          
        
        
        this.src =`https://s3-us-west-1.amazonaws.com/mvp-sprint/${this.props.nameOfCity}.jpg`
  }
        
  

  render() {
    let {classPost, nameOfCity, boss, cost} = this.props;
    return (
      <div> 
         <ConsulateImg nameOfCity={nameOfCity} classPost={classPost} boss={boss} cost={cost} src={this.src}/>
      </div>
    )
  }
}


