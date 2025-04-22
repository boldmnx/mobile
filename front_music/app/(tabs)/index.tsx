// app/index.tsx
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const [songs, setSongs] = useState();
  useEffect(() => {
    fetch("http://127.0.0.1:8000/apimusic/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "get_my_music" }),
    })
      .then((res) => res.json())
      .then((data) => setSongs(data.data)) // assuming 'data.data' is your array
      .catch((err) => console.log("aldaa:", err));
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>🎵 Music List</Text>
      <Link href="/upload" asChild>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: "#5cb85c",
            marginBottom: 20,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>+ Дуу нэмэх</Text>
        </TouchableOpacity>
      </Link>
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
