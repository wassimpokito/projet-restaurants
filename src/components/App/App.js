import React, { Component } from "react";
import { withCookies } from "react-cookie";
import "./App.css";
import LoginPopup from '../LoginPopup/LoginPopup';
import MenuControl from '../MenuControl/MenuControl';
import CityMap from '../CityMap/Citymap';


class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="column">
            <MenuControl/>
  
          </div>
          <div className="column">
            <center>
              <img src="./img/AddressHubLogo.jpg" height="25px" width="25px"/>
              <b>AddressHub</b>
                <br/>
                By Kanasayrus
            </center>
          </div>
          <div className="column">
            <LoginPopup/>
          </div>
        </div>
        <div className="row">
          <hr className="gradient"></hr>
          <CityMap/>
        </div>        
      </div>
    );
  }
}

export default withCookies(App);