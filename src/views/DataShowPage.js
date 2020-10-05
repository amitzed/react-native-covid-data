import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import moment from 'moment'

import covidapi from '../api/covidapi';

const DataShowPage = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const slug = navigation.getParam('Slug');
  const country = navigation.getParam('Country');
  const newConfirmed = navigation.getParam('NewConfirmed');
  const totalConfirmed = navigation.getParam('TotalConfirmed');
  const newDeaths = navigation.getParam('NewDeaths');
  const totalDeaths = navigation.getParam('TotalDeaths');
  const newRecovered = navigation.getParam('NewRecovered');
  const totalRecovered = navigation.getParam('TotalRecovered');
  const date = navigation.getParam('Date');

  // Format Date using moment()
  const dateFormat = moment(date).format('MMMM Do YYYY, h:mm:ss a');

  const getData = async (slug) => {
    // Live By Country All Status
    const response = await covidapi.get(`/live/country/${slug}`);

    setResult(response.data);
    // console.log(response.data);
  };

  useEffect(() => {
    getData(slug)
  }, []);

  if(!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingStyle}>{country}</Text>
      <FontAwesome5 name="notes-medical" style={styles.iconStyle} />
      <Text style={styles.dataTitleStyle}>
        <Text>New Confirmed:&nbsp;</Text>
        <Text style={styles.dataDetailStyle}>{newConfirmed}</Text>
      </Text>
      <Text style={styles.dataTitleStyle}>
        <Text>Total Confirmed:&nbsp;</Text>
        <Text style={styles.dataDetailStyle}>{totalConfirmed}</Text>
      </Text>
      <Text style={styles.dataTitleStyle}>
        <Text>New Deaths:&nbsp;</Text>
        <Text style={styles.dataDetailStyle}>{newDeaths}</Text>
      </Text>
      <Text style={styles.dataTitleStyle}>
        <Text>Total Deaths:&nbsp;</Text>
        <Text style={styles.dataDetailStyle}>{totalDeaths}</Text>
      </Text>
      <Text style={styles.dataTitleStyle}>
        <Text>New Recovered:&nbsp;</Text>
        <Text style={styles.dataDetailStyle}>{newRecovered}</Text>
      </Text>
      <Text style={styles.dataTitleStyle}>
        <Text>Total Recovered:&nbsp;</Text>
        <Text style={styles.dataDetailStyle}>{totalRecovered}</Text>
      </Text>
      <Text style={styles.dataTitleStyle}>
        <Text>Date:&nbsp;</Text>
        <Text style={styles.dataDetailStyle}>{dateFormat}</Text>
      </Text>
    </View>
  );;

}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#262833'
  },
  headingStyle: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#eaf6fb',
    // backgroundColor: '#fe9677',
    textDecorationLine: 'underline',
    textDecorationStyle: 'double',
    textDecorationColor: '#fe9677',
    width: '80%',
    paddingVertical: 10
  },
  iconStyle: {
    color: '#4acfac',
    fontSize: 85,
    marginVertical: 15
  },
  dataTitleStyle: {
    fontWeight: 'bold',
    fontSize: 17,
    // color: '#445571',
    color: '#4acfac',
    marginBottom: 15
  },
  dataDetailStyle: {
    color: '#d60000'
  }
});

export default DataShowPage;
