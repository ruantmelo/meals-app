import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import { MealDetails } from "../components/MealDetails";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { List } from "../components/MealDetail/List";
import {IconButton} from "../components/IconButton";

export function MealDetailScreen({route, navigation}){
    const { mealId } = route.params

    const meal = MEALS.find(meal => meal.id === mealId)

    function headerButtonPressHandler(){
        console.log('pressed')
    }

    useLayoutEffect(() => {
        navigation.setOptions({ 
            title: meal.title,
            headerRight: () => <IconButton icon='star' color='white' onPress={headerButtonPressHandler}/>
        })
    }, [])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: meal.imageUrl}} />
            <Text style={styles.title}>{meal.title}</Text>
            <MealDetails textStyle={styles.detailText} complexity={meal.complexity} duration={meal.duration} affordability={meal.affordability} />
            
           <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                
                <List data={meal.ingredients}/>
                <Subtitle>Steps</Subtitle>
                <List data={meal.steps}/>
            </View>
           </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: "100%",
        height: 350,
    },

    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: 'white',
    },

    detailText: {
        color: 'white',
    },

    listOuterContainer: {
        alignItems: 'center',
    },

    listContainer: {
        
        maxWidth: '80%',
    }

  
})