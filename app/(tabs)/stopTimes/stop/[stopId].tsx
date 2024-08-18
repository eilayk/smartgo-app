import { getRoutesForStop } from '@/lib/api';
import globalStyles from '@/styles/globalStyles';
import { useQuery } from '@tanstack/react-query';
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, ScrollView, Text } from 'react-native';

export const RoutesPerStopPage = () => {
  const { stopId }: { stopId?: string } = useLocalSearchParams();
  const { isPending, error, data } = useQuery({
    queryKey: [`${stopId}/routes`],
    queryFn: () => getRoutesForStop(stopId),
  });

  const routes = data || [];

  if (isPending) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView>
      <Stack.Screen options={{ title: 'Select Route' }} />
      {routes.map((route, index) => (
        <Link
          key={index}
          href={`/(tabs)/stopTimes/route/${route.routeId}/stop/${stopId}`}
          style={globalStyles.card}
        >
          <Text style={globalStyles.cardText}>{route.routeName}</Text>
        </Link>
      ))}
    </ScrollView>
  );
};

export default RoutesPerStopPage;
