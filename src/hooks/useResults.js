import { useEffect, useState } from 'react';

import covidapi from '../api/covidapi';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await covidapi.get('/summary', {
        method: 'GET',
        redirect: 'follow',
        params: {
          term: searchTerm
        },
      });

      setResults(response.data.Countries);
      console.log(response.data.Global); // Global Stats
      // console.log(response.data.Countries); // Individual COuntry Stats
      // console.log(response.data[1].Country);
      // console.log(response.data[1].Slug);
    } catch(err) {
      setErrorMessage('Something Went Wrong...')
    }
  };

  useEffect(() => {
    searchApi('search')
  }, []);

  return [searchApi, results, errorMessage];
};
