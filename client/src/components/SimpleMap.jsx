import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import google_api from '../../../google_api.js';
import ListOfConsulates from  '../../../listOfConsulates.js';
import TemplateConsulate from './TemplateConsulate.jsx';
import ListOfEmbassies from '../../../listOfEmbassies.js';
import TemplateEmbassy from './TemplateEmbassy.jsx';
import Test from './OtherComponents/Test.jsx';
import Axios from 'axios';

class SimpleMap extends Component {

  constructor(props) {
    super(props) 
    this.state = {
      postInfo: [],
    }
  }

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },

    zoom: 0,

    listOfEmbassies: ListOfEmbassies

  };

  componentDidMount() {

    Axios.get('/posts')
      .then((result) => {
        console.log('results are here', result)
        this.setState({
          postInfo: result.data
        })
      })
      .catch((err) => {
        console.log('there was an error in component did mount', err)
      })
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '87vh', width: '80%', margin: '0px' }}>

        <GoogleMapReact
          bootstrapURLKeys={{ key: google_api.key}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

          {this.state.postInfo.map((ele, ind) => {
            if (ele.type !== "e") {
              return <TemplateConsulate 
                      key={ind} 
                      name={ele.name} 
                      lat={ele.lat} 
                      lng={ele.lng} 
                      classPost={ele.class} 
                      cost={ele.cost} 
                      bost={ele.boss}
                      />
            
            } else {
              return <TemplateEmbassy
                      key={ind} 
                      name={ele.name} 
                      lat={ele.lat} 
                      lng={ele.lng} 
                      category={ele.cat} 
                      cost={ele.cost} 
                      bost={ele.boss}
                      />
            }
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;