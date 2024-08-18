import React, { useMemo, useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { getStopTimes } from "@/lib/api";
import {
  ActivityIndicator,
  Text,
  ScrollView,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import globalStyles from "@/styles/globalStyles";
import { apiTimeToLocalTime, getDateTime } from "@/lib/utils.ts";
import FontAwesome from "@expo/vector-icons/FontAwesome";

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

  const [favourite, setFavourite] = useState(false);

  if (isPending) {
    return <ActivityIndicator />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <ScrollView>
      <Stack.Screen
        options={{
          title: "Departure Times",
          headerRight: () => (
            <Pressable onPress={() => setFavourite(!favourite)}>
              <FontAwesome name={favourite ? "star" : "star-o"} size={16} />
            </Pressable>
          ),
        }}
      />
      <Text style={[styles.bigText]}>{data?.routeName}</Text>
      <Text style={styles.mediumText}>{data?.stopName}</Text>

      {!data?.stopTimes && (
        <View style={globalStyles.card}>
          <Text style={globalStyles.cardText}>No trips scheduled today</Text>
        </View>
      )}

      {data?.stopTimes.map((stopTime, index) => (
        <View style={globalStyles.card} key={index}>
          <Text style={globalStyles.cardText}>{stopTime.headsign}</Text>
          <Text>
            time:{" "}
            {apiTimeToLocalTime(stopTime.arrivalTime) ||
              apiTimeToLocalTime(stopTime.actualArrivalTime)}
          </Text>
          <Text>
            platform: {stopTime.actualPlatform || stopTime.scheduledPlatform}
          </Text>
          <Text>length: {stopTime.trainLength}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bigText: {
    fontSize: 40,
    marginHorizontal: 8,
    marginTop: 8,
  },
  mediumText: {
    fontSize: 20,
    marginHorizontal: 8,
    marginBottom: 8,
  },
});

export default StopTimesPage;
