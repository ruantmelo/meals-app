import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Pressable, Image, Text, View, Platform } from "react-native";
import { MealDetails } from "../MealDetails";

export function MealItem({title, id, imageUrl, duration, complexity, affordability}){
    const { navigate } = useNavigation()

    function selectMealItemHandler(){
        navigate('MealDetail', {mealId: id})
    }


    return (
        <View style={styles.mealItem}>
            <Pressable onPress={selectMealItemHandler} style={({pressed}) =>  pressed ? styles.buttonPressed : null} android_ripple={{color: '#ccc'}}>
              <View style={styles.innerContainer}>
                <View>
                    <Image style={styles.image} source={{uri: imageUrl}} />
                    <Text style={styles.title}>{title}</Text>
                </View>
               <MealDetails complexity={complexity} affordability={affordability} duration={duration} />
              </View>
            </Pressable>
           
        </View>
    )
}


const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },

    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },

    buttonPressed: {
        opacity: 0.5,
    },

    image: {
        width: "100%",
        height: 200,
    },

    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8,
    },

    details: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
    },

    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
})