import "leaflet/dist/leaflet.css";
import icon from "../../Components/Map/Icons/icon"
import CustomIcon from "../../Components/Map/Icons/CustomIcon"

// import React, { useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ hikersValue }) => {
  const myIcon = CustomIcon(hikersValue);
  const position = [7.2563578, 80.6276345]; 
  return (
    <MapContainer center={position} zoom={14} scrollWheelZoom={false}  className="w-full h-[80vh] md:h-[70vh] rounded-3xl  -z-10">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker icon={hikersValue === 1 ? icon("https://images.pexels.com/photos/974266/pexels-photo-974266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") : myIcon} position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  )
}

export default Map
