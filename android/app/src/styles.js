// src/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  bookContainer: {
    marginBottom: 20,
  },
  bookImage: {
    width: 50,
    height: 50,
  },
  toggleButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  toggleButtonText: {
    color: 'white',
  },
});

export default styles;
