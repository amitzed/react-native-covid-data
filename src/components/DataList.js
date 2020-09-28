import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import DataDetail from './DataDetail';

const ResultsList = ({ heading, results }) => {
  return (
    <View>
      <Text style={styles.headingStyle}>{heading}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.Slug}
        renderItem={( {item}) => {
          return(
            <DataDetail
              result={ item }
            />
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

export default ResultsList;
