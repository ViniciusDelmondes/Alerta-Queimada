import L from 'leaflet';
import fireIcon from '../../assets/chama.png';

export default L.icon({
  iconUrl: fireIcon,

  iconSize: [30, 34],
  iconAnchor: [15, 35],
  popupAnchor: [0, -60]
})