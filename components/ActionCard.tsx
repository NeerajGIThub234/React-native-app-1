import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>About ESaral</Text>
                    <Image 
                        source={{ uri: 'https://yt3.googleusercontent.com/lKLPLCWwbiwuktxm_Bbq6n4lMa-vCWEKJ89gr_AfNR7JlrZr2LMxatDg5dWqmmcJvwOjsZGbjQ=s176-c-k-c0x00ffffff-no-rj' }}
                        style={styles.cardImage}
                    />
                </View>
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={6}>
                        eSaral is a revolutionary online learning platform that provides educational resources for students preparing for competitive exams in India, such as JEE, NEET, and other engineering and medical entrance exams. It was founded in 2018 by Prateek Gupta, Saransh Gupta, and NK Gupta with a mission to make education affordable, accessible, and thoughtful.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openWebsite('https://www.esaral.com/about/')}>
                        <Text style={styles.socialLinks}>Read More....</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://in.linkedin.com/company/esaral')}>
                        <Text style={styles.socialLinks}>Follow Us On LinkedIn!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff', 
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        width: '100%', 
        maxWidth: 380, 
        height: 'auto', 
        borderRadius: 6,
        marginHorizontal: 16,
        marginVertical: 12,
        backgroundColor: "#74B9FF",
        padding: 10, 
    },
    cardElevated: {
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#E83350',
        shadowOpacity: 0.8,
    },
    headingContainer: {
      
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#E1EFFF', // Light background color for distinction
        borderRadius: 6, // Rounded corners
        alignItems: 'center', // Center align child elements
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        elevation: 2,
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8, // Add margin below the header text
    },
    cardImage: {
        height: 100,
        width: '100%', // Make sure the image takes the full width of the card
        borderRadius: 6, // Optional: Add border radius if you want rounded corners
        marginBottom: 10, // Add margin below the image
    },
    bodyContainer: {
        padding: 10,
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    socialLinks: {
        fontSize: 16,
        color: '#0000EE',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6,
    }
});
