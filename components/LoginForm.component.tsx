import { useField } from "formik"
import React from "react"
import { View, Text, TextInput, Pressable, Button } from "react-native"

interface IProps {
    onSubmit: () => void
}

const LoginForm = (props: IProps) => {
    const [usernameField, usernameMeta, usernameHelpers] = useField("username")
    const [passwordField, passwordMeta, passwordHelpers] = useField("password")

    return (
        <View>
            <TextInput placeholder="username" value={usernameField.value} onChangeText={(text) => usernameHelpers.setValue(text)} />
            <TextInput placeholder="password" secureTextEntry={true} value={passwordField.value} onChangeText={(text) => passwordHelpers.setValue(text)} />
            <Pressable>
                <Button title="Login" onPress={props.onSubmit} />
            </Pressable>
        </View>
    )
}

export default LoginForm
