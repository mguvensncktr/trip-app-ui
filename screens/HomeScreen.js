import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';


//Constants
import { SIZES, FONTS, images, COLORS, icons } from '../constants/';

const OptionItem = ({ icon, bgColor, label, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flex: 1, justifyContent: 'center', alignItems: 'center',
            }}
        >
            <View style={[styles.shadow, { width: 50, height: 50 }]}>
                <LinearGradient
                    style={{
                        flex: 1,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    colors={bgColor}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <Image
                        source={icon}
                        resizeMode="cover"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.white
                        }}
                    />
                </LinearGradient>
            </View>
            <Text style={{ color: COLORS.gray, ...FONTS.body3, marginTop: SIZES.base }}>{label}</Text>
        </TouchableOpacity>
    )
}

const HomeScreen = () => {
    const navigation = useNavigation();
    const [destinations, setDestinations] = React.useState([
        {
            id: "0",
            name: "Ski Villa",
            img: images.skiVilla,
        },
        {
            id: "1",
            name: "Climbing Hills",
            img: images.climbingHills,
        },
        {
            id: "2",
            name: "Frozen Hills",
            img: images.frozenHills,
        },
        {
            id: "3",
            name: "Beach",
            img: images.beach,
        },
    ]);

    function renderDestinations(item, index) {
        let destStyle = {};
        if (index == 0) {
            destStyle = { marginLeft: SIZES.padding };
        }
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate("Detail")}
                style={{
                    justifyContent: 'center', marginHorizontal: SIZES.base, ...destStyle
                }}
            >
                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        width: SIZES.width * 0.28,
                        height: '82%',
                        borderRadius: 15,
                    }}
                />
                <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.container}>
            {/* Image */}
            <View style={{ flex: 1, marginTop: SIZES.base, paddingHorizontal: SIZES.padding }} >
                <Image
                    source={images.homeBanner}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 15,
                    }}
                />
            </View>
            {/* Options */}
            <View style={{ flex: 1, justifyContent: 'center', marginTop: SIZES.padding }}>
                <View style={{ flexDirection: 'row', marginTop: SIZES.padding, paddingHorizontal: SIZES.base }}>
                    <OptionItem
                        icon={icons.airplane}
                        bgColor={['#46aeff', '#5884ff']}
                        label={"Flight"}
                        onPress={() => { console.log("Item Pressed") }}
                    />
                    <OptionItem
                        icon={icons.train}
                        bgColor={['#fddf90', '#fcda13']}
                        label={"Train"}
                        onPress={() => { console.log("Item Pressed") }}
                    />
                    <OptionItem
                        icon={icons.bus}
                        bgColor={['#e973ad', '#da5df2']}
                        label={"Bus"}
                        onPress={() => { console.log("Item Pressed") }}
                    />
                    <OptionItem
                        icon={icons.taxi}
                        bgColor={['#fcaba8', '#fe6bba']}
                        label={"Taxi"}
                        onPress={() => { console.log("Item Pressed") }}
                    />
                </View>
                <View style={{ flexDirection: 'row', marginTop: SIZES.radius, paddingHorizontal: SIZES.base }}>
                    <OptionItem
                        icon={icons.bed}
                        bgColor={['#ffc465', '#ff9c5f']}
                        label={"Hotel"}
                        onPress={() => { console.log("Item Pressed") }}
                    />
                    <OptionItem
                        icon={icons.eat}
                        bgColor={['#7cf1fb', '#4ebefd']}
                        label={"Eats"}
                        onPress={() => { console.log("Item Pressed") }}
                    />
                    <OptionItem
                        icon={icons.compass}
                        bgColor={['#7be993', '#46caaf']}
                        label={"Adventure"}
                        onPress={() => { console.log("Item Pressed") }}
                    />
                    <OptionItem
                        icon={icons.event}
                        bgColor={['#fca397', '#fc7b6c']}
                        label={"Event"}
                        onPress={() => { console.log("Item Pressed") }}
                    />
                </View>
            </View>

            {/* Destination */}
            <View style={{ flex: 1 }}>
                <Text style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding, ...FONTS.h2 }}>Destination</Text>
                <FlatList
                    data={destinations}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => renderDestinations(item, index)}
                />
            </View>
        </View >
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})

export default HomeScreen
