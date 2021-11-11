import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

// Constants
import { FONTS, COLORS, icons, images, SIZES } from '../constants/';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const dTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: 'transparent',
    }
}


const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.gray,
                tabBarStyle: {
                    height: 90,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.53,
                    shadowRadius: 13.97,
                    elevation: 21,
                }
            }}

        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.home}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.primary : COLORS.gray,
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.search}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.primary : COLORS.gray,
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.bookmark}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.primary : COLORS.gray,
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.user}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.primary : COLORS.gray,
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <NavigationContainer theme={dTheme}>
            <Stack.Navigator
                initialRouteName="Onboarding"
            >
                <Stack.Screen name="Onboarding" component={OnboardingScreen}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: COLORS.white,
                        },
                        headerLeft: null,
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => console.log("Menu Pressed")}
                                style={{ marginRight: SIZES.padding }}
                            >
                                <Image
                                    source={icons.barMenu}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            </TouchableOpacity>

                        )
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Tabs}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: COLORS.white,
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.base / 2 }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode='contain'
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => console.log("Menu pressed")}
                                style={{ marginRight: SIZES.base / 2 }}
                            >
                                <Image
                                    source={icons.menu}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
                <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Router;