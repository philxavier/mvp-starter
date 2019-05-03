import { Icon, Input } from 'semantic-ui-react'
import React, { Component } from 'react'
import {World} from 'styled-icons/boxicons-regular/World'

export default class SearchBar extends Component {
  render() {
    return (
      <div id="searchbar">
        <div id="imageContainer">
          <World 
            color= "rgb(233, 82, 13)"
            size="40"
          />
          <h4 id="text-logo">Removedor</h4>
        </div>
        <div id="inputBar">
          <Input size = "large" icon={<Icon name='search' inverted circular link />} placeholder='Search...' />  
        </div>
      </div>
    )
  }
}



