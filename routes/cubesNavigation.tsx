import React from 'react'
import { View, Text } from 'react-native'

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CubeList from '../pages/cubeList.page'
import CubeDetails from '../pages/cubeDetails.page'
import CubeDetailsTabs from './cubeDetailTabs'

const Stack = createNativeStackNavigator()

const cubesNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="CubeList" component={CubeList} />
            <Stack.Screen name="CubeDetailsTabs" component={CubeDetailsTabs} />
        </Stack.Navigator>
    )
}

export default cubesNavigation
