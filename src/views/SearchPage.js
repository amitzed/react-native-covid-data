import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

const SearchPage = () => {
  const [term, setTerm] = useState('');

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
      />
      <Text>SearchPage</Text>
      <Text>{term}</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default SearchPage;
