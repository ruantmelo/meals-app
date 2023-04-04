import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
})


export const FavoritesContextProvider = ({children}) => {
    const [favoriteMealsIds, setFavoriteMealsIds] = useState([])

    const addFavorite = (id) => {
        setFavoriteMealsIds([...favoriteMealsIds, id])
    }

    const removeFavorite = (id) => {
        setFavoriteMealsIds(favoriteMealsIds.filter(mealId => mealId !== id))
    }

    return (
        <FavoritesContext.Provider value={{ids: favoriteMealsIds, addFavorite, removeFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}