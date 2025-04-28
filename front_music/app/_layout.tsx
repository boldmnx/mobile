import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#222" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        title: "#",
      }}
    />
  );
}
