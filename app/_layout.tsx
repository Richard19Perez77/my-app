import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index" // This corresponds to your index.tsx file
        options={{
          title: "Story Game", // Set a custom title
          headerStyle: { backgroundColor: "#007BFF" }, // Customize header style
          headerTintColor: "#fff", // Change text color
          headerTitleStyle: { fontWeight: "bold" }, // Customize title style
        }}
      />
    </Stack>
  );
}
