import React from "react"
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View, Image } from "react-native"

const NewImage = (props: any) => {
    console.log("newImage", props)

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.")
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {props.photo && (
                        <Image
                            style={styles.image}
                            source={{
                                uri: props.photo.uri,
                            }}
                        />
                    )}
                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                            props.setModalVisible(!props.modalVisible)
                        }}>
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: "white",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        width: "100%"
    },
    modalView: {
        flex: 1,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: "100%",
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
    image: {
        flex: 1,
        width: "100%",
        resizeMode: "contain",
    },
})

export default NewImage
