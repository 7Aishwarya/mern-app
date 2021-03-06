import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./geolocation.css";
import { Center } from "devextreme-react/map";

const mapStyles = {
  width: "100%",
  height: "98%"
};

class Map1 extends Component {
  constructor(props) {
    super();
    this.state = {
      name: ""
    };
  }

  render() {
    return (
        <Map className ="mapImgInside"
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 26.8467088,
            lng: 80.9461592
          }}
        >
          
          <Marker onClick={this.onMarkerClick} name={"This is test name"} />
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBYNepLgidm7EgZKRHh9umjG8WtSnXDbiw"
})(Map1);
