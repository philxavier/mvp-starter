import React, { Component } from 'react'; //Always need in JSX files
import SwitchExample from "./Switch.jsx";
import Button from "./Button.jsx"

// Create the HTML to return for the input
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     
    };
  }

  render() {

    return (
      <div className="sidebar">
        <div id="sideBarText"> 
           <h3>Filtros</h3>
        </div>
        <div id="categoria">
          <h4 id="categoriaTitle">Categoria do Posto</h4>
          <div id="containerButtonSwitch">
            <div id="containerSwitch">
              <SwitchExample />
            </div>
              <Button textValue = 'A' />
          </div>
          <div id="containerButtonSwitch">
            <div id="containerSwitch">
              <SwitchExample />
            </div>
              <Button textValue = 'B' />
          </div>
          <div id="containerButtonSwitch">
            <div id="containerSwitch">
              <SwitchExample />
            </div>
              <Button textValue = 'C' />
          </div>
          <div id="containerButtonSwitch">
            <div id="containerSwitch">
              <SwitchExample />
            </div>
              <Button textValue = 'D' />
          </div>
        </div>
      </div>
    );
  }
}

//We need to export to index.js to display
export default SideBar;