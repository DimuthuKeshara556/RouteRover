import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import icon from "../../Components/Map/Icons/icon"
import CustomIcon from "../../Components/Map/Icons/CustomIcon"


// function MapComponent({hikersValue}) {
//     const myIcon = CustomIcon(hikersValue);
//     const position = [51.505, -0.09]; // Initial position of the map
//     const points = [
//       [51.505, -0.09], // Point 1
//       [51.51, -0.1],   // Point 2
//       [51.51, -0.12],  // Point 3
//       [51.49, -0.12],  // Point 4
//       [51.49, -0.09]   // Point 5
//     ];
  
//     return (
//       <MapContainer center={position} zoom={13} className="w-full h-[80vh] md:h-[70vh] rounded-3xl  -z-10">
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <Polyline pathOptions={{ color: 'red' }} positions={points} />
//         <Marker position={points[0]} icon={hikersValue === 0 ? icon : myIcon}>
//         <Popup>Start Point</Popup>
//       </Marker>
//       <Marker position={points[points.length - 1]} icon={icon}>
//         <Popup>End Point</Popup>
//       </Marker>
//       </MapContainer>
//     );
//   }
  
//   export default MapComponent;

  

import dataSets from '../Map/data';

function MapComponent({ hikersValue}) {
  const position = [7.2563578, 80.6276345]; // Initial position of the map

  return (
    <MapContainer center={position} zoom={13} className="w-full h-[80vh] md:h-[70vh] rounded-3xl  -z-10">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {dataSets.slice(0, hikersValue).map((data) => (
        <div key={data.id}>
          <Polyline pathOptions={{ color: 'blue' }} positions={data.points} />
          <Marker position={data.startLocation} icon={hikersValue === 1 ? icon(data.profile) : CustomIcon(hikersValue)}>
            <Popup>Start Point</Popup>
          </Marker>
          <Marker position={data.points[data.points.length - 1]} icon={icon(data.profile)}>
            <Popup>End Point</Popup>
          </Marker>
        </div>
      ))}
      {/* <Marker position={dataSets[0].startLocation} icon={hikersValue === 0 ? icon : CustomIcon(hikersValue)}>
        <Popup>Start Point</Popup>
      </Marker>
      <Marker position={dataSets[dataSets.length - 1].points[dataSets[dataSets.length - 1].points.length - 1]} icon={icon}>
        <Popup>End Point</Popup>
      </Marker> */}
    </MapContainer>
  );
}

export default MapComponent;
