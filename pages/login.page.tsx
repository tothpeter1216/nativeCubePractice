import { Formik } from "formik"
import React from "react"
import { View, Text } from "react-native"
import LoginForm from "../components/LoginForm.component"

const initialValues = {
    username: "",
    password: "",
}

interface ILoginValues {
    username: string
    password: string
}

const Login = (props: any) => {
    
    const onSubmit = (values: ILoginValues) => {
        props.navigation.navigate("LoggedIn")
    }
    return (
        <View>
            <Text>Login</Text>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
            </Formik>
        </View>
    )
}

export default Login
