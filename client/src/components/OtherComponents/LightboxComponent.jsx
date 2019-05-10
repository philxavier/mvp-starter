import React from 'react'
import Lightbox from 'react-images'

class LightboxComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: true
    }
    // this.gotoPrevious = this.gotoPrevious.bind(this);
    // this.gotoNext = this.gotoNext.bind(this);
    // this.closeLightbox = this.closeLightbox.bind(this);
  }
  gotoPrevious() {
     //....body here
  }
  gotoNext() {
    //..body here
  }
  closeLightbox() {
    //..body here
  }
  render() {
    return (
       <div>
           <Lightbox
            images={[{ src: 'https://slidesjs.com/examples/standard/img/example-slide-1.jpg' }, { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjRGhtjx9NOUqv7uM71-cPSIfKUdTQqI87AoCuUuLMbesJDpao' }]}
            isOpen={this.state.lightboxIsOpen}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            onClose={this.closeLightbox}
          />

      </div>
    )
  }
}

export default LightboxComponent