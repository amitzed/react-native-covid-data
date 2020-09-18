import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange }) => {
  return (
    <View style={styles.bgStyle}>
      <FontAwesome name="search" style={styles.iconStyle} />
      <TextInput
        placeholder="Search by Country"
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  bgStyle: {
    backgroundColor: '#FE9677',
    height: 50,
    marginHorizontal: 15,
    borderRadius: 7,
    flexDirection: 'row',
    marginTop: 10
  },
  iconStyle: {
    fontSize: 25,
    marginHorizontal: 15,
    alignSelf: 'center'
  },
  inputStyle: {
    fontSize: 20,
    flex: 1
  }
});

export default SearchBar;
