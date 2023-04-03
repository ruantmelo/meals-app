import { FlatList, View } from 'react-native'
import { CategoryGridTile } from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'


export function CategoriesScreen({ navigation }) {

    function renderCategoryItem(itemData){
        function pressHandler(){
            navigation.navigate('MealsOverview', { categoryId: itemData.item.id })
        }
    
        return <CategoryGridTile onPress={pressHandler} title={itemData.item.title} color={itemData.item.color}/>
    }
    
    return (
        <View>
            <FlatList numColumns={2} renderItem={renderCategoryItem} keyExtractor={item => item.id}  data={CATEGORIES}  />
        </View>
    )
}