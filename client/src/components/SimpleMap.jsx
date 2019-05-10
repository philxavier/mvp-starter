import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import google_api from '../../../google_api.js';
import TemplateConsulate from './TemplateConsulate.jsx';
import TemplateEmbassy from './TemplateEmbassy.jsx';
import TemplateMission from './TemplateMission.jsx';
import Axios from 'axios';
import _ from 'underscore'


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
      let filterOfClass = this.props.classOfPost;
      let filterOfType = this.props.type
      console.log('filterofClass', filterOfClass)
      console.log('filterOfType', filterOfType)
      let filteredArray = this.state.fullListOfPosts.slice();

      let filterByClass = (listOfPosts) => {
        return listOfPosts.filter((ele) => {
          return filterOfClass.includes(ele.class);
        })
      }

      let filterByType = (listOfPosts) => {
        let result = [];
        for (let i = 0; i < listOfPosts.length; i++) {
          if (listOfPosts[i].type === 'cg' || listOfPosts[i].type === 'vc' || listOfPosts[i].type === 'c') {
            if (filterOfType.includes('c')) {
              result.push(listOfPosts[i]);
            }
          } else if (listOfPosts[i].type === 'e') {
            if (filterOfType.includes('e')) {
              result.push(listOfPosts[i]);
            }
          } else {
            if(filterOfType.includes('o')) {
              result.push(listOfPosts[i]);
            }
          }
        }
        return result;
      }

      let filteredByType = filterByType(filteredArray);
      let filteredByClass = filterByClass(filteredArray);


      var resultArray=[];

      if (!filteredByClass.length || !filteredByType.length) {
        resultArray = _.union(filteredByClass, filteredByType);
      } else {
        resultArray = _.intersection(filteredByType, filteredByClass)
      }

      // console.log('this is filteredbytype', filteredByType);

      // console.log('this is filteredbyclass', filteredByClass);

      // console.log('this is final array', resultArray) ;
     
      this.setState({
        filteredListOfPosts:resultArray
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
                      boss={ele.boss}
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
                      boss={ele.boss}
                      />
            } else {
              return <TemplateMission
                      src={`https://s3-us-west-1.amazonaws.com/mvp-sprint/${ele.name}.jpg`}
                      key={ind} 
                      nameOfCity={ele.name} 
                      lat={ele.lat} 
                      lng={ele.lng} 
                      classPost={ele.class} 
                      cost={ele.cost} 
                      boss={ele.boss}
                      />
            }
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;