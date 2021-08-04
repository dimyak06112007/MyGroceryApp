import React from 'react'
import { ScrollView, Text } from 'react-native'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ProductContext } from '../components/ProductContext'

export default function Cart() {
  return (

    <ScrollView>
      <View>
        <TouchableOpacity>
        <Text>hello cart</Text>
        <Text>img path 2 ''.</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

  )
}
