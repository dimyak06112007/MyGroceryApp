import { TabRouter } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { ProductContext } from '../components/ProductContext';
import Cart from './Cart';


export default function Ingredients({ route, navigation }: { route: any, navigation: any },props:any) {

  // const { ImagePath, ,  } = route.params;

  const ImagePath = route.params.ImagePath
  const NameOfDish = route.params.NameOfDish
  const Prise = route.params.Prise

  return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image style={{ marginTop: "10%", flex: 0.7 }} resizeMode={'contain'} source={ImagePath} />
        <Text style={{ marginTop: "20%" }}>{NameOfDish}</Text>
        <TouchableOpacity style = {{backgroundColor: "yellow", flexWrap: "wrap", marginTop: "30%", borderRadius: 30, padding: 20,alignItems:"center"}}
        onPress={() => {
            navigation.goBack()
          }}
        >
          <Text >Add to the cart</Text>
          <Text>(Prise: {Prise})</Text>
        </TouchableOpacity>
      </View>
  )
}

