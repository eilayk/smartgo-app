import { getRoutesForStop } from '@/lib/api';
import globalStyles from '@/styles/globalStyles';
import { useQuery } from '@tanstack/react-query';
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView, Text } from 'react-native';

export const RoutesPerStopPage = () => {
  const { stopId }: { stopId?: string } = useLocalSearchParams();
  const {
    isPending,
    error,
    data: routes,
  } = useQuery({
    queryKey: [`${stopId}/routes`],
    queryFn: () => getRoutesForStop(stopId),
  });

  const router = useRouter();

  useEffect(() => {
    if (routes?.length === 1) {
      router.back();
      router.push(`/stopTimes/route/${routes[0].routeId}/stop/${stopId}`);
    }
  }, [router, routes, stopId]);

  if (isPending) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView>
      <Stack.Screen options={{ title: 'Select Route' }} />
      {routes?.map((route, index) => (
        <Link
          key={index}
          href={`/stopTimes/route/${route.routeId}/stop/${stopId}`}
          style={globalStyles.card}
        >
          <Text style={globalStyles.cardText}>{route.routeName}</Text>
        </Link>
      ))}
    </ScrollView>
  );
};

export default RoutesPerStopPage;
