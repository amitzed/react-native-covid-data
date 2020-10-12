import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Foundation } from '@expo/vector-icons';

import useResults from '../hooks/useResults';
import DataList from '../components/DataList';

const HomePage = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, globalResults, errorMessage] = useResults();

  const filterByNewCases = (NewConfirmed) => {
    return results.filter(result => (
      result.NewConfirmed === NewConfirmed
    ));
  }

  return (
    <View style={styles.mainPageStyle}>
      {
        errorMessage ? <Text>{errorMessage}</Text> : null
      }
      <Foundation name="results-demographics" style={styles.mainIconStyle} />
      <View style={styles.globalStatsContainer}>

        <Text style={styles.casesTitleStyle}>Global Stats</Text>

        <Text style={styles.dataTitleStyle}>
          <Text>New Confirmed:&nbsp;</Text>
          <Text style={styles.dataDetailStyle}>{globalResults.NewConfirmed}</Text>
        </Text>
        <Text style={styles.dataTitleStyle}>
          <Text>New Deaths:&nbsp;</Text>
          <Text style={styles.dataDetailStyle}>{globalResults.NewDeaths}</Text>
        </Text>
        <Text style={styles.dataTitleStyle}>
          <Text>Total Confirmed:&nbsp;</Text>
          <Text style={styles.dataDetailStyle}>{globalResults.TotalConfirmed}</Text>
        </Text>
        <Text style={styles.dataTitleStyle}>
          <Text>Total Deaths:&nbsp;</Text>
          <Text style={styles.dataDetailStyle}>{globalResults.TotalDeaths}</Text>
        </Text>
      </View>

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
    width: '90%',
    backgroundColor: '#262833',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  casesTitleStyle: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#eaf6fb',
    paddingBottom: 5
  },
  casesDataStyle: {
    color: '#eaf6fb',
    width: '100%'
  },
  dataTitleStyle: {
    fontWeight: '500',
    fontSize: 13,
    color: '#4acfac',
    marginBottom: 8
  },
  dataDetailStyle: {
    color: 'gold',
    fontWeight: 'bold'
  }
});

export default HomePage;
