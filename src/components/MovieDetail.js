import React, { Component } from 'react';
import { ImageBackground, View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import Card from './Card'
import CardSection from './CardSection'


const MovieDetail = (props) => {
    const prefixURI = 'https://image.tmdb.org/t/p/w500'
    console.log(props)
    return (
        <Card key={props.id}>
            <CardSection>
            <View style={styles.backgroundBlack}>
                    <Text style={styles.title}>{props.movies.title} (Rating: {props.movies.vote_average})</Text>
                </View>
            </CardSection>
            <CardSection>
                <ImageBackground style={{ width: '100%', height: 500 }} source={{ uri: prefixURI+props.movies.poster_path }}/>
            </CardSection>
            <CardSection>
                <View style={styles.backgroundBlack}>
                    <Text style={styles.overview}>Overview:</Text>
                    <Text style={styles.fontWhite}>{props.movies.overview}</Text>
                </View>
            </CardSection>
            <CardSection>
            
            </CardSection>
        </Card>
    )

}
const styles = {
    backgroundBlack:{
        backgroundColor:'black',
        padding: 7
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22
    },
    overview:{
        color: 'white',
        fontWeight: 'bold'
    },
    fontWhite: {
        color: 'white',
        textAlign: 'justify'
    },
    cardStyle: {
        flex: 1
    },
    topStyle: {
        
        flex: 5
    },
    namaStyle: {
        paddingTop: 5,
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
        alignItems: 'center',
        opacity: 1
    },
    lokasiStyle: {
        paddingTop: 5,
        paddingBottom: 5,
        color: 'white',
        fontSize: 12,
        marginLeft: 10,
        alignItems: 'center',
        opacity: 1
    },
    bottomStyle: {

        justifyContent: 'space-between',
        backgroundColor: 'black',
        opacity: 0.7,
        flexDirection: 'row',
        
    }
}

export default MovieDetail;
