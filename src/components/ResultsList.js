import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsList = ({ heading, results }) => {
  return (
    <View>
      <Text style={styles.headingStyle}>{heading}</Text>
      <Text>Results: {results.length}</Text>
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
