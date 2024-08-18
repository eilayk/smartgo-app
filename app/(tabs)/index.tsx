import { useFavoriteStops } from "@/hooks/useFavoriteStops";
import globalStyles from "@/styles/globalStyles";
import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function SavedStops() {
  const { favoriteStops } = useFavoriteStops();
  return (
    <ScrollView>
      {favoriteStops.map((faveStop, index) => (
        <Link
          href={`/(tabs)/stopTimes/route/${faveStop.routeId}/stop/${faveStop.stopId}`}
          style={globalStyles.card}
          key={index}
        >
          <Text style={[globalStyles.cardText]}>{faveStop.stopName} </Text>
          <Text>{faveStop.routeName} Line</Text>
        </Link>
      ))}
    </ScrollView>
  );
}
