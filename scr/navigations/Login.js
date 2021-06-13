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
import { AuthContext } from '../components/context';
import IsLoginRight from './IsLoginRight';
const InputEmail =()=> {};
const InputPassword =()=> {};

export default function Login({navigation}) {

const {signIn}=React.useContext(AuthContext)

const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
});

const textInputChange = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false,
            isValidUser: false
        });
    }
}

const handlePasswordChange = (val) => {
    if( val.trim().length >= 8 ) {
        setData({
            ...data,
            password: val,
            isValidPassword: true
        });
    } else {
        setData({
            ...data,
            password: val,
            isValidPassword: false
        });
    }
}

const loginHandle = (username,password)=>{
    signIn(username,password)
}

const handleValidUser = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            isValidUser: false
        });
    }
}


return (
    <View style={styles.container}>

    <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="User Name"
        placeholderTextColor="#003f5c"
        onChangeText={(val)=>textInputChange(val)}
        onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
        />
    </View>

    <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="Password"
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(val)=> handlePasswordChange(val)}
        />
    </View>
    <View>
    <TouchableOpacity onPress={() => navigation.navigate('SignUp') } >
        <Text style={styles.forgot_button}>Don't have an account? Sign up!</Text>
    </TouchableOpacity>
    </View>

    <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
    </TouchableOpacity>


    <TouchableOpacity style={styles.loginBtn}
    onPress={()=>{loginHandle(data.username, data.password)}}
    
    >
        <Text style={styles.loginText}>LOGIN</Text>

    </TouchableOpacity>

    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "green",
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





