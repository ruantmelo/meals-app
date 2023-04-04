
import { CATEGORIES, MEALS } from "../data/dummy-data";
import {  useLayoutEffect } from "react";
import { MealsList } from "../components/MealsList/MealsList";


export function MealsOverviewScreen({ route, navigation }){
    const { categoryId } = route.params

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(cat => cat.id === categoryId).title

        navigation.setOptions({title: categoryTitle})
    }, [categoryId, navigation])

    return (
        <MealsList items={displayedMeals}/>
    )
}


