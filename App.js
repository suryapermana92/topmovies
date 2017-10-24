import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Header from './src/components/Header'
import MovieList from './src/components/MovieList'
import axios from 'axios'

export default class App extends Component {
  
  render() {
    return (
      <View style={{backgroundColor: 'black', flex: 1}}>
        <Header title={'IMDB Top Movies List'} />
        <ScrollView>
          <MovieList />
        </ScrollView>
      </View>
    );
  }
}