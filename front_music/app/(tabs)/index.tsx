
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import { Swipeable } from "react-native-gesture-handler";

export default function HomeScreen() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/apimusic/", {
      //         //url: "http://issw.mandakh.org/apihabit/",

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "get_my_music" }),
    })
      .then((res) => res.json())
      .then((data) => setSongs(data.data))
      .catch((err) => console.log("aldaa:", err));
  }, []);

  const deleteSong = async (id: string) => {
    try {
      await fetch("http://127.0.0.1:8000/apimusic/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete_music", id }),
      });
      setSongs((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      Alert.alert("Алдаа", "Устгах үед алдаа гарлаа");
    }
  };

  const renderRightActions = (id: string) => (
    <TouchableOpacity
      style={{
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "flex-end",
        padding: 20,
        borderRadius: 8,
      }}
      onPress={() => deleteSong(id)}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>🗑️ Устгах</Text>
    </TouchableOpacity>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              + Дуу нэмэх
            </Text>
          </TouchableOpacity>
        </Link>

        <FlatList
          data={songs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Swipeable renderRightActions={() => renderRightActions(item.id)}>
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
            </Swipeable>
          )}
        />
      </View>
    </GestureHandlerRootView>
  );
}
