import { FavoriteStopsContext } from "@/lib/contexts";
import { FavoriteStop } from "@/lib/models";
import { savedStopsService } from "@/lib/service/savedStopsService";
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
      savedStopsService.save(favoriteStops);
    },
    []
  );

  useEffect(() => {
    const loadSavedStops = async () => {
      setFavoriteStops(await savedStopsService.get());
    };

    loadSavedStops();
  }, []);

  return (
    <FavoriteStopsContext.Provider
      value={{ favoriteStops, setFavoriteStops: localStorageSetFavoriteStops }}
    >
      {children}
    </FavoriteStopsContext.Provider>
  );
};
