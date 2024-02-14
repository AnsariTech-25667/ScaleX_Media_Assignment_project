// src/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

const HomeScreen = () => {
  // State for storing books and search query
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch books from the API on component mount
  useEffect(() => {
    axios.get('https://openlibrary.org/people/mekBot/books/already-read.json')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  // Function to toggle book status
  const toggleBookStatus = (index) => {
    // Implement logic to toggle book status
  };

  return (
    <View>
      <TextInput
        placeholder="Search books..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      <FlatList
        data={books}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => (
          <View>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: `https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg` }}
            />
            <Text>{item.title}</Text>
            <Text>{item.author}</Text>
            <Text>{item.published_year}</Text>
            <TouchableOpacity onPress={() => toggleBookStatus(index)}>
              <Text>Toggle Status</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
