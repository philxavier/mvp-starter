import React from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import testComponent from './testComponent.jsx'

const MyMapComponent = withGoogleMap((props) =>


  <GoogleMap
    defaultZoom={2}
    defaultCenter={{ lat: 29.76328, lng: -95.3698}}
  >
    {/* {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />} */}

    {
      props.infoPosts.map((item, ind) =>
            <Marker
              onClick={props.onMarkerClick}
              key={ind}
              name={item.name}
              options={{icon:{url:"https://s3-us-west-1.amazonaws.com/mvp-sprint/Consulate.png", scaledSize: { width: 20, height: 25}}}}
              // title={item.name}
              // name={item.name}
              position={{ lat: item.lat, lng: item.lng }}
            >
              <InfoWindow

              >

              </InfoWindow>
            </Marker>
            
      )
    }
   
  </GoogleMap>
)

export default MyMapComponent;