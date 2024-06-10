import L from "leaflet"
import icon from "../../../assets/images/icon-location old.svg"
import './CustomIcon.css';

const CustomIcon=(url) => L.divIcon({
    html: `
      <div style="position: relative; width: 40px; height: 52px;" >
        <img src="${icon}" style="width: 100%; height: 100%;" />
        <img src="${url}" style="width: 30px; height: 30px; border-radius: 50%; position: absolute; top: 45%; left: 50%; transform: translate(-50%, -50%);" />
        </div>
    `,
    iconSize: [25, 32],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    className: 'custom-leaflet-icon' 
  });
  
  export default CustomIcon;