// app/index.tsx
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const songs = [
  { id: "1", title: "Song One" },
  { id: "2", title: "Song Two" },
  { id: "3", title: "Song Three" },
];

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>🎵 Music List</Text>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/player/${item.id}`} asChild>
            <TouchableOpacity
              style={{
                padding: 15,
                backgroundColor: "#eee",
                marginBottom: 10,
                borderRadius: 8,
              }}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}
