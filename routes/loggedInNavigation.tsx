import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "../pages/home.page"
import Settings from "../pages/settings.page"
import CubeList from "../pages/cubeList.page"
import CubeDetails from "../pages/cubeDetails.page"
import cubesNavigation from "./cubesNavigation"

const Drawer = createDrawerNavigator()

const LoggedInNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="LoggedIn">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Cubes" component={cubesNavigation} />
            <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
    )
}

export default LoggedInNavigator
