import Favorite from '../types/Favorite'

export enum FavoritesActionTypes {
    GET_STORED_FAVORITES = 'GET_STORED_FAVORITES',
    ADD_FAVORITE = 'ADD_FAVORITE',
    REMOVE_FAVORITE = 'REMOVE_FAVORITE',
    UPDATE_FAVORITE = 'UPDATE_FAVORITE'
}
  
export interface GetStoredFavorites {
    type: FavoritesActionTypes.GET_STORED_FAVORITES
    payload: Favorite[]  
}
  
export interface AddFavorite {
    type: FavoritesActionTypes.ADD_FAVORITE
    payload: Favorite
}
export interface UpdateFavorite {
    type: FavoritesActionTypes.UPDATE_FAVORITE
    payload: Favorite
}
  
export interface RemoveFavorite {
    type: FavoritesActionTypes.REMOVE_FAVORITE
    payload: string
}

export type FavoritesActions = | GetStoredFavorites | AddFavorite | UpdateFavorite | RemoveFavorite