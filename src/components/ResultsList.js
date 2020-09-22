import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsList = ({ heading }) => {
  return (
    <View>
      <Text style={styles.headingStyle}>{heading}</Text>
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
