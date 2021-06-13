import React, {useState} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'  
  export default function SignUp({navigation}) {
    const [email, setEmail] =  useState("")
    const [password, setPassword] = useState("");
    const [name, setName]=useState("")
   
    const [data, setData] = React.useState({
      username: '',
      password: '',
      confirm_password: '',
      check_textInputChange: false,
      secureTextEntry: true,
      confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
      if( val.length !== 0 ) {
          setData({
              ...data,
              username: val,
              check_textInputChange: true
          });
      } else {
          setData({
              ...data,
              username: val,
              check_textInputChange: false
          });
      }
  }

  const handlePasswordChange = (val) => {
      setData({
          ...data,
          password: val
      });
  }

  const handleConfirmPasswordChange = (val) => {
      setData({
          ...data,
          confirm_password: val
      });
  }

  const updateSecureTextEntry = () => {
      setData({
          ...data,
          secureTextEntry: !data.secureTextEntry
      });
  }

  const updateConfirmSecureTextEntry = () => {
      setData({
          ...data,
          confirm_secureTextEntry: !data.confirm_secureTextEntry
      });
  }

    return (
      <View style={styles.container}>
  
   
    
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="User Name"
            placeholderTextColor="#003f5c"
            onChangeText={(name) => setName(name)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
   
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View >
        <View style={styles.inputView}>
        <TextInput 
          placeholder="Confirm Your Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          style={styles.TextInput} 
          onChangeText={(val) => handleConfirmPasswordChange(val)}
          />
        </View>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} >
          <Text style={styles.forgot_button}>Have an account? Log in!</Text>
        </TouchableOpacity>
        </View>
   
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

   
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>

      </View>
    );
  }
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "yellow",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 40,
    },
   
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
   
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
    },
  });
