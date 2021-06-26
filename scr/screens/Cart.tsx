import React from 'react'
import { ScrollView, Text } from 'react-native'
import { View } from 'react-native'
import { ProductContext } from '../components/ProductContext'

export default function Cart() {
  return (

    <ScrollView>
      <View>
        <Text>hello cart</Text>
        <ProductContext.Consumer>
          {data => <Text>img path '{data.something}'. { console.log(data.something)}</Text>}
        </ProductContext.Consumer>
      </View>
    </ScrollView>

  )
}
