import React from "react"
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from "react-native"

const LoginFormModal = (props: any) => {
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
                    <Text style={styles.modalText}>The password or the username is incorrect!</Text>

                    <TouchableHighlight
                        style={{ ...styles.closeButton, backgroundColor: "red" }}
                        onPress={() => {
                            props.setModalVisible(!props.modalVisible)
                        }}>
                        <Text style={styles.textStyle}>Close</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
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
    closeButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 15,
        elevation: 2,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: "red",
        fontSize: 20
    },
})

export default LoginFormModal
