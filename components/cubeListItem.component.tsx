import React from "react"
import { View, Text, Image, StyleSheet, Pressable } from "react-native"

export interface cube {
    id: string
    name: string
    location: string
    rate: Number
    free: Boolean
}

const CubeListItem = (props: any) => {
    return (
        <Pressable onPress={() => props.onPress(props.cube)}>
            <View style={styles.container}>
                <View style={styles.upperBlock}>
                    <Image
                        style={styles.logo}
                        source={{
                            uri: props.cube.image,
                        }}
                    />
                    <View style={styles.upperInfos}>
                        <Text style={styles.name}>{props.cube.name}</Text>
                        <Text style={styles.location}>{props.cube.location}</Text>
                    </View>
                </View>
                <View style={styles.lowerBlock}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoValue}>{props.cube.rate}</Text>
                        <Text style={styles.info}>Rate</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoValue}>{props.cube.free ? "free" : "reserved"}</Text>
                        <Text style={styles.info}>Status</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 30,
    },
    upperBlock: {
        flexDirection: "row",
        padding: 10,
        borderWidth: 1,
        borderColor: "lightgray",
        borderBottomWidth: 0,
        marginHorizontal: 1,
    },
    lowerBlock: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "lightgray",
    },
    upperInfos: {
        justifyContent: "flex-end",
    },
    logo: {
        width: 100,
        height: 100,
        marginRight: 40,
    },
    name: {
        fontWeight: "bold",
        fontSize: 25,
    },
    location: {
        fontStyle: "italic",
        fontSize: 20,
    },
    infoContainer: {
        alignItems: "center",
    },
    info: {
        fontWeight: "bold",
        fontSize: 20,
        color: "gray",
    },
    infoValue: {
        fontStyle: "italic",
        fontSize: 20,
    },
})

export default CubeListItem
