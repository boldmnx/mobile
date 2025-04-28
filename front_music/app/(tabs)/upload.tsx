import React, { useState } from "react";
import { View, Text, Button, TextInput, Alert } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { useRouter } from "expo-router";

export default function UploadScreen() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const router = useRouter();

  const pickFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "audio/*",
      copyToCacheDirectory: true,
    });

    if (result.assets && result.assets.length > 0) {
      setFile(result.assets[0]);
    }
  };

  const upload = async () => {
    if (!file || !title) {
      Alert.alert("Алдаа", "Та дуу болон нэрийг оруулна уу!");
      return;
    }
    const response = await fetch(file.uri);
    const blob = await response.blob();
    const formData = new FormData();

    formData.append("file", blob, file.name);
    formData.append("title", title);
    try {
      const res = await fetch("http://127.0.0.1:8000/apimusic/", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();
      console.log(json);
      Alert.alert("Амжилттай!", "Дуу амжилттай нэмэгдлээ!");

      setFile(null);
      setTitle("");
      router.push("/");
    } catch (err) {
      console.log(err);
      Alert.alert(`Алдаа", "Сервертэй холбогдож чадсангүй: ${err}`);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, gap: 20, justifyContent: "center" }}>
      <Text style={{ fontSize: 22 }}>🎧 Дуу Upload хийх</Text>

      <TextInput
        placeholder="Дууны нэр"
        value={title}
        onChangeText={setTitle}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          padding: 10,
        }}
      />

      <Button title="🎵 Дуу сонгох" onPress={pickFile} />
      <Text>{file ? file.name : "Файл сонгогдоогүй байна"}</Text>

      <Button title="⬆️ Upload хийх" onPress={upload} color="green" />
    </View>
  );
}
