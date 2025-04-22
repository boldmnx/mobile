import { useLocalSearchParams } from "expo-router";
import { View, Text, Button } from "react-native";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";

export default function PlayerScreen() {
  const { id } = useLocalSearchParams();
  const [song, setSong] = useState(null);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const fetchSongById = async () => {
    const res = await fetch("http://127.0.0.1:8000/apimusic/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "get_my_music" }),
    });

    const json = await res.json();
    const selected = json.data.find((s: any) => s.id == id);
    setSong(selected);
  };

  const playSound = async () => {
    if (!song || isPlaying || !song.audio_url) return;

    const { sound } = await Audio.Sound.createAsync({ uri: song.audio_url });
    setSound(sound);
    await sound.playAsync();
    setIsPlaying(true);
  };

  const stopSound = async () => {
    if (sound && isPlaying) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setIsPlaying(false);
      setSound(null);
    }
  };

  useEffect(() => {
    fetchSongById();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {!song ? (
        <Text>Loading song...</Text>
      ) : (
        <>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>Now Playing</Text>
          <Text style={{ fontSize: 16, marginBottom: 20 }}>{song.title}</Text>
          <Button title="Play ▶️" onPress={playSound} disabled={isPlaying} />
          <View style={{ marginTop: 10 }} />
          <Button title="Stop ⏹️" color="red" onPress={stopSound} />
        </>
      )}
    </View>
  );
}
