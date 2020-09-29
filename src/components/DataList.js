import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import DataDetail from './DataDetail';

const ResultsList = ({ heading, results, navigation }) => {
  if(!results.length) {
    return null;
  }

  return (
    <View>
      <Text style={styles.headingStyle}>{heading}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.Slug}
        renderItem={( {item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('DataShow', {
                Slug: item.Slug,
                Country: item.Country,
                NewConfirmed: item.NewConfirmed,
                TotalConfirmed: item.TotalConfirmed,
                NewDeaths: item.NewDeaths,
                TotalDeaths: item.TotalDeaths,
                NewRecovered: item.NewRecovered,
                TotalRecovered: item.TotalRecovered,
                Date: item.Date,
              })}>
              <DataDetail
                result={ item }
              />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default withNavigation(ResultsList);
