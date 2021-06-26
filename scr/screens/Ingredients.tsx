import { TabRouter } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ProductContext } from '../components/ProductContext';


export default function Ingredients({ route, navigation }: { route: any, navigation: any }) {

  const { ImagePath, NameOfDish, Prise } = route.params;
  const test = "now it is not empty"


  return (
    <ProductContext.Provider value={{something:'not empty'}}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image style={{ marginTop: "10%", flex: 0.7 }} resizeMode={'contain'} source={ImagePath} />
        <Text style={{ marginTop: "20%" }}>{NameOfDish}</Text>
        <TouchableOpacity style={{ backgroundColor: "yellow", flexWrap: "wrap", marginTop: "30%", borderRadius: 30, padding: 20 }}
          onPress={() => {
            navigation.navigate("McMenu")
          }}
        >
          <Text >Add to the cart</Text>
          <Text>(Prise: {Prise})</Text>
        </TouchableOpacity>
      </View>
    </ProductContext.Provider>
  )
}

