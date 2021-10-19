import React, { useState, useEffect } from "react"
// import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { Camera } from "expo-camera"
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View } from "react-native"
import NewImage from "../components/newImage.component"

const AddPhotoToCube = () => {
    const [hasPermission, setHasPermission] = useState<any>(null)
    const [type, setType] = useState(Camera.Constants.Type.back)
    const [cameraRef, setCameraRef] = useState<any>(null)

    const [modalVisible, setModalVisible] = useState(false)

    const [newPhoto, setNewPhoto] = useState<any>(null)

    useEffect(() => {
        ;(async () => {
            const { status } = await Camera.requestPermissionsAsync()
            setHasPermission(status === "granted")
        })()
    }, [])

    const takePicture = async () => {
        if (cameraRef) {
            let photo = await cameraRef.takePictureAsync()
            setNewPhoto(photo)
            setModalVisible(true)
            // console.log("photo", photo)

            //   props.setImage(photo);
            //   props.setModalVisible();
        }
    }

    if (hasPermission === null) {
        return <View />
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>
    }

    return (
        <View style={styles.container}>
            <Camera
                ratio="16:9"
                style={styles.camera}
                ref={(ref) => {
                    setCameraRef(ref)
                }}
                type={type}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)
                        }}>
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.photoButton} onPress={takePicture}>
                        <Text style={styles.text}> Photo </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
            <NewImage photo={newPhoto} setModalVisible={setModalVisible} modalVisible={modalVisible} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
        // resizeMode: "cover"
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: "flex-end",
        alignItems: "center",
    },
    photoButton: {
        // flex: 0.2,
        // marginLeft: 50,
        alignSelf: "flex-end",
        // alignItems: "center",
        backgroundColor: "red",
        width: 60,
        borderRadius: 30,
        height: 60,
        textAlign: "center",
        justifyContent: "center",
        position: "absolute",
        right: "40%",
    },
    text: {
        fontSize: 18,
        color: "white",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
})

export default AddPhotoToCube
