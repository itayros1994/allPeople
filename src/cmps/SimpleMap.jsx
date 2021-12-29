import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 35.755,
			lng: 34.255
		},
		zoom: 16
	};

	render() {
		const { userLocation } = this.props;

		const center = {
			lat: parseFloat(userLocation.latitude),
			lng: parseFloat(userLocation.longitude)
		};

		return (
			// Important! Always set the container height explicitly
			<div style={{ height: '50vh', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyBfMQfVb9oKKZKCrkg0toAIbJ26HovmvBA' }}
					defaultCenter={center}
					center={center}
					defaultZoom={this.props.zoom}
				>
					<AnyReactComponent lat={center.lat} lng={center.lng} text="🚩" />
				</GoogleMapReact>
			</div>
		);
	}
}

export default SimpleMap;
