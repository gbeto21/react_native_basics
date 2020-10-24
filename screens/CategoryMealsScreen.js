import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native";

import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = props => {
    const categoryId = props.navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)

    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Details" onPress={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail'
                })
                // props.navigation.navigate(routeName: 'MealDetail')
            }} />
            <Button title="Go back" onPress={() => {
                props.navigation.pop()
                // props.navigation.goBack()
            }} />
        </View>
    )

}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    return {
        headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen