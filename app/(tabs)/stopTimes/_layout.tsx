import React from 'react';
import { Stack } from 'expo-router';

export default function StopTimesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="route/[routeId]/stop/[stopId]"
        options={{ title: 'Departure Times' }}
      />
    </Stack>
  );
}
