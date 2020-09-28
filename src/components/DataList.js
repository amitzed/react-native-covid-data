import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import DataDetail from './DataDetail';

const ResultsList = ({ heading, results, navigation }) => {
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
            <TouchableOpacity onPress={() => navigation.navigate('DataShow')}>
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

export default ResultsList;
