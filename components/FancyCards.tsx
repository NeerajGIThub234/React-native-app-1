import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style = {styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
            source={{
                uri:'https://static.india.com/wp-content/uploads/2017/03/Tourist-Places.jpg?impolicy=Medium_Resize&w=1200&h=800'
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>INDIA</Text>
            <Text style={styles.cardLabel}>Most Famous Tourist Places in India</Text>
            <Text style={styles.cardDescription}>India has a host of popular tourist destinations for travelers from all over the world, and here we list the 10 most famous ones.</Text>
            <Text style={styles.cardFooter}>Please Visit Here 💕!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card:{
        width : 380,
        height : 350,
        borderRadius: 6,
        marginHorizontal: 16,
        marginVertical :12
    },
    cardElevated:{
        backgroundColor :"#000000",
        elevation : 3,
        shadowOffset:{
            width : 1,
            height: 1,
           },
    },
    cardImage:{
        width: 370,
        height: 180,
        marginBottom :8,
        marginLeft :4,
        marginTop:4,
        borderTopRightRadius : 6,
        borderTopLeftRadius : 6
    },
    cardBody:{
        flex:1,
        flexGrow :1,
        paddingHorizontal :12
    },
    cardTitle:{
        color: '#FFFFFF',
        fontSize :22,
        fontWeight : 'bold',
        marginBottom : 6
    },
    cardLabel:{
        color: '#FFFFFF',
        fontSize : 14,
        marginBottom : 6
    },
    cardDescription:{
        color: '#758283',
        fontSize : 12,
        marginBottom : 12,
        marginTop :6,
        flexShrink : 1
    },
    cardFooter:{
        color: '#FFFFFF',
    },
});