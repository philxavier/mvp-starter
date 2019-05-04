import React, { Component } from 'react'
import Map from './Map.jsx'; 
import Axios from 'axios';


export default class MapContainer extends Component {

  constructor(props) {
    super(props) 
    
    this.state = {
      infoPosts:[]
    };

    this.onMarkerClick = this.onMarkerClick.bind(this);
    
  }

  componentDidMount() {
    Axios.get('/posts')
    .then((result) => {
      this.setState({
        infoPosts: result.data
      })
    })
    .catch((err) => {
      console.log('there was an error', err);
    })
  }

  onMarkerClick() {
    alert('what is going ooooooooooooooon')
  }

  render() {
    return (
      <div>
        <Map
          infoPosts = {this.state.infoPosts}
          onMarkerClick = {this.onMarkerClick.bind(this)}
          // loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `567px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    )
  }
}
