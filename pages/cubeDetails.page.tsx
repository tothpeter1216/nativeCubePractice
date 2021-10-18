import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"

const CubeDetails = (props: any) => {
    const { cube } = props.route.params
    // console.log("detailsProps", props)

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{
                        uri: cube.image,
                    }}
                />
                {/* <Text style={styles.name}>Name: {cube.name}</Text>
                <Text style={styles.location}>Location: {cube.location}</Text>
                <Text style={styles.infoValue}>{cube.rate}</Text> */}

                <View style={styles.lowerBlock}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.info}>Name: </Text>
                        <Text style={styles.infoValue}>{cube.name}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.info}>Location: </Text>
                        <Text style={styles.infoValue}>{cube.location}</Text>
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={styles.info}>Rate: </Text>
                        <Text style={styles.infoValue}>{cube.rate}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.info}>Status: </Text>
                        <Text style={styles.infoValue}>{cube.free ? "free" : "reserved"}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
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
        justifyContent: "space-around",
        backgroundColor: "lightgray",
    },
    upperInfos: {
        justifyContent: "flex-end",
    },
    image: {
        width: "100%",
        height: 400,
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
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
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

export default CubeDetails
