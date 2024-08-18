import AsyncStorage from "@react-native-async-storage/async-storage";
import { FavoriteStop } from "../models";

const FAVORITE_STOPS_KEY = "favorite-stops";

const save = async (newFavoriteStops: FavoriteStop[]) => {
    try {
        await AsyncStorage.setItem(FAVORITE_STOPS_KEY, JSON.stringify(newFavoriteStops));
        console.log("saving", JSON.stringify(newFavoriteStops))
    } catch (error) {
        console.log(error)
    }
}

const get = async (): Promise<FavoriteStop[]> => {
    try {
        const value = await AsyncStorage.getItem(FAVORITE_STOPS_KEY);
        if (value == null) {
            return [];
        }
        console.log("getting", value)
        const favoriteStops: FavoriteStop[] = JSON.parse(value);
        return favoriteStops;
    } catch (error) {
        console.log(error)
        return []
    }
}

export const favoriteStopsService = {
    get, save
}