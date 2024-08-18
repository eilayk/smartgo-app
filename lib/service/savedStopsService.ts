import AsyncStorage from "@react-native-async-storage/async-storage";
import { FavoriteStop } from "../models";

const SAVED_STOPS_KEY = "saved-stops";

export const save = async (newFavoriteStops: FavoriteStop[]) => {
    try {
        await AsyncStorage.setItem(SAVED_STOPS_KEY, JSON.stringify(newFavoriteStops));
    } catch (error) {
        console.log(error)
    }
}

const get = async (): Promise<FavoriteStop[]> => {
    try {
        const value = await AsyncStorage.getItem(SAVED_STOPS_KEY);
        if (value == null) {
            return [];
        }
        const savedStops: FavoriteStop[] = JSON.parse(value);
        return savedStops;
    } catch (error) {
        console.log(error)
        return []
    }
}

export const savedStopsService = {
    get, save
}