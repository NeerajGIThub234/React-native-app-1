import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  useColorScheme
} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'light'
    return(
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.darkText : styles.whiteText }>Hello Neeraj!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        //alignItems : 'flex-end'
        alignItems : "center",
       // backgroundColor : 'lightblue',
        justifyContent : "center"
    },
    whiteText :{
        color : '#FFFFFF'
    },
    darkText :{
        color : '#000000'
    }
})

export default AppPro;