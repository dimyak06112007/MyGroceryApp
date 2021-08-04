import React, { useState } from 'react'
import { FlatList } from 'react-native';
import { TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import { Text } from 'react-native'
import { View } from "react-native"

export default function SushiyaMenu({ navigation }: { navigation: any }) {
  const [imgAndName, setimgAndName] = useState([
    {
        ImagePath: require('D:/MyAwesomeReactNativeApps/Store/scr/assets/images/SushiyaMenuImages/MakiRoll.jpg'),
        NameOfDish: 'Maki Roll',
      Prise: "75₴",
        Gram: 110
    },
    {
        ImagePath: require('D:/MyAwesomeReactNativeApps/Store/scr/assets/images/SushiyaMenuImages/Philadelphia.jpg'),
        NameOfDish: 'Philadelphia',
      Prise: "225₴",
      Gram: 290
    },
    {
      ImagePath: require('D:/MyAwesomeReactNativeApps/Store/scr/assets/images/SushiyaMenuImages/SakuraRoll.jpg'),
      NameOfDish: 'Sakura Roll',
      Prise: "180₴",
      Gram: 90
  },
    
]);

const rI = ({ item,index }: { item: any, index:any }) => (
    <TouchableOpacity style={styles.containerTouchable} onPress={() =>
        navigation.navigate("Ingredients", item)}>
    <Image resizeMode={'center'} source={item.ImagePath} style={{flex:0.7}}/>
        <View style={{justifyContent:"center", alignItems:"center"}}>
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
    flex:1,
},
Header: {
    fontSize: 30,
    textAlign: 'center',
},
Image: {
    alignSelf: 'center',
}
});
