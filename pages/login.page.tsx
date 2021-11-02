import axios from "axios"
import { Formik } from "formik"
import React, { useState } from "react"
import { View, Text, Alert } from "react-native"
import LoginForm from "../components/LoginForm.component"
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as yup from "yup"
import LoginFormModal from "../components/loginFormModal.component"

const initialValues = {
    username: "",
    password: "",
}

interface ILoginValues {
    username: string
    password: string
}

const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
})

const Login = (props: any) => {
    const [modalVisible, setModalVisible] = useState(false)

    const onSubmit = async (values: ILoginValues) => {
        try {
            const response: any = await axios.post("http://192.168.1.68:3000/user/login", { username: values.username })
            console.log(response.status)

            if (response.status === 200) {
                props.navigation.navigate("LoggedIn")
                await AsyncStorage.setItem("username", response.data.username)
            } else {
                setModalVisible(true)
            }
        } catch (error) {
            console.log("error", error)
            setModalVisible(true)
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
            </Formik>
            <LoginFormModal setModalVisible={setModalVisible} modalVisible={modalVisible} />
        </View>
    )
}

export default Login
