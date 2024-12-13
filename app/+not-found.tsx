import React from "react";
import { Link, Stack } from "expo-router";
import { View } from "react-native";

export default function NotFoundScreen() {
  <>
    <Stack.Screen options={{ title: "Oops! Not found!" }} />
    <View className="container">
      <Link
        href="/"
        className="text underline hover:opacity-50"
      >
        Go back to Home screen
      </Link>
    </View>
  </>;
}
