import React, { Component } from 'react'
import { Image, Popup } from 'semantic-ui-react'
import { Header,  Modal } from 'semantic-ui-react'

const PlaceHolder = ({...rest }) => (
  <div style={{width:"22px", height:"27px", position:"absolute", zIndex:"2"}}{...rest }></div>
)

const ModalComponent = (props) => (
   
    <Modal onClose={() => {props.handleMouseLeave()}} trigger={<PlaceHolder />}closeIcon>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={props.src} />
      <Modal.Description>
        <Header>Delegation of Brazil in {props.nameOfCity}</Header>
        <div style={{height:"100%", width:"35em", overflowWrap:"break-word", overflowY: "visible", textAlign:"justify"}}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Vitae purus faucibus ornare suspendisse sed nisi lacus. Arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales. Risus commodo viverra maecenas accumsan lacus vel facilisis. Fermentum dui faucibus in ornare. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Fames ac turpis egestas integer eget aliquet nibh. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Mi proin sed libero enim sed faucibus turpis in. Fringilla phasellus faucibus scelerisque eleifend. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Quis imperdiet massa tincidunt nunc.
            </p>
        </div>     
      </Modal.Description>
    </Modal.Content>
  </Modal>
  
)

export default class consulateImg extends Component {
  constructor(props) {
    super(props) 
    this.state={
      card: false,
      placeHolder:false
    }

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }


  handleMouseEnter() {
    this.setState({
      placeHolder: !this.state.placeHolder
    })
  }

  handleMouseLeave() {
    this.setState({
      placeHolder: !this.state.placeHolder
    })
  }

  render() {
    let {src, nameOfCity, boss, cost, classPost} = this.props
    return (
      <div>
        <div id="imgContainer" 
             className="consulateStyle grow" 
             onMouseEnter = {this.handleMouseEnter}
             onMouseLeave = {this.handleMouseLeave}
        >
        
        {this.state.placeHolder ? <ModalComponent src={src} nameOfCity={nameOfCity} boss={boss} cost={cost} classPost={classPost}handleMouseLeave={this.handleMouseLeave}/> : null}
          <img id="consulateImg" onClick={this.handleClick} 
               src="https://s3-us-west-1.amazonaws.com/mvp-sprint/Mission.png" 
               alt="" 
               height="27" 
               width="22"
           /> 
        </div>
      </div>
    )
  }
}
