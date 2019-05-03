import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import EmbassyImg from './EmbassyImg.jsx';


export default class TemplateEmbassy extends Component {

  constructor(props) {
        super(props)
        this.state = {
          renderCard: false
        }

        this.category = this.props.category;
        this.nameOfCity = this.props.name;
        this.src = `https://s3-us-west-1.amazonaws.com/mvp-sprint/${this.nameOfCity}.jpg`
  }


  render() {
    return (
      <Modal trigger={<EmbassyImg/>}closeIcon>
      <Modal.Header>Profile Picture</Modal.Header>
      <Modal.Content image>
        <Image 
          wrapped size='medium' 
          src= {this.src ? this.src : `D:/Documents-in-D/Programacao/Hack-Reactor-rpt11/Practice/new-world/Img/placeHolder.jpg`}
        />
        <Modal.Description>
          <Header>Embassy of Brazil in {this.nameOfCity}</Header>
          <div style={{height:"100%", width:"35em", overflowWrap:"break-word", overflowY: "visible", textAlign:"justify"}}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Vitae purus faucibus ornare suspendisse sed nisi lacus. Arcu felis bibendum ut tristique et egestas quis. Donec ultrices tincidunt arcu non sodales. Risus commodo viverra maecenas accumsan lacus vel facilisis. Fermentum dui faucibus in ornare. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Fames ac turpis egestas integer eget aliquet nibh. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Mi proin sed libero enim sed faucibus turpis in. Fringilla phasellus faucibus scelerisque eleifend. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Quis imperdiet massa tincidunt nunc.
            </p>
          </div>     
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary>
          Ok <Icon name='right chevron' />
        </Button>
      </Modal.Actions>
    </Modal>
       
    )
  }
}


