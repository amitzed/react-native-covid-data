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
      // setResults(response.data.Global);
      // setResults(response.data.Countries[1]);
      // setResults(response.data.Countries[1].Country);
      // setResults(response.data.Countries.map(count => {
      //   count.Country
      // }));
      // console.log(response.data.Global); // Global Stats
    } catch(err) {
      setErrorMessage('Something Went Wrong...')
    }
  };

  useEffect(() => {
    searchApi('search')
  }, []);

  return [searchApi, results, errorMessage];
};
