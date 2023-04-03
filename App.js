
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CategoriesScreen } from './screens/CategoriesScreen';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';
import { CATEGORIES } from './data/dummy-data';
import { MealDetailScreen } from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FavoritesScreen } from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator(){
  return (
    <Drawer.Navigator 
      screenOptions={{sceneContainerStyle: {backgroundColor: '#3f2f25'},
      drawerContentStyle: {backgroundColor: '#351401'}, 
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1',
      headerTintColor: 'white' , headerStyle: {backgroundColor: '#351401'}}}>
      <Drawer.Screen name='Categories' options={{title: 'All Categories', drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size}/>}} component={CategoriesScreen} />
      <Drawer.Screen name='Favorites' options={{drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size}/>}} component={FavoritesScreen} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
   <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{contentStyle: {backgroundColor: '#3f2f25'}, headerTintColor: 'white' , headerStyle: {backgroundColor: '#351401'}}} >
          <Stack.Screen options={{ headerShown: false}} name='Drawer' component={DrawerNavigator} />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
          <Stack.Screen name='MealDetail' component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
