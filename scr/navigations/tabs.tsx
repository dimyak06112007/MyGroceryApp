import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './Home';
import EditProfile from './EditProfile';
import Cart from '../screens/Cart';
import { ImageEditor, StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';


const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: "#fab",
          borderRadius: 15,
          height: 90,
          ...styles.shadow
        }
      }}
    >
      <Tab.Screen name="Home" component={HomeNavigator}
        
        options={{
          
          tabBarIcon: ({ focused }) => {
            return(
            
              <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                <Image source={require('../assets/images/navigation/vectorHome.png')} resizeMode={'contain'} style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}>

                </Image>
                <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>HOME</Text>
              </View>
            )
          }
        }}
      />
      <Tab.Screen name="Cart" component={Cart}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                    <Image source={require('../assets/images/navigation/Cart5.png')} resizeMode={'contain'} style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#e32f45' : '#748c94',
                    }}>
      
                    </Image>
                    <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>CART</Text>
                  </View>
                )
              }}
      />
      <Tab.Screen name="EditProfile" component={EditProfile}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                    <Image source={require('../assets/images/navigation/prVec.png')} resizeMode={'contain'} style={{
                      width: 25,
                      height: 25,
                      tintColor: focused ? '#e32f45' : '#748c94',
                    }}>
      
                    </Image>
                    <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>SETTINGS</Text>
                  </View>
                )
              }}
      />

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'yellow',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,

  },
});

