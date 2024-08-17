import Search from "@/components/common/Search";
import { getStops } from "@/lib/api";
import globalStyles from "@/styles/globalStyles";
import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, ScrollView, Text } from "react-native";

export default function FindStopPage() {
  const { isPending, error, data } = useQuery({
    queryKey: ["stops"],
    queryFn: getStops,
  });
  const [searchValue, setSearchValue] = useState("");
  const stops = data || [];

  if (isPending) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView>
      <Search
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder="find stop"
      />
      {stops.map(
        (stop, index) =>
          stop.stopName.toLowerCase().includes(searchValue.toLowerCase()) && (
            <Link
              key={index}
              href={`/(tabs)/stopTimes/stop/${stop.stopId}`}
              style={globalStyles.card}
            >
              <Text style={globalStyles.cardText}>{stop.stopName}</Text>
            </Link>
          )
      )}
    </ScrollView>
  );
}
