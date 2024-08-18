import { FavoriteStopsContext } from "@/lib/contexts";
import { FavoriteStop } from "@/lib/models";
import { favoriteStopsService } from "@/lib/service/favoriteStopsService";
import { ReactNode, useCallback, useEffect, useState } from "react";

type DataProviderProps = {
  children?: ReactNode;
};

export const DataProvider = (props: DataProviderProps) => {
  const { children } = props;

  const [favoriteStops, setFavoriteStops] = useState<FavoriteStop[]>([]);
  const localStorageSetFavoriteStops = useCallback(
    (newFavoriteStops: FavoriteStop[]) => {
      setFavoriteStops(newFavoriteStops);
      favoriteStopsService.save(favoriteStops);
    },
    []
  );

  useEffect(() => {
    const loadFavoriteStops = async () => {
      setFavoriteStops(await favoriteStopsService.get());
    };

    loadFavoriteStops();
  }, []);

  return (
    <FavoriteStopsContext.Provider
      value={{ favoriteStops, setFavoriteStops: localStorageSetFavoriteStops }}
    >
      {children}
    </FavoriteStopsContext.Provider>
  );
};
