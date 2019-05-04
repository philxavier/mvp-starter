import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import ConsulateImg from './ConsulateImg.jsx';
import { Card} from 'semantic-ui-react';



export default class TemplateConsulate extends Component {

  constructor(props) {
        super(props)
        this.state = {
          renderCard: false,
          card: false,
          classP: this.props.classP,
          nameOfCity:  this.props.name,
          boss: this.props.boss,
          cost: this.props.cost,
          src: `https://s3-us-west-1.amazonaws.com/mvp-sprint/${this.props.name}.jpg`
        }
        
        
  }

  render() {
    let { src, classP, nameOfCity, boss, cost} = this.state;
    console.log('this is src', src)
    return (
      <div> 
         <ConsulateImg nameOfCity={nameOfCity} classP={classP} boss={boss} cost={cost} src={src}/>
      </div>
    )
  }
}


