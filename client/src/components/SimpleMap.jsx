import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import google_api from '../../../google_api.js';
import TemplateConsulate from './TemplateConsulate.jsx';
import TemplateEmbassy from './TemplateEmbassy.jsx';
import TemplateMission from './TemplateMission.jsx';
import Axios from 'axios';

class SimpleMap extends Component {

  constructor(props) {
    super(props) 
    this.state = {
      fullListOfPosts: [],
      filteredListOfPosts:[]
    }
  }

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 0,

  };

  componentDidMount() {

    Axios.get('/posts')
      .then((result) => {
        console.log('these are the results', result)
          this.setState({
            fullListOfPosts:result.data
          })
        })
      .catch((err) => {
        console.log('there was an error in component did mount', err)
      })
  }

  componentDidUpdate(prevProps) {
    //if props are modified, lets filter the full list of posts and make into filtered list of posts so it can be rendered
    if(prevProps !== this.props) {
      let filters = this.props.classOfPost;
      let filteredArray = this.state.fullListOfPosts.slice();
      
      filteredArray = filteredArray.filter((ele) => {
        return filters.includes(ele.class);
      })
      console.log(filteredArray)
      this.setState({
        filteredListOfPosts:filteredArray
      })
    }
    
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

          {this.state.filteredListOfPosts.map((ele, ind) => {
            if (ele.type.includes('c')) {
              return <TemplateConsulate 
                      src={`https://s3-us-west-1.amazonaws.com/mvp-sprint/${ele.name}.jpg`}
                      key={ind} 
                      nameOfCity={ele.name} 
                      lat={ele.lat} 
                      lng={ele.lng} 
                      classPost={ele.class} 
                      cost={ele.cost} 
                      bost={ele.boss}
                      />
            
            } else if(ele.type === "e") {
              return <TemplateEmbassy
                      src={`https://s3-us-west-1.amazonaws.com/mvp-sprint/${ele.name}.jpg`}
                      key={ind} 
                      nameOfCity={ele.name} 
                      lat={ele.lat} 
                      lng={ele.lng} 
                      classPost={ele.class} 
                      cost={ele.cost} 
                      bost={ele.boss}
                      />
            } else if(ele.type ==="m") {
              
              return <TemplateMission
                      src={`https://s3-us-west-1.amazonaws.com/mvp-sprint/${ele.name}.jpg`}
                      key={ind} 
                      nameOfCity={ele.name} 
                      lat={ele.lat} 
                      lng={ele.lng} 
                      classPost={ele.class} 
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