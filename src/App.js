import React, { Component } from 'react';
import './App.css';
// import ReactMapGl, { Marker, Popup, NavigationControl } from 'react-map-gl';
import Map from './components/Map';

// const API_KEY = 'pk.eyJ1IjoicGFwYW51Z2dldCIsImEiOiJjamxsNW12NHUwdHdsM2tuN3YwcmhsOGxmIn0.ihrjyIuDCgAtDNpU4xeSSA';

// const navStyle = {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   padding: '10px'
// }

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
        trackResize: true,
        mapStyle: 'mapbox://styles/papanugget/cjmgg0t0t55132rmx337gobe2',
        interactive: true,
        containerStyle: {
          height: '100vh',
          width: '100vw'
        }
      },
      popupInfo: null
    };
  }
  render() {
    // const {viewport} = this.state;
    return (
        // <ReactMapGl 
        //   interactive={true}
        //   mapboxApiAccessToken={API_KEY}
        //   {... viewport}
        //   onViewportChange={(viewport) => this.setState(viewport)}>
        //   <div className="nav" style={navStyle}>
        //    <NavigationControl />
        //   </div>
        //   </ReactMapGl>
        <Map viewport={this.state.viewport}/>
    );
  }
}

export default App;
