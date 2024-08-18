import { createContext } from 'react';
import { FavoriteStop } from './models';

type FavoriteStopsContextType = {
  favoriteStops: FavoriteStop[];
  setFavoriteStops: (favoriteStops: FavoriteStop[]) => void;
};

export const FavoriteStopsContext = createContext<FavoriteStopsContextType>({
  favoriteStops: [],
  setFavoriteStops: (savedStops: FavoriteStop[]) => {},
});
