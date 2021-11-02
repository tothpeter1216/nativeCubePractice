import { useField } from "formik"
import React from "react"
import { View, Text, TextInput, Pressable, Button, StyleSheet } from "react-native"

interface IProps {
    onSubmit: () => void
}

const LoginForm = (props: IProps) => {
    const [usernameField, usernameMeta, usernameHelpers] = useField("username")
    const [passwordField, passwordMeta, passwordHelpers] = useField("password")
    const showUsernameError = usernameMeta.touched && usernameMeta.error
    const passwordError = passwordMeta.touched && passwordMeta.error

    const onSubmit = () => {
        props.onSubmit()
        // usernameHelpers.setValue("")
        // passwordHelpers.setValue("")
    }

    return (
        <View style={styles.formContainer}>
            <TextInput style={styles.inputField} placeholder="username" value={usernameField.value} onChangeText={(text) => usernameHelpers.setValue(text)} />
            {showUsernameError && <Text style={styles.errorText}>{usernameMeta.error}</Text>}
            <TextInput style={styles.inputField} placeholder="password" secureTextEntry={true} value={passwordField.value} onChangeText={(text) => passwordHelpers.setValue(text)} />
            {passwordError && <Text style={styles.errorText}>{passwordMeta.error}</Text>}
            <Pressable style={styles.buttonContainer}>
                <Button title="Login" onPress={onSubmit} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputField: {
        backgroundColor: "white",
        width: "70%",
        height: 50,
        marginVertical: 10,
        borderRadius: 2,
        borderColor: "lightblue",
        borderWidth: 2,
        fontSize: 20,
        textAlign: "center"
    },
    buttonContainer: {
        width: "70%",
        marginTop: 20,
        fontSize: 20,
        // height: 50
    },
    errorText: {
        color: "red",
        fontSize: 20,
    },
})

export default LoginForm
