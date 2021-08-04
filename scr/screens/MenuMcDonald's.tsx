import React, { useState } from 'react'
import { FlatList } from 'react-native';
import { TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import { Text } from 'react-native'
import { View } from "react-native"

export default function McMenu({ navigation }: { navigation: any }) {
    const [imgAndName, setimgAndName] = useState([
        {
            ImagePath: require('../assets/images/menuImages/t-mcdonalds-Egg-McMuffin.jpg'),
            NameOfDish: 'Egg Muffin',
            Prise:"100₴"
        },
        {
            ImagePath: require('../assets/images/menuImages/t-mcdonalds-Chicken-McNuggets-4pc.jpg'),
            NameOfDish: 'Chicken Nuggets',
            Prise:"70₴"
        },
    ]);

    const rI = ({ item,index }: { item: any, index:any }) => (
        <TouchableOpacity style={styles.containerTouchable} onPress={() =>
            navigation.navigate("Ingredients", item)}>
            <Image resizeMode={'cover'} source={item.ImagePath} />
            <View style={{justifyContent:'center', alignItems:"center"}}>
                <Text>{item.NameOfDish}</Text>
                <Text style={{marginTop:"5%"}}>{ item.Prise}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        
            <View>
                <Text style={[styles.Header, { backgroundColor: "red" }]}>
                    Menu
                </Text>
                <View>
                    <FlatList
                        data={imgAndName}
                    renderItem={rI}
                    keyExtractor={(item,index)=>index.toString()}
                    />
                </View>
            </View>
        
    )
}



const styles = StyleSheet.create({
    containerTouchable: {
        flexDirection: 'row',
        paddingBottom: 50,
        borderColor: "yellow",
        borderBottomWidth: 4,
    },
    Header: {
        fontSize: 30,
        textAlign: 'center',
    },
    Image: {
        alignSelf: 'center',
    }
});


