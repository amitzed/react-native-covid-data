import axios from 'axios';

export default axios.create({
  // baseURL: 'https://api.covid19api.com/live/country',
  // baseURL: 'https://api.covid19api.com/countries',
  // baseURL: 'https://api.covid19api.com/country/south-africa',
  baseURL: 'https://api.covid19api.com'
});
