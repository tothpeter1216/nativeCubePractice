import React from "react"
import { View, Text } from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../pages/login.page"
import Home from "../pages/home.page"
import LoggedInNavigator from "./loggedInNavigation"

const Stack = createNativeStackNavigator()

const MainStackNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen options={{headerShown: false}} name="LoggedIn" component={LoggedInNavigator} />
        </Stack.Navigator>
    )
}

export default MainStackNavigation
