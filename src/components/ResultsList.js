import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ResultsList = ({ heading, results }) => {
  return (
    <View>
      <Text style={styles.headingStyle}>{heading}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.Slug}
        renderItem={( {item}) => {
          return(
            <Text>{item.Country}</Text>
          )
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 17,
    fontWeight: 'bold'
  }
});

export default ResultsList;
