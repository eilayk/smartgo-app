import React, { useMemo } from "react";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { getStopTimes } from "@/lib/api";
import { getDateTime } from "@/lib/util";

const StopTimesPage = () => {
  const { stopId, routeId } = useLocalSearchParams<{
    stopId: string;
    routeId: string;
  }>();

  const { date, time } = useMemo(() => getDateTime(), []);
  const { isPending, error, data } = useQuery({
    queryKey: [`${routeId}-${stopId}`],
    queryFn: () => getStopTimes(stopId, routeId, date, time),
  });

  console.log(data, isPending);
};

export default StopTimesPage;
