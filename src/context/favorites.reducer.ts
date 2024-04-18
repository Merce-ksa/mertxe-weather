import Favorite from '../types/Favorite'
import { FavoritesActionTypes, FavoritesActions } from './favorites.actions.types'


const updateStore = (currentFavorites: Favorite[]) => {
  localStorage.setItem('favorites', JSON.stringify(currentFavorites))
}
  
export const favoritesReducer = (state: Favorite[], action: FavoritesActions) => {
  switch (action.type) {
  case FavoritesActionTypes.GET_STORED_FAVORITES: {
    const favorites = action.payload
  
    return favorites
  }
  case FavoritesActionTypes.ADD_FAVORITE: {
    const favorite = action.payload
    
    const newState = [
      ...state,
      favorite
    ]
      
    updateStore(newState)
    return newState
  }
  case FavoritesActionTypes.REMOVE_FAVORITE: {
    const city = action.payload
    const newState = state.filter((item: Favorite) => item.city !== city)
        
    updateStore(newState)
  
    return newState
  }
    
    return state
  }
}