import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Foundation } from '@expo/vector-icons';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import DataList from '../components/DataList';

const SearchPage = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterByNewCases = (NewConfirmed) => {
    return results.filter(result => (
      result.NewConfirmed === NewConfirmed
    ));
  }

  return (
    <View style={styles.mainPageStyle}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {
        errorMessage ? <Text>{errorMessage}</Text> : null
      }

      <Foundation name="results-demographics" style={styles.mainIconStyle} />
      <Text style={styles.casesTitleStyle}>Newest Cases Confirmed</Text>
      <ScrollView>
        <DataList
          results={results.filter(result => (
            result.NewConfirmed > 200
          ))}
          heading="Over 200 Cases"
        />
        <DataList
          results={results.filter(result => (
            result.NewConfirmed > 50 && result.NewConfirmed <= 200
          ))}
          heading="Over 50 Cases"
        />
        <DataList
          results={results.filter(result => (
            result.NewConfirmed <= 50
          ))}
          heading="Less Than 50 Cases"
        />
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  mainPageStyle: {
    height: '100%',
    backgroundColor: '#445571'
  },
  mainIconStyle: {
    fontSize: 75,
    textAlign: 'center',
    color: '#4acfac'
  },
  casesTitleStyle: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#eaf6fb',
    // marginVertical: 5,
    paddingBottom: 5
  }
});

export default SearchPage;
