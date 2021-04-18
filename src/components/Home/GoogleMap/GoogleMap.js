import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
    marginTop: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    width: '60%',
    height: '60%',
    paddingLeft: '20x'
};



export class MapContainer extends Component {
    render() {
        return (
            <Map
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={
                {
                    lat: 23.777176,
                    lng: 90.399452
                }
            }
            />
        );
    }
    
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC-v-co4y9pTQi6MG7_d2Vx_f5yjgOmEgE'
})(MapContainer);