import { createContext } from "react";
import { FavoriteStop } from "./models";

type FavoriteStopsContext = {
    favoriteStops: FavoriteStop[],
    setFavoriteStops: (favoriteStops: FavoriteStop[]) => void,
}

export const FavoriteStopsContext = createContext<FavoriteStopsContext>({
    favoriteStops: [],
    setFavoriteStops: (savedStops: FavoriteStop[]) => { }
});