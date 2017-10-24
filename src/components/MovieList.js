import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import MovieDetail from './MovieDetail'
import Card from './Card'


class MovieList extends Component {
    state = { database: [] }
    
      componentWillMount() {
        const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=2b0ede7cae233bdb4b16f86895d997b5&language=en-US&page=1'
        axios.get(url)
        .then(response => this.setState({ database: response.data.results }))
        }
      renderList() {
          if(this.state.database.length > 0) {
              return this.state.database.map(movies, index => {
                  return (
                      <MovieDetail  
                        movies={movies}
                        index={index}
                        key={movies.id} 
                      />
                  )
              })
          }
    
      }
    render() {
        console.log(this.state.database)
        return(
            <View>
                {this.renderList()}
                </View>
        )
    }
}

export default MovieList;