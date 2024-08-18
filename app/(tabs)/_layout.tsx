import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Favourites",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="star" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="findStop"
        options={{
          title: "Find Stop",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="search" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stopTimes"
        options={{
          headerShown: false,
          href: null,
        }}
      />
    </Tabs>
  );
}
