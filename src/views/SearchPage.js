import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchPage = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  console.log(results);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {
        errorMessage ? <Text>{errorMessage}</Text> : null
      }
      <Text>Results Found: {results.length}</Text>
      {/* <Text>Results Found: {results.map(result => {
          return (
            result.CountryCode
          )
        })}</Text> */}
        <Text style={styles.casesTitleStyle}>Newest Cases Confirmed</Text>
        <ResultsList
          heading="Greater than 100"
        />
        <ResultsList
          heading="Greater than 50"
        />
        <ResultsList
          heading="Below 50"
        />
    </View>
  )
};

const styles = StyleSheet.create({
  casesTitleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5
  }
});

export default SearchPage;
