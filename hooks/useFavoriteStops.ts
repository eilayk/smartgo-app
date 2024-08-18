import { FavoriteStopsContext } from '@/lib/contexts';
import { FavoriteStop } from '@/lib/models';
import { useCallback, useContext } from 'react';

export const useFavoriteStops = () => {
  const { favoriteStops, setFavoriteStops } = useContext(FavoriteStopsContext);

  const addFavorite = useCallback(
    (newFavoriteStop: FavoriteStop) => {
      const newFavoriteStops = [...favoriteStops, newFavoriteStop];
      setFavoriteStops(newFavoriteStops);
    },
    [favoriteStops, setFavoriteStops],
  );

  const removeFavorite = useCallback(
    (routeId: string, stopId: string) => {
      const newFavoriteStops = favoriteStops.filter(
        (faveStop) =>
          !(faveStop.routeId === routeId && faveStop.stopId === stopId),
      );
      setFavoriteStops(newFavoriteStops);
    },
    [favoriteStops, setFavoriteStops],
  );

  return {
    favoriteStops,
    addFavorite,
    removeFavorite,
  };
};
