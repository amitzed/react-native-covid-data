import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const DataDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{result.Country}</Text>
      <Text style={styles.dataTitleStyle}>
        <Text>New Confirmed:&nbsp;</Text>
        <Text style={styles.dataDetailStyle}>{result.NewConfirmed}</Text>
      </Text>
      <Text style={styles.dataTitleStyle}>
        <Text>Total Confirmed:&nbsp;</Text>
        <Text style={styles.dataDetailStyle}>{result.TotalConfirmed}</Text>
      </Text>
      <Text style={styles.dataTitleStyle}>
        <Text style={styles.actionStyle}>* Tap for more details</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 190,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    marginRight: 7,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  titleStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 17,
    padding: 7,
    backgroundColor: '#fe9677'
  },
  dataTitleStyle: {
    fontWeight: '500',
    fontSize: 13,
    marginBottom: 8
  },
  dataDetailStyle: {
    color: 'red'
  },
  actionStyle: {
    fontSize: 10,
    color: '#F64668'
  }
});

export default DataDetail;
