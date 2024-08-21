import { Stack } from 'expo-router';
import React from 'react';

export default function SearchLayout() {
  return (
    <Stack>
      <Stack.Screen name="findStop" options={{ title: 'Select Stop' }} />
      <Stack.Screen name="stop/[stopId]" options={{ title: 'Select Route' }} />
    </Stack>
  );
}
