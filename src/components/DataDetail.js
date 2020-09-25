import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const DataDetail = ({ result }) => {
  return (
    <View>
      <Text>{result.Country}</Text>
    </View>
  )
}

const styles = StyleSheet.create({});

export default DataDetail;
