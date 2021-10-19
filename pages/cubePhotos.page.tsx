import React from "react"
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from "react-native"

const CubePhotos = (props: any) => {
    console.log("cubephotos props", props)
    const { photos } = props.route.params
    console.log("photos", photos)

    return (
        <View>
            <FlatList
                data={photos}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: item.url,
                                }}
                            />
                        </View>
                    )
                }}
                keyExtractor={(item) => item.url}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: Dimensions.get("window").width - 20,
        height: 500,
        margin: 10,
    },
    image: {
        flex: 1,
        width: "100%",
        resizeMode: "contain",
        // height: "100%",
        // height: "auto"
    },
})

export default CubePhotos
