import React, { Component } from 'react';
import SimpleMap from './SimpleMap.jsx';
import SearchBar from './OtherComponents/SearchBar.jsx';
import SideBar from '../components/OtherComponents/SideBar.jsx'
export default class App extends Component {

  
  constructor(props) {
    super(props)
    this.state = {
      filters:{
        classOfPost:[],
        type:[]
      },
      
    }

    this.handleSwitchClassChange = this.handleSwitchClassChange.bind(this)
    this.handleTypeChange=this.handleTypeChange.bind(this);
  }

  handleSwitchClassChange(inputClassOfPost) {
    //let's see if that class of post is inside this.state.filters.classOfPost
    //if it is, let's remove it, if not, let's include it 
    let newClassOfPost = this.state.filters.classOfPost.slice();

    if (newClassOfPost.includes(inputClassOfPost)) {
      let indexOfInput = newClassOfPost.indexOf(inputClassOfPost);
      newClassOfPost.splice(indexOfInput, 1);
    } else {
      newClassOfPost.push(inputClassOfPost);
    }

    console.log('this is newclasofpost', newClassOfPost)
    
    this.setState({
      filters: {
        classOfPost: newClassOfPost,
        type: this.state.filters.type
      }
    })

  }

  handleTypeChange(inputType) {
    //let's see if that class of post is inside this.state.filters.type
    //if it is, let's remove it, if not, let's include it 

    let newTypeOfPost = this.state.filters.type.slice();

    if (newTypeOfPost.includes(inputType)) {
      let indexOfInput = newTypeOfPost.indexOf(inputType);
      newTypeOfPost.splice(indexOfInput, 1);
    } else {
      newTypeOfPost.push(inputType);
    }

    console.log(newTypeOfPost)
    
    this.setState({
      filters:{
        type: newTypeOfPost,
        classOfPost: this.state.filters.classOfPost
      }
    })
  }

  render() {
    let { classOfPost, type } = this.state.filters;
    return (
      <div id="container">
        <SearchBar />
        <SideBar handleSwitchClassChange={this.handleSwitchClassChange} handleTypeChange={this.handleTypeChange}/>
        <SimpleMap type={type} classOfPost={classOfPost} />
        {/* <MapContainer /> */}
      </div>
    )
  }
}
