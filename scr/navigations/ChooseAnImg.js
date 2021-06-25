import React, { useState } from 'react'
import { Alert, Platform, Text, Image, PermissionsAndroid, ToastAndroid } from 'react-native'
import { Button, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import RNFetchBlob from 'rn-fetch-blob'
import { StateOfUriContext } from './GlobalState'



export default function SelectAnImage({ navigation }) {
    const [photoUri, setPhotoUri] = useState(null)
    const [changed, setChanged] = useState(false)
    const [globalPath, setGlobalPath] = useState(null)
    const [UriPassed, setUriPassed] = useState(false)

    const ChooseAnImg = () => {
        const options = {

        }
        launchImageLibrary(options, response => {
            if (response.didCancel) {

            }
            else {
                setPhotoUri(response.assets[0].uri)
                setChanged(true)
            }
        })

    }

    const checkAndroidPermission = async () => {
        console.log("we entered CheckAndroidPermission")
        if (Platform.OS === 'ios') {
            save();
        } else {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    PermissionsAndroid.PERMISSIONS.READ_CALENDAR,
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    // Once user grant the permission start downloading

                    save();
                } else {
                    if (Platform.OS === 'android') {
                        ToastAndroid.show('Storage Permission denied.', ToastAndroid.SHORT);
                    } else {
                        AlertIOS.alert('Storage Permission denied.');
                    }
                }
            } catch (err) {
                // To handle permission related exception
                console.warn('tryerr', err);
            }
        }
    };

    const save = async () => {
        var paths = `${RNFetchBlob.fs.dirs.DCIMDir
            }/${new Date().getTime()}.jpg`; // where u need to put that 


        try {
            RNFetchBlob.fs
                .writeFile(paths, 'data.base64', 'base64')//data.base64 is your photo with convert base64
                .then((value) => {
                    RNFetchBlob.fs
                        .scanFile([{ path: paths }]) //after save to notify gallry for that
                        .then(() => {
                            console.log('scan file success');
                            console.log(paths)
                            setGlobalPath(paths)
                            .then(()=>{console.log("from the place i setGlobalPath", globalPath)}).catch((errorGlobal)=>{
                                console.log('cant display log ' , errorGlobal)
                            })
                            
                        })
                        .catch((err) => {
                            console.log('scan file error', err);
                        });
                })
                .catch((e) => console.log(e.message));
        } catch (error) {
            console.log('fileerror', error.message);
            console.log("path is", paths);
        }

    }

    return (

        <View style={{ flex: 1, backgroundColor: "green" }}>
            <View>
                {photoUri ? <Image source={{ uri: photoUri }} style={{ width: '100%', height: '80%', backgroundColor: 'black', alignSelf: 'center' }} resizeMode={'contain'}
                ></Image> : null}
            </View>
            <View style={{ marginTop: '120%', position: 'absolute', height: "10%", width: "100%" }}>
                <TouchableOpacity
                    onPress={() => ChooseAnImg()}
                    style={styles.Button} >
                    <Text style={{ fontSize: 28 }}> Upload your profile image </Text>
                </TouchableOpacity>
            </View>
            <StateOfUriContext.Provider value={{ UriPassed, globalPath }}>
                {changed ? <TouchableOpacity onPress={() => {
                    checkAndroidPermission()
                        .then(() => {
                            setUriPassed(true)
                            console.log(`globalPath is ${globalPath} `)
                            navigation.goBack()
                        })
         
                }}>

                    <Text style={styles.Save}>Save changes</Text>
                </TouchableOpacity> : null}
            </StateOfUriContext.Provider>
        </View>

    );
}

const styles = StyleSheet.create({
    Button: {
        alignItems: "center",
        color: "green",
        backgroundColor: "red",
        justifyContent: "center",
        borderRadius: 20,
        flexDirection: "row",
        alignSelf: "center",
    },
    Save: {
        alignSelf: 'center',
        backgroundColor: '#faa',
        fontSize: 30,
        borderRadius: 30,
        padding: 10,
        marginTop: "4%"
    }
})