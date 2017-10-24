import React, { Component } from 'react';
import { View, Text } from 'react-native';


const Card = (props) => {
    return (
        <View style={styles.cardStyle}>
            {props.children}
            </View>
    )

}
const styles = {
    cardStyle: {
        backgroundColor: '#f8fccf',
        borderWidth: 10,
		borderRadius: 2,
		borderColor: 'white',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        shadowColor: '#000',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.7,
		shadowRadius: 2,
        elevation: 10
    }
}

export default Card;
