import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Image, ScrollView, Text, View, StyleSheet } from 'react-native'

export default function HomeNavigator() {
    return ( 
        <ScrollView>
            <View>
                <Image source= {require("../assets/images/mcdonald's.jpg")}
            style={styles.Image}
            resizeMode={"contain"}/>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        
    },
    Image:{

    }
});
