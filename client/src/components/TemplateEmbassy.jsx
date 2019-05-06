import React, { Component } from 'react'
import EmbassyImg from './EmbassyImg.jsx';


export default class TemplateEmbassy extends Component {

  constructor(props) {
        super(props)
        this.state = {   
        }
        
        // this.src = `https://s3-us-west-1.amazonaws.com/mvp-sprint/${this.props.nameOfCity}.jpg`
  }

  render() {
    let {classPost, src, nameOfCity, boss, cost} = this.props;
    return (
      <div> 
         <EmbassyImg nameOfCity={nameOfCity} classPost={classPost} boss={boss} cost={cost} src={src}/>
      </div>
    )
  }
}


