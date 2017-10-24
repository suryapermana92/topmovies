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
        borderWidth: 5,
		borderRadius: 2,
		borderColor: 'white',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        shadowColor: 'yellow',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 1,
		shadowRadius: 10,
        elevation: 10
    }
}

export default Card;
