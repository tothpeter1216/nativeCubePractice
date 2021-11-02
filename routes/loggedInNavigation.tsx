import React from "react"
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer"
import Home from "../pages/home.page"
import Settings from "../pages/settings.page"
import CubeList from "../pages/cubeList.page"
import CubeDetails from "../pages/cubeDetails.page"
import cubesNavigation from "./cubesNavigation"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Drawer = createDrawerNavigator()

const LoggedInNavigator = (props: any) => {
    const handleLogout = () => {
        props.navigation.navigate("Login")
        AsyncStorage.removeItem("username")
    }
    return (
        <Drawer.Navigator
            initialRouteName="LoggedIn"
            drawerContent={(props: any) => {
                return (
                    <DrawerContentScrollView {...props}>
                        <DrawerItemList {...props} />
                        <DrawerItem label="Logout" onPress={handleLogout} />
                    </DrawerContentScrollView>
                )
            }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Cubes" component={cubesNavigation} />
            <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
    )
}

export default LoggedInNavigator
