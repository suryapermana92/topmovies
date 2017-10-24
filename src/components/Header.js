import React from 'react'
import { Text, View } from 'react-native'

const Header = (props) => {
    return(
    <View style={styles.containerStyle}>
    <Text style={styles.textStyle}>{props.title}</Text>
    </View>
    )
}

const styles = {
    containerStyle: {
        marginTop: 20,
        padding: 20,
        backgroundColor: 'black',


        alignItems: 'center'
        
    },
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'yellow'

    }
}
export default Header;