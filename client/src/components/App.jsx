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
        type:[],
        currentRates:[]
      },
      
    }

    this.handleSwitchClassChange = this.handleSwitchClassChange.bind(this)
    this.handleTypeChange=this.handleTypeChange.bind(this);
    this.handleBossRateChange=this.handleBossRateChange.bind(this);
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

    
    this.setState({
      filters: {
        classOfPost: newClassOfPost,
        type: this.state.filters.type,
        currentRates: this.state.filters.currentRates
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
    
    this.setState({
      filters:{
        type: newTypeOfPost,
        classOfPost: this.state.filters.classOfPost,
        currentRates:this.state.filters.currentRates
      }
    })
  }

  handleBossRateChange(inputRate) {
    //let's filter the results based on the rates currently selected;
    let newRatesArr = this.state.filters.currentRates.slice();

    if(newRatesArr.includes(inputRate)) {
      let indexOfRate = newRatesArr.indexOf(inputRate);
      newRatesArr.splice(indexOfRate, 1);
    } else {
      newRatesArr.push(inputRate);
    }

    this.setState({
      filters:{
        type: this.state.filters.type,
        classOfPost: this.state.filters.classOfPost,
        currentRates: newRatesArr
      }
    })
  }

  render() {

    let { currentRates, classOfPost, type } = this.state.filters;
    return (
      <div id="container">
        <SearchBar />
        <SideBar 
          handleSwitchClassChange={this.handleSwitchClassChange} 
          handleTypeChange={this.handleTypeChange}
          handleBossRateChange={this.handleBossRateChange}
        />
        <SimpleMap type={type} classOfPost={classOfPost} currentRates={currentRates} />
      </div>
    )
  }
}
