import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//Constants
import { SIZES, FONTS, images, COLORS, icons } from '../constants/';

const DetailScreen = ({ navigation }) => {

    const StarReview = ({ rate }) => {

        let starComps = [];
        let fullStar = Math.floor(rate)
        let noStar = Math.floor(5 - rate)
        let halfStar = 5 - fullStar - noStar

        //full
        for (let i = 0; i < fullStar; i++) {
            starComps.push(
                <Image
                    key={`full-${i}`}
                    source={icons.starFull}
                    resizeMode="cover"
                    style={{
                        width: 20,
                        height: 20,
                    }}
                />
            )
        }

        //half
        for (let i = 0; i < halfStar; i++) {
            starComps.push(
                <Image
                    key={`half-${i}`}
                    source={icons.starHalf}
                    resizeMode="cover"
                    style={{
                        width: 20,
                        height: 20,
                    }}
                />
            )
        }

        //None
        for (let i = 0; i < noStar; i++) {
            starComps.push(
                <Image
                    key={`empty-${i}`}
                    source={icons.starEmpty}
                    resizeMode="cover"
                    style={{
                        width: 20,
                        height: 20,
                    }}
                />
            )
        }

        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {starComps}
                <Text style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}>{rate}</Text>
            </View>
        )
    }

    const IconItems = ({ icon, label }) => {
        return (
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={icon}
                    resizeMode="cover"
                    style={{
                        width: 30,
                        height: 30,
                    }}
                />
                <Text style={{ marginTop: SIZES.base, ...FONTS.body3 }}>{label}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={{ flex: 2 }}>
                <Image
                    source={images.skiVillaBanner}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '80%',
                    }}
                />
                <View
                    style={[styles.shadow, {
                        position: 'absolute',
                        bottom: "5%",
                        left: "5%",
                        right: "5%",
                        borderRadius: 15,
                        padding: SIZES.padding,
                        backgroundColor: COLORS.white,

                    }]}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.shadow}>
                            <Image
                                source={images.skiVilla}
                                resizeMode="cover"
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 15,
                                }}
                            />
                        </View>
                        <View style={{ marginHorizontal: SIZES.radius, justifyContent: 'space-around' }}>
                            <Text style={{ ...FONTS.h3 }}>Ski Villa</Text>
                            <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>France</Text>

                            <StarReview
                                rate={4.5}
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: SIZES.base / 2 }}>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>Ski villa offers simple rooms with mountain views in front of the ski lift to the Ski Resort</Text>
                    </View>
                </View>
            </View>
            {/* Header */}
            <View
                style={{
                    position: 'absolute',
                    top: 50,
                    left: 20,
                    right: 20,
                    flexDirection: 'row',
                }}
            >
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={icons.back}
                            resizeMode="cover"
                            style={{
                                width: 25,
                                height: 25
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{ alignItems: 'flex-end' }}
                    >
                        <Image
                            source={icons.menu}
                            resizeMode="cover"
                            style={{
                                width: 25,
                                height: 25,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Body */}
            <View style={{ flex: 1.5 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.base,
                        paddingHorizontal: SIZES.padding,
                        justifyContent: 'space-between',
                    }}
                >
                    <IconItems
                        icon={icons.villa}
                        label="Villa"
                    />
                    <IconItems
                        icon={icons.parking}
                        label="Parking"
                    />
                    <IconItems
                        icon={icons.wind}
                        label="4 C"
                    />

                </View>
                {/* About Section */}
                <View style={{ marginTop: SIZES.base, paddingHorizontal: SIZES.padding }}>
                    <Text style={{ ...FONTS.h2 }}>About</Text>
                    <Text style={{ color: COLORS.gray, marginTop: SIZES.base, ...FONTS.body3 }}>Located in the Alps with an altitude of 1,702 meters. This ski area is the largest ski area in the world and is known as the best place to ski. Many other facilities, such as a fitness center, sauna, steam room to star-rated restaurants.</Text>
                </View>
            </View>


            {/* Footer */}
            <View style={{ flex: 0.5, paddingHorizontal: SIZES.padding }}>
                <LinearGradient
                    style={{
                        height: 70,
                        width: '100%',
                        borderRadius: 15
                    }}
                    colors={['#edf0fc', '#d6dfff']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ flex: 1, marginHorizontal: SIZES.padding, justifyContent: 'center' }}>
                            <Text style={{ ...FONTS.h1 }}>$1000</Text>
                        </View>
                        <TouchableOpacity
                            style={{ width: 130, height: '80%', marginHorizontal: SIZES.radius }}
                            onPress={() => console.log("Book Pressed")}
                        >
                            <LinearGradient
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 10,
                                }}
                                colors={['#46aeff', '#5884ff']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>BOOKING</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        </View>
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
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
        elevation: 5,
    }
})

export default DetailScreen
