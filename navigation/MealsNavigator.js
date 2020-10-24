import React, { useState } from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from '../screens/FavoritesScreen'
import { StyleSheet, Platform } from 'react-native';

import Colors from '../constants/colors'
import colors from '../constants/colors';

// const MealsNavigator = () => {
//     return (
//         <View style={styles.container}>
//             <Text>Open spedd up App.js to start working on your app!</Text>
//         </View>
//     );
// }

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen
}, {
    mode: 'modal',
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
}
)

const MealsFavTabNavigator = createBottomTabNavigator(
    {
        Meals: {
            screen: MealsNavigator,
            navigationOptions: {
                // tabBarLabel: 'Favorites!',
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
                }
            }
        },
        Favorites: {
            screen: FavoritesScreen,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: colors.accentColor
        }
    })

export default createAppContainer(MealsFavTabNavigator)
// export default createAppContainer(MealsNavigator)
// export default MealsNavigator