import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SelectAnImage from './scr/navigations/ChooseAnImg';
import EditProfile from './scr/navigations/EditProfile';
import Login from './scr/navigations/Login';
import SignUp from './scr/navigations/SignUp';
import HomeNavigator from './scr/navigations/Home';
import TryAgain from './scr/navigations/TryAgain';
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from './scr/components/context';
import McMenu from './scr/screens/MenuMcDonald\'s';
import Mc from './scr/screens/Mc';
import Ingredients from './scr/screens/Ingredients';
import SushiyaMenu from './scr/screens/SushiyaMenu';
import { Tabs } from './scr/navigations/tabs';



export default function App() {
  const Stack = createStackNavigator()
  // const [isLoading, setisLoading]=React.useState(true)
  // const [userToken, setUserToken] = React.useState(null)

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  }

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
          
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

  const authContext = React.useMemo(() => ({
    signIn: (userName, password) => {
      // setUserToken('fgkj')
      // setisLoading(false)
      let userToken;
      userToken = null;
      if (userName === 'U' && password === 'p') {
        userToken = "TokenFromDatabase"
      }
      console.log('user token', userToken)
      dispatch({ type: 'LOGIN', id: userName, token: userToken })
    },
    signOut: () => {
      // setUserToken(null)
      // setisLoading(false)
      dispatch({ type: "LOGOUT" })
    },
    signUp: () => {
      setUserToken('fgkj')
      setisLoading(false)
    }
  }), [])

  useEffect(() => {
    setTimeout(() => {
      // setisLoading(false);
      let userToken
      userToken = null // later i will then get the token from db and set userToken to its value
      console.log('user token', userToken)
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken })
    }, 1000)
  }, [])

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
        <ActivityIndicator size="large" color="grey" />
      </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>

        {loginState.userToken === null ? (
          <Stack.Navigator>
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="Home" component={HomeNavigator} />
            <Stack.Screen name="Profile" component={EditProfile} />
            <Stack.Screen name="McMenu" component={McMenu} />
            <Stack.Screen name="Loginbtn" component={TryAgain} />
            <Stack.Screen name='UploadImg' component={SelectAnImage} />
            <Stack.Screen name='McMenuJS' component={Mc} />
            <Stack.Screen name="Ingredients" component={Ingredients} />
            <Stack.Screen name="SushiyaMenu" component={SushiyaMenu} />

          </Stack.Navigator>
        )
          :
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
          </Stack.Navigator>

        }

      </NavigationContainer>
    </AuthContext.Provider>
  )
}





