import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MealsList } from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

export function FavoritesScreen(){
    const { ids } = useContext(FavoritesContext)

    const favoriteMeals = MEALS.filter(meal => ids.includes(meal.id))

    if(favoriteMeals.length === 0){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
            </View>
        )
    }

    return (
        <MealsList items={favoriteMeals}/>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})