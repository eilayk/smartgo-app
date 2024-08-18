import { getStops } from '@/lib/api';
import globalStyles from '@/styles/globalStyles';
import { useQuery } from '@tanstack/react-query';
import { Link, Stack } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, Text } from 'react-native';

export default function FindStopPage() {
  const { isPending, error, data } = useQuery({
    queryKey: ['stops'],
    queryFn: getStops,
  });
  const [searchValue, setSearchValue] = useState('');
  const stops = data || [];

  if (isPending) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Stack.Screen
        options={{
          title: 'Select Stop',
          headerSearchBarOptions: {
            placeholder: 'Search',
            onChangeText: (e) => setSearchValue(e.nativeEvent.text),
          },
        }}
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
          ),
      )}
    </ScrollView>
  );
}
