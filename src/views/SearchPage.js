import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Foundation } from '@expo/vector-icons';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import DataList from '../components/DataList';

const SearchPage = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, globalResults, errorMessage] = useResults();

  const filterByNewCases = (NewConfirmed) => {
    return results.filter(result => (
      result.NewConfirmed === NewConfirmed
    ));
  }

  return (
    <View style={styles.mainPageStyle}>
      {/* <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      /> */}

      {
        errorMessage ? <Text>{errorMessage}</Text> : null
      }

      <View style={styles.globalStatsContainer}>
        <Text style={styles.casesTitleStyle}>Global Stats</Text>

        <Text>
          <Text style={styles.globalLeft}>
            <Text>New Confirmed:&nbsp;</Text>
            <Text>{globalResults.NewConfirmed}</Text>
          </Text>
          <Text style={styles.globalRight}>
            <Text>New Deaths:&nbsp;</Text>
            <Text>{globalResults.NewDeaths}</Text>
          </Text>
        </Text>

        <Text>
          <Text style={styles.globalLeft}>
            <Text>Total Confirmed:&nbsp;</Text>
            <Text>{globalResults.TotalConfirmed}</Text>
          </Text>
          <Text style={styles.globalRight}>
            <Text>Total Deaths:&nbsp;</Text>
            <Text>{globalResults.TotalDeaths}</Text>
          </Text>
        </Text>
      </View>

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
  globalStatsContainer: {
    // height: 150,
    // width: 190,
    // backgroundColor: '#262833',
    // borderColor: 'black',
    // borderWidth: 1,
    // borderRadius: 10,
    // marginBottom: 15,
    // marginRight: 7,
    // padding: 10,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // flex: 1
  },
  globalLeft: {
    textAlign: 'left'
  },
  globalRight: {
    textAlign: 'right'
  },
  casesTitleStyle: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#eaf6fb',
    paddingBottom: 5
  }
});

export default SearchPage;
