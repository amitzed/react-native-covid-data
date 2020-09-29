import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
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
    <View>
      <Text>Slug: {slug}</Text>
      <Text>Country: {country}</Text>
      <Text>New Confirmed: {newConfirmed}</Text>
      <Text>Total Confirmed: {totalConfirmed}</Text>
      <Text>New Deaths: {newDeaths}</Text>
      <Text>Total Deaths: {totalDeaths}</Text>
      <Text>New Recovered: {newRecovered}</Text>
      <Text>Total Recovered: {totalRecovered}</Text>
      <Text>Date: {dateFormat}</Text>

      {/* <FlatList
        data={recovered}
        keyExtractor={(recov) => recov}
      /> */}

    </View>
  );;

}

const styles = StyleSheet.create({});

export default DataShowPage;
