import React from 'react'
import ImagePicker, { Text } from 'react-native'
import { Button, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function SelectAnImage() {
    return (

        <View >

            <TouchableOpacity
                onPress={() => ChooseAnImg}
                style={styles.Button} >
                <Text> Upload your profile image </Text>
            </TouchableOpacity>
        </View>
    );
}

const ChooseAnImg = () => {
    const options = {

    }
    ImagePicker.launchImageLibrary(options, response => {
        console.log("response", response)
    })
}



const styles = StyleSheet.create({
    icon: {
        flex: 1,
        width: 50,
        height: 50,
        resizeMode: 'contain',
        alignItems: "flex-start",
    },
    Button: {
        width: '100%',
        height: 100,
        alignItems: "center",
        color: "green",
        backgroundColor: "red",
        fontSize: 30,
        justifyContent: "center",
        borderRadius: 20,
        fontFamily: "Algerian",
        flexDirection: "row",
        alignSelf: "center",
        marginTop: "110%",
    }
})