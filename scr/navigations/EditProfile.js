import React from 'react'
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../components/context';


export default function EditProfile({ navigation }) {
    const {signOut}=React.useContext(AuthContext)
    return (
        <ScrollView>
            <View style={styles.container} >
                <View style={styles.icon}>

                    <TouchableOpacity onPress={() => navigation.navigate('UploadImg')} >
                        <Image source={require('../assets/images/anonymous.jpg')}
                            style={styles.Image}
                            resizeMode={"contain"}

                        />
                    </TouchableOpacity>
                </View>


                <View style={styles.containerForInputs}>

                    <TextInput placeholder="Enter your first name"
                        style={[styles.InputText, { marginTop: "5%" }]}
                    />


                    <TextInput placeholder="Enter your last name"
                        style={
                            [styles.InputText, { marginTop: "10%" }]}
                    />
                    <TextInput placeholder="Change your password"
                        style={
                            [styles.InputText, { marginTop: "10%" }]}
                    />

                    <TouchableOpacity style={
                        [styles.InputText,
                        { marginTop: "10%", justifyContent: "center", alignItems: "center", backgroundColor: "#fed", height: "23%" }]}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            
                <TouchableOpacity style={styles.SignOut}
                onPress={()=> {signOut()}}>
                    <Text>Sign Out</Text>
                </TouchableOpacity>
            
            
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    SignOut:{
        backgroundColor:"red",
        height: 600
    },
    Image:{
        width:"100%",
        height:"90%",
        backgroundColor: "purple"
    },
    containerForInputs:{
        flexDirection: "column",
        backgroundColor:"red",
        flex:0.6,
        flexWrap:"wrap"
    },
    InputText: {
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "yellow",
        width: "80%",
        marginStart: 10,
        height: "15%"

    },
    container: {
        backgroundColor: "#fcf",
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 2,
        justifyContent: "flex-start",
        flexWrap:"wrap"
        
    },
    icon: {
        flex:0.4,
        height:"100%",
        backgroundColor:"#f3e5b4",
        justifyContent:"center"
    }
});