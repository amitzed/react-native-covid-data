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
    } catch(err) {
      setErrorMessage('Something Went Wrong...')
    }
  };

  useEffect(() => {
    searchApi('search')
  }, []);

  return [searchApi, results, errorMessage];
};
