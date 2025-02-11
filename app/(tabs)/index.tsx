import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  useWindowDimensions,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import AntDesign from "@expo/vector-icons/AntDesign";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ccc" }}>
    <ScrollView showsHorizontalScrollIndicator={false}>
      {/*  -----------------------------------------------------------------------------0*/}
      <View style={{ height: 150 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{
            alignItems: "center",
            // justifyContent: "space-around",
            flexDirection: "row",

            // height: 150,
            //borderWidth: 1,
          }}
        >
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://media.istockphoto.com/id/174857109/photo/idea-design-invention.jpg?s=1024x1024&w=is&k=20&c=7hH6AwG5-7jThj8pjLXAgIRwKcJ4rw9Yk-6pmilVzlI=",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://media.istockphoto.com/id/1127720610/photo/view-of-the-city-and-skyscrapers-in-the-center-of-moscow.jpg?s=612x612&w=is&k=20&c=vbhtw3H9kiRtGef6QMUNwn-cZ0e0_1HTehFN0BVILL8=",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://media.istockphoto.com/id/176126910/photo/napoleon-as-first-consul-postage-stamp.jpg?s=612x612&w=is&k=20&c=1Uz4YX0GPOB7t9Hodpnout8qdlDWevWNTCc3MjHQxnQ=",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://media.istockphoto.com/id/1479795356/photo/josephine-by-josef-manes.jpg?s=1024x1024&w=is&k=20&c=miq_uoARaz0NJfulGUKz73z6FV27sHIN0MyfYqa-xXk=",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://media.istockphoto.com/id/465742403/photo/hand-draw-valentines-day-design-labels-icons-elements-collection.jpg?s=612x612&w=is&k=20&c=z9KN6zN5WUlfkVisVZL9vTFaB89p_I0SBIYe67ZUshs=",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://media.istockphoto.com/id/1459855243/photo/garlic-and-pepper-prawn-with-fried-egg.jpg?s=612x612&w=is&k=20&c=fBvHu6aPCv8pLor7nuMlaIdQAtHi_wVEwqQdD4T9Dig=",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=is&k=20&c=B5GCusry9f4_eF7io_pDGB4cVZ5Itbf9uGaJEGFGXsA=",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://media.istockphoto.com/id/1482199015/photo/happy-puppy-welsh-corgi-14-weeks-old-dog-winking-panting-and-sitting-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=XCKHaoM9oG4ST-sLawqYyutywWXkx3DYWb4MKhLUBrI=",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://media.istockphoto.com/id/1354939778/photo/close-up-of-a-roaring-lion.jpg?s=612x612&w=is&k=20&c=oHkVgCEhiSnfyVqliPbIQIUIzo3oYvwVEEphophj5pg=",
            }}
          />
        </ScrollView>
      </View>

      {/* Энэ сарын онцлох -------------------------------------------------------------1*/}
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: 800, marginLeft: 20 }}>
          Энэ сарын онцлох
        </Text>
        <AntDesign name="star" size={18} color="gold" />
      </View>

      <View style={{}}>
        <Text style={{ fontSize: 10, marginLeft: 20 }}>Аудио ном</Text>
      </View>

      <View style={{ height: 110 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // Ойн гол
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1472396961693-142e6e269027", // Далайн эрэг
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1448375240586-882707db888b", // Намрын ой
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1519681393784-d120267933ba", // Голын эрэг
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a", // Цөлийн элсэн манхан
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29", // Ойн гүн
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1476610182048-b716b8518aae", // Галт уул
            }}
          />
        </ScrollView>
      </View>

      {/* Хайрыг өгүүлэх нь -------------------------------------------------------------2*/}
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Text style={{ fontWeight: 800, marginLeft: 20 }}>
          Хайрыг өгүүлэх нь
        </Text>
        <AntDesign name="star" size={18} />
      </View>

      <View style={{}}>
        <Text style={{ fontSize: 10, marginLeft: 20 }}>
          Сонсдог ном бэлэглээрэй
        </Text>
      </View>

      <View style={{ height: 110 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e",
            }}
          />
        </ScrollView>
      </View>

      {/*Анх удаа ном сонсох гэж байна уу?-------------------------------------------------------------*/}
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: 800, marginLeft: 20, marginTop: 20 }}>
          Анх удаа ном сонсох гэж байна уу?
        </Text>
      </View>

      <View style={{}}>
        <Text style={{ fontSize: 10, marginLeft: 20 }}>
          Унших завгүй бол СОНСООД үз
        </Text>
      </View>

      <View style={{ height: 110 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1512820790803-83ca734da794", // Номын тавиур
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1491841651911-c44c30c34548", // Номтой хүн
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1519681393784-d120267933ba", // Ширээн дээрх ном
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1516979187457-637abb4f9353", // Номын дэлгүүр
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f", // Гэрэлтэй ном
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1528222354212-a29573cdb844", // Кофе ба ном
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea", // Ном уншиж буй хүн
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1516979187457-637abb4f9353", // Номын сангийн булан
            }}
          />
        </ScrollView>
      </View>

      {/* Зөвхөн Mbook-ээс -------------------------------------------------------------*/}
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: 800, marginLeft: 20, marginTop: 20 }}>
          Зөвхөн Mbook-ээс{" "}
        </Text>
      </View>

      <View style={{}}>
        <Text style={{ fontSize: 10, marginLeft: 20 }}>Аудио ном</Text>
      </View>

      <View style={{ height: 110 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1560807707-8cc77767d783", // Нохой
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1574158622682-e40e69881006", // Муур
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1501703979959-797917eb21c8", // Шувуу
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1546182990-dffeafbe841d", // Арслан
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13", // Заан
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1548767797-d756b6c10ef1", // Халуун орны загас
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb", // Хамелеон
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://images.unsplash.com/photo-1517849845537-4d257902454a", // Панда
            }}
          />
        </ScrollView>
      </View>

      {/* Багц номууд -------------------------------------------------------------*/}
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontWeight: 800, marginLeft: 20, marginTop: 20 }}>
          Багц номууд
        </Text>
      </View>

      <View style={{ height: 110 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{
            alignItems: "center",
            //justifyContent: "space-around",
            flexDirection: "row",

            // height: 150,
            //borderWidth: 1,
          }}
        >
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://media.istockphoto.com/id/174857109/photo/idea-design-invention.jpg?s=1024x1024&w=is&k=20&c=7hH6AwG5-7jThj8pjLXAgIRwKcJ4rw9Yk-6pmilVzlI=",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://media.istockphoto.com/id/1127720610/photo/view-of-the-city-and-skyscrapers-in-the-center-of-moscow.jpg?s=612x612&w=is&k=20&c=vbhtw3H9kiRtGef6QMUNwn-cZ0e0_1HTehFN0BVILL8=",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://media.istockphoto.com/id/176126910/photo/napoleon-as-first-consul-postage-stamp.jpg?s=612x612&w=is&k=20&c=1Uz4YX0GPOB7t9Hodpnout8qdlDWevWNTCc3MjHQxnQ=",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://media.istockphoto.com/id/1479795356/photo/josephine-by-josef-manes.jpg?s=1024x1024&w=is&k=20&c=miq_uoARaz0NJfulGUKz73z6FV27sHIN0MyfYqa-xXk=",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://media.istockphoto.com/id/465742403/photo/hand-draw-valentines-day-design-labels-icons-elements-collection.jpg?s=612x612&w=is&k=20&c=z9KN6zN5WUlfkVisVZL9vTFaB89p_I0SBIYe67ZUshs=",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://media.istockphoto.com/id/1459855243/photo/garlic-and-pepper-prawn-with-fried-egg.jpg?s=612x612&w=is&k=20&c=fBvHu6aPCv8pLor7nuMlaIdQAtHi_wVEwqQdD4T9Dig=",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=is&k=20&c=B5GCusry9f4_eF7io_pDGB4cVZ5Itbf9uGaJEGFGXsA=",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://media.istockphoto.com/id/1482199015/photo/happy-puppy-welsh-corgi-14-weeks-old-dog-winking-panting-and-sitting-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=XCKHaoM9oG4ST-sLawqYyutywWXkx3DYWb4MKhLUBrI=",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://media.istockphoto.com/id/1354939778/photo/close-up-of-a-roaring-lion.jpg?s=612x612&w=is&k=20&c=oHkVgCEhiSnfyVqliPbIQIUIzo3oYvwVEEphophj5pg=",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.imgContainer}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </ScrollView>
      </View>
    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }}></View>
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  a: ThirdRoute,
  b: ThirdRoute,
  c: ThirdRoute,
  d: ThirdRoute,
  e: ThirdRoute,
  f: ThirdRoute,
  g: ThirdRoute,
  h: ThirdRoute,
  i: ThirdRoute,
});

const routes = [
  { key: "first", title: "Танд зориулсан" },
  { key: "second", title: "Аудио ном" },
  { key: "third", title: "Цахим ном" },
  { key: "a", title: "Цахим ном" },
  { key: "b", title: "Цахим ном" },
  { key: "c", title: "Цахим ном" },
  { key: "d", title: "Цахим ном" },
  { key: "e", title: "Цахим ном" },
  { key: "f", title: "Цахим ном" },
  { key: "g", title: "Цахим ном" },
  { key: "h", title: "Цахим ном" },
  { key: "i", title: "Цахим ном" },
];

export default function index() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            scrollEnabled={true} // Tab-ууд гүйлгэх боломжтой болно
            style={{ backgroundColor: "purple" }}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  imgContainer: {
    height: 100,
    width: 100,
    marginRight: 10,
    marginLeft: 20,
  },
  txtContainer: {
    marginLeft: 20,
  },
});
