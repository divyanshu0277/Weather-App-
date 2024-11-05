export const DEFAULT_PLACE = {
  name: 'Kolkata',
  place_id: 'kolkata',
  adm_area1: 'West Bengal',
  adm_area2: 'Kolkata',
  country: 'India',
  lat: '22.5726N',
  lon: '88.3639E',
  timezone: 'Asia/Kolkata',
  type: 'settlement',
};

export const MEASUREMENT_SYSTEMS = {
  AUTO: 'auto',
  METRIC: 'metric',
  UK: 'uk',
  US: 'us',
  CA: 'ca',
};

export const UNITS = {
  metric: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'm/s',
    visibility: 'km',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  us: {
    temperature: '°F',
    precipitation: 'in/h',
    wind_speed: 'mph',
    visibility: 'mi',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  uk: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'mph',
    visibility: 'mi',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  ca: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'km/h',
    visibility: 'km',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
};
