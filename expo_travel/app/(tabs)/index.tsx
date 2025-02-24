import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput} from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import ongo from "@/constants/Colors"
import {useHeaderHeight} from "@react-navigation/elements"
import CategoryButtons from "@/components/CategoryButtons";

const Page = () => {
  const headerHeight = useHeaderHeight();

  return (
    <>
    <Stack.Screen
      options={{
        headerTransparent: true,
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
            <Image
              source={{
                uri: "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              style={{ width: 40, height: 40, borderRadius: 10 }}
            ></Image>
          </TouchableOpacity>
        ),
         headerRight:() => (
          <TouchableOpacity onPress={() => {}} 
          style={{
            marginRight:20,
            backgroundColor: ongo.white,
            padding: 10,
            borderRadius: 10,
            shadowColor: "#171717",
            shadowOffset: { width:2 , height:4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
          >
            <Ionicons name="notifications" size={20} color={ongo.black}></Ionicons>

          </TouchableOpacity>
        ),
      }}
    />
    <View style={[styles.container, {paddingTop:headerHeight}]} >
      <Text style={styles.headingTxt}> Explore The Beautifil World!</Text>
      <View style={styles.searchSectionWrapper}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} style={{marginRight:5}} color={ongo.black}></Ionicons>
          <TextInput placeholder="Search ..."/>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
          <Ionicons name="options" size={28}></Ionicons>
        </TouchableOpacity>
      </View>
      <CategoryButtons/>
    </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    backgroundColor: ongo.bgColor
  },
  headingTxt:{
    fontSize: 28,
    fontWeight: '800',
    color: ongo.black,
    marginTop: 10,
  },
  searchSectionWrapper:{
    flexDirection:'row',
    marginVertical:20,

  },
  searchBar:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: ongo.white,
    padding:16,
    borderRadius:10,
  },
  filterBtn:{
    backgroundColor: ongo.primaryColor,
    padding: 12, 
    borderRadius: 10,
    marginLeft:20,
  }
});
