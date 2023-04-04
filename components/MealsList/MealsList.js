import { FlatList, StyleSheet, View } from "react-native";
import { MealItem } from "./MealItem";

export function MealsList({items}){
    function renderMealItem(itemData){
        return (
           <MealItem {...itemData.item}/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList keyExtractor={item => item.id} data={items} renderItem={renderMealItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})