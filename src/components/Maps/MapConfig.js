const GOOGLE_MAPS_API = import.meta.env.VITE_MAPS_KEY;
const GOOGLE_MAPS_THEME = [
  {
    featureType: "all",
    elementType: "all",
    stylers: [
      {
        invert_lightness: true,
      },
      {
        saturation: "-9",
      },
      {
        lightness: "0",
      },
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "administrative.province",
    elementType: "labels.text",
    stylers: [
      {
        color: "#00d5ff",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        saturation: "39",
      },
      {
        lightness: "-49",
      },
      {
        gamma: "10.00",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    elementType: "geometry",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text",
    stylers: [
      {
        color: "#ff0000",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "all",
    stylers: [
      {
        weight: "1.00",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "landscape.natural.landcover",
    elementType: "geometry",
    stylers: [
      {
        visibility: "simplified",
      },
      {
        saturation: "-50",
      },
      {
        lightness: "-75",
      },
      {
        gamma: "2.20",
      },
      {
        weight: "1.34",
      },
      {
        hue: "#1200ff",
      },
    ],
  },
  {
    featureType: "poi.attraction",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.business",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.place_of_worship",
    elementType: "geometry",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "poi.school",
    elementType: "geometry",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        weight: "0.49",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#fefffc",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#0020ff",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [
      {
        visibility: "on",
      },
      {
        weight: "0.01",
      },
      {
        lightness: "-7",
      },
      {
        saturation: "-35",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#62ffd0",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ff2d2d",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        hue: "#ff0000",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        visibility: "simplified",
      },
      {
        saturation: "8",
      },
      {
        lightness: "-57",
      },
      {
        gamma: "1.68",
      },
      {
        weight: "1.17",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
];

export const mapOptions = {
  googleMapApi: GOOGLE_MAPS_API,
  googleMapsTheme: GOOGLE_MAPS_THEME,
};
