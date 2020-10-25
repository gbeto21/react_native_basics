import React, { useState } from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from '../screens/FavoritesScreen'
import { StyleSheet, Platform, Text } from 'react-native';

import FiltersScreen from "../screens/FiltersScreen";
import colors from '../constants/colors';

// const MealsNavigator = () => {
//     return (
//         <View style={styles.container}>
//             <Text>Open spedd up App.js to start working on your app!</Text>
//         </View>
//     );
// }

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primaryColor : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor
}

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen
        },
        CategoryMeals: {
            screen: CategoryMealsScreen,
        },
        MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
)

const FavNavigator = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        MealDetail: MealDetailScreen
    },
    {
        // initialRouteName: 'Categories',
        defaultNavigationOptions: defaultStackNavOptions
    }
)

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            // tabBarLabel: 'Favorites!',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: colors.primaryColor,
            tabBarLabel: Platform.OS === 'android'
                ? <Text style={{ fontFamily: 'open-sans' }}>Meals</Text>
                : 'Meals'
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: colors.accentColor,
            tabBarLabel: Platform.OS === 'android'
                ? <Text style={{ fontFamily: 'open-sans' }}>Favorites</Text>
                : 'Favorites'
        }
    }
}

const MealsFavTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeTintColor: 'white',
            shifting: true,
            barStyle: {
                backgroundColor: colors.primaryColor
            }
        })
        : createBottomTabNavigator(
            tabScreenConfig,
            {
                tabBarOptions: {
                    labelStyle: {
                        fontFamily: 'open-sans'
                    },
                    activeTintColor: colors.accentColor
                }
            })

const FiltersNavigator = createStackNavigator(
    {
        Filters: FiltersScreen
    },
    {
        // navigationOptions: {
        //     drawerLabel: 'Filters!!'
        // },
        defaultNavigationOptions: defaultStackNavOptions
    }
)

const MainNavigator = createDrawerNavigator(
    {
        MealsFavs: {
            screen: MealsFavTabNavigator,
            navigationOptions: {
                drawerLabel: 'Meals'
            }
        },
        Filters: FiltersNavigator
    },
    {
        contentOptions: {
            activeTintColor: colors.accentColor,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }
        }
    }
)

export default createAppContainer(MainNavigator)
// export default createAppContainer(MealsNavigator)
// export default MealsNavigator