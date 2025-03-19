import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { HapticPressable } from "@/components/atoms/interactive/HapticPressable";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:
          Colors[colorScheme ?? "light"].primary.base,
        headerShown: false,
        tabBarButton: HapticPressable,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="analytics/index"
        options={{
          title: "Analytics",
          tabBarIcon: ({ color }) => (
            <Ionicons name="analytics" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="diaries/index"
        options={{
          title: "Diaries",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="post-add"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(data)"
        options={{
          title: "New Record",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="friends/index"
        options={{
          title: "Friends",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="message"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="settings"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
