import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Login from "./pages/login.page"
import { NavigationContainer } from "@react-navigation/native"
import MainStackNavigation from "./routes/mainStackNavigation"

export default function App() {
    return (
        <NavigationContainer>
            <MainStackNavigation />
            <StatusBar style="auto" />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})
