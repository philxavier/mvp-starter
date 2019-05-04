import React, { Component } from 'react';
import SimpleMap from './SimpleMap.jsx';
import SearchBar from './OtherComponents/SearchBar.jsx';
import SideBar from '../components/OtherComponents/SideBar.jsx'
import MapContainer from './MapContainer.jsx'
export default class App extends Component {
  render() {
    return (
      <div id="container">
        <SearchBar />
        <SideBar />
        <SimpleMap />
        {/* <MapContainer /> */}
      </div>
    )
  }
}
