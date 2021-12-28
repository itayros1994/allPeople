import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 50.95,
      lng: 50.33
    },
    zoom: 11
  };

  render() {
    const { userLocation } = this.props;

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBfMQfVb9oKKZKCrkg0toAIbJ26HovmvBA" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={userLocation.latitude}
            lng={userLocation.longitude}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;



// import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 31.25,
//       lng: 32.33,
//     },
//     zoom: 10,
//   };
  
//   render() {
//     const { userLocation } = this.props;
//     console.log(userLocation);
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: "50vh", width: "100%" }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyBfMQfVb9oKKZKCrkg0toAIbJ26HovmvBA" }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent lat={userLocation.latitude} lng={userLocation.longitude} text="💥" />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;
