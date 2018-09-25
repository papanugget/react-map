import React, { Component } from 'react';
import './App.css';
import ReactMapGl, { NavigationControl } from 'react-map-gl';
const API_KEY = 'pk.eyJ1IjoicGFwYW51Z2dldCIsImEiOiJjamxsNW12NHUwdHdsM2tuN3YwcmhsOGxmIn0.ihrjyIuDCgAtDNpU4xeSSA';
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        center:[-73.951274, 40.750459],
        latitude: 40.750459,
        longitude: -73.951274,
        zoom: 11.9,
        mapStyle: 'mapbox://styles/papanugget/cjmgg0t0t55132rmx337gobe2',
        containerStyle: {
          height: '100vh',
          width: '100vw'
        }
      }
    };
  }
  render() {
    const {viewport} = this.state;
    return (
        <ReactMapGl 
          // center={[-73.951274, 40.750459]}
          // width={600}
          // height={600}
          // latitude={40.750459}
          // longitude={-73.951274}
          // mapStyle="mapbox://styles/papanugget/cjmgg0t0t55132rmx337gobe2"
          mapboxApiAccessToken={API_KEY}
          // zoom={11.9}
          // containerStyle={{
          //   height: '100vh',
          //   width: '100vw'
          // }}
          {... viewport}
          onViewportChange={(viewport) => this.setState(viewport)}>
          <div className="nav" style={navStyle}>
           <NavigationControl />
          </div>
          </ReactMapGl>
          // viewport={...this.state.viewport}
          // width={400}
          // height={400}
          // latitude={37.7577}
          // longitude={-122.4376}
          // zoom={8}
          // onViewportChange={(viewport) => {
          //   const {width, height, latitude, longitude, zoom} = viewport;}}
    );
  }
}

export default App;
