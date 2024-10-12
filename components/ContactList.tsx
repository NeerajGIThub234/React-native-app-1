import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
    const contacts= [
        {
            "uid": "1",
            "name": "John Doe",
            "status": "Active",
            "imageurl": "data:image/jpeg;base64,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"
        },
        {
            "uid": "2",
            "name": "Jane Smith",
            "status": "Inactive",
            "imageurl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            "uid": "3",
            "name": "Alice Johnson",
            "status": "Pending",
            "imageurl": "https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
        },
        {
            "uid": "4",
            "name": "Bob Brown",
            "status": "Active",
            "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpujLEUEjO1Bn0xgCMnAtoHX2zY3RF4fBeg&s"
        },
        {
            "uid": "5",
            "name": "Charlie Davis",
            "status": "Suspended",
            "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qjVFHLCeTsOn-m0vHkVmLjXLo0m7QNTFq1Vki8Hx3687B1GgjONysm021n9wKYdr5Uc&usqp=CAU"
        },
    ];
    return (
        <View>
        <Text style={styles.headingText}>Contact List</Text>
        <ScrollView 
        style={styles.container}
        scrollEnabled={false}
        >
            {contacts.map(({uid,name,status,imageurl})=>(
                <View key={uid} style={styles.userCard} >
                    <Image 
                    source={{
                        uri: imageurl
                    }}
                    style={styles.userImage}
                    />
                    <View>
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.userStatus}>{status}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:"#6AB04A",
        padding :8,
        borderRadius:10,
        width:200
    },
    userImage:{
        height:60,
        width:60,
        borderRadius: 60/2 ,//make image circle
        marginRight:14
    },
    userName:{
        fontSize:16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus:{
        fontSize:12,
        color: '#FFF'
    }
});