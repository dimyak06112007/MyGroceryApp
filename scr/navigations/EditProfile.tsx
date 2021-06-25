import React, { Context } from 'react'
import { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../components/context';
import SelectAnImage from './ChooseAnImg';
import { StateOfUriContext } from './GlobalState';




export default function EditProfile({ navigation, route }: { navigation: any, route: any }) {
    const { signOut } = React.useContext(AuthContext)
    // const { ImageUri } = route.params;
    // const ImageUriState = () => {
    //     if (ImageUri !== undefined) {

    //     }
    // }


    return (
        <ScrollView style={{ flex: 1, backgroundColor: "yellow" }}>
            <View style={{ flex: 1, backgroundColor: "purple" }}>
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


                <StateOfUriContext.Consumer>
                    {data => <Text>Uri is {data.Uri}. UriPassed is {data.UriPassed ? `in editProfile is ${data.UriPassed}` : `in editProfile is ${data.UriPassed}`}</Text>}
                </StateOfUriContext.Consumer>
                <TouchableOpacity style={styles.SignOut}
                    onPress={() => { signOut() }}>
                    <Text>Sign Out</Text>
                </TouchableOpacity>
                

            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    SignOut: {
        backgroundColor: "red",
        height: '30%'
    },
    Image: {
        width: "100%",
        height: "100%",
    },
    containerForInputs: {
        flexDirection: "column",
        backgroundColor: "red",
        flex: 0.6,
        flexWrap: "wrap"
    },
    InputText: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow",
        width: "80%",
        marginStart: 10,
        height: "15%",

    },
    container: {
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 2,
        justifyContent: "flex-start",
        height: '80%'


    },
    icon: {
        flex: 0.4,
        height: "100%",
        justifyContent: "center"
    }
});