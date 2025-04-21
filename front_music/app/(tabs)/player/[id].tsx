// app/player/[id].tsx
import { useLocalSearchParams } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function PlayerScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Now Playing</Text>
      <Text style={{ fontSize: 16 }}>Song ID: {id}</Text>
      <Button title="Play ▶️" onPress={() => alert('Playing song...')} />
    </View>
  );
}
