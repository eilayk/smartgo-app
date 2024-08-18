import { Stack } from 'expo-router';

export default function StopTimesLayout() {
  return (
    <Stack>
      <Stack.Screen name="findStop" options={{ title: 'Select Stop' }} />
      <Stack.Screen name="stop/[stopId]" options={{ title: 'Select Route' }} />
      <Stack.Screen
        name="route/[routeId]/stop"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
