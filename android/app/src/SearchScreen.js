import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import axios from 'axios';
import styles from './styles';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchBooks = () => {
    // Fetch books based on the search query
    axios.get(`https://openlibrary.org/search.json?q=${searchQuery}`)
      .then(response => setSearchResults(response.data.docs))
      .catch(error => console.error('Error searching books:', error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Enter search query"
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
      <Button title="Search" onPress={searchBooks} />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.bookContainer}>
            <Image source={{ uri: `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg` }} style={styles.bookImage} />
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchScreen;
