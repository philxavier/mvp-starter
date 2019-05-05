import React, { Component } from 'react';
import SimpleMap from './SimpleMap.jsx';
import SearchBar from './OtherComponents/SearchBar.jsx';
import SideBar from '../components/OtherComponents/SideBar.jsx'


export default class App extends Component {

  
  constructor(props) {
    super(props)
    this.state = {
      classOfPost:[],
      type:[]
    }

    this.handleSwitchClassChange = this.handleSwitchClassChange.bind(this)
  }

  handleSwitchClassChange(inputClassOfPost) {
    //let's see if that class of post is inside this.state.classOfPost
    //if it is, let's remove it, if not, let's include it 
    let newClassOfPost = this.state.classOfPost.slice();

    if (newClassOfPost.includes(inputClassOfPost)) {
      let indexOfInput = newClassOfPost.indexOf(inputClassOfPost);
      newClassOfPost.splice(indexOfInput, 1);
    } else {
      newClassOfPost.push(inputClassOfPost);
    }
    
    this.setState({
      classOfPost: newClassOfPost
    })

  }

  render() {

    return (
      <div id="container">
        <SearchBar />
        <SideBar handleSwitchClassChange={this.handleSwitchClassChange}/>
        <SimpleMap />
        {/* <MapContainer /> */}
      </div>
    )
  }
}
