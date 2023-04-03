import { FlatList, StyleSheet, Text, View } from "react-native";
import { MealItem } from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import {  useLayoutEffect } from "react";


export function MealsOverviewScreen({ route, navigation }){
    const { categoryId } = route.params

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    function renderMealItem(itemData){
        return (
           <MealItem {...itemData.item}/>
        )
    }

    

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(cat => cat.id === categoryId).title

        navigation.setOptions({title: categoryTitle})
    }, [categoryId, navigation])

    return (
        <View style={styles.container}>
           <FlatList keyExtractor={item => item.id} data={displayedMeals} renderItem={renderMealItem} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})