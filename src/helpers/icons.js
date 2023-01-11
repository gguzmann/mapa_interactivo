import markerIcon from 'leaflet/dist/images/marker-icon.png';

export const iconLocation = L.icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon,
    iconAnchor: [12, 45],
    popupAnchor: [10, -44],
})



// export const VenueLocationIcon = L.icon({
//     iconUrl: require('../assets/venue_location_icon.svg'), 
//     iconRetinaUrl: require('../assets/venue_location_icon.svg'),  
//     iconAnchor: null,
//     shadowUrl: null,
//     shadowSize: null,  
//     shadowAnchor: null,
//     iconSize: [35, 35],
//     className: 'leaflet-venue-icon'
//   });