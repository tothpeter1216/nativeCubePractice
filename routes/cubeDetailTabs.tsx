import * as React from "react"
import { Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import CubeDetails from "../pages/cubeDetails.page"
import CubePhotos from "../pages/cubePhotos.page"

const Tab = createBottomTabNavigator()

export default function CubeDetailsTabs(props: any) {
    const { cube } = props.route.params

    return (
        <Tab.Navigator>
            <Tab.Screen options={{headerShown: false}} name="Cube" initialParams={{ cube: cube }} component={CubeDetails} />
            <Tab.Screen options={{headerShown: false}} name="Photos" initialParams={{ photos: cube.photos }} component={CubePhotos} />
        </Tab.Navigator>
    )
}
