import React from "react"
import { View, Text } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import CubeListItem from "../components/cubeListItem.component"

const cubes = [
    {
        id: "1",
        name: "cube1",
        location: "Oroszi",
        rate: 4,
        free: true,
        image: "https://picsum.photos/id/100/200",
        photos: [{url: "https://picsum.photos/id/111/200"}, {url: "https://picsum.photos/id/120/200"}, {url: "https://picsum.photos/id/112/200"}],
    },
    {
        id: "2",
        name: "Kocka",
        location: "Maglód",
        rate: 4.5,
        free: false,
        image: "https://picsum.photos/id/200/200",
        photos: [{url: "https://picsum.photos/id/222/200"}, {url: "https://picsum.photos/id/220/200"}, {url: "https://picsum.photos/id/250/200"}],
    },
    {
        id: "2341",
        name: "CCC",
        location: "Pálpuszta",
        rate: 2,
        free: true,
        image: "https://picsum.photos/id/300/200",
        photos: [{url: "https://picsum.photos/id/301/200"}, {url: "https://picsum.photos/id/320/200"}, {url: "https://picsum.photos/id/350/200"}],
    },
    {
        id: "123423",
        name: "BC",
        location: "Kenya",
        rate: 3,
        free: true,
        image: "https://picsum.photos/id/400/200",
        photos: [{url: "https://picsum.photos/id/444/200"}, {url: "https://picsum.photos/id/420/200"}, {url: "https://picsum.photos/id/450/200"}],
    },
]

const CubeList = (props: any) => {
    console.log("listrops", props)

    return (
        <View>
            <FlatList
                data={cubes}
                renderItem={({ item }) => <CubeListItem onPress={(cube: any) => props.navigation.navigate("CubeDetailsTabs", { cube: cube })} cube={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default CubeList
