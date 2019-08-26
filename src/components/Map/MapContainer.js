import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import API_KEY from "../../config/mapConfig";
class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: "100%",
      maxWidth: "1200px",
      height: "400px"
    };
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 10.815281, lng: 106.670981 }}
      >
        <Marker
          name={"My place"}
          position={{ lat: 10.815281, lng: 106.670981 }}
        />
      </Map>
    );
  }
}
//send notification to email
//https://pantaley.com/blog/How-to-integrate-Serverless-contact-form-using-Firebase-Cloud-functions-in-React/
export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);
