import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Image, ScrollView, Text, View, StyleSheet, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function HomeNavigator({navigation}:{navigation : any}) {
    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView style={{flex:1 }}>

                    <TouchableOpacity style={styles.Card} onPress={()=>navigation.navigate("McMenu")}>
                        <Image source={require("../assets/images/mcdonald's.jpg")}
                            style={styles.Image}
                           resizeMode={'contain'}
                        />
                        <Text style={styles.Text}>McDonald's</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Card} onPress={()=>navigation.navigate("SushiyaMenu")}>
                        <Image source={require("../assets/images/sushiya.png")}
                            style={[styles.Image,{marginTop:"5%"}]}
                           resizeMode={'contain'}
                        />
                        <Text style={[styles.Text,{marginTop:"5%"}]}>Sushiya</Text>
                    </TouchableOpacity>                
            </ScrollView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Card: {
        alignItems:"flex-start",
        borderBottomColor:"black",
        borderBottomWidth:2,
        paddingBottom: 100,
        
    },
    Image: {
        width: "80%",
        marginStart: "10%",
        marginTop:"-30%",
        borderRadius:20,
        
    },
    Text:{
        fontSize:33,
        marginTop:"-20%",
        alignSelf:"center"
    },
});
