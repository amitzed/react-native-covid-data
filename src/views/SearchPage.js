import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import DataList from '../components/DataList';

const SearchPage = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  // console.log(
  //   results.map(res => (
  //     res.NewConfirmed
  //   ))
  // );

  // console.log(
  //   results.filter(res => (
  //     res.NewConfirmed > 200
  //   ))
  // );

  const filterByNewCases = (NewConfirmed) => {
    return results.filter(result => (
      result.NewConfirmed === NewConfirmed
    ));
  }

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
      {/* <Text>Results Found: {results.length}</Text> */}

      <Text style={styles.casesTitleStyle}>Newest Cases Confirmed</Text>
      <DataList
        results={results.filter(result => (
          result.NewConfirmed > 200
        ))}
        heading="Greater than 200"
      />
      <DataList
        results={results.filter(result => (
          result.NewConfirmed > 50 && result.NewConfirmed <= 200
        ))}
        heading="Greater than 50"
      />
      <DataList
        results={results.filter(result => (
          result.NewConfirmed <= 50
        ))}
        heading="Less Than 50"
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
