import React, { Component } from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.cardStyle}>
            {props.children}
            </View>
    )
}
const styles = {
    cardStyle: {
        flex: 1
    }
}
export default CardSection;
