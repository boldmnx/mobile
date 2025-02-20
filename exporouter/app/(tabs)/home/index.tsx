import { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Image } from "expo-image";
// import { data } from "../data/data";
import { AntDesign } from "@expo/vector-icons";

const index = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("United States");
  const [isHovered, setIsHovered] = useState("");
  const [countryData, setCountryData] = useState({});

  const data1 = [
    {
      name: "Apple Inc.",
      headquarters: "Cupertino, California, USA",
      employees: 154000,
      revenue_billion: 394.3,
      industry: "Technology",
      products: ["iPhone", "Mac", "iPad"],
      icon: "apple",
    },
    {
      name: "Google",
      headquarters: "Mountain View, California, USA",
      employees: 190234,
      revenue_billion: 280.9,
      industry: "Technology",
      products: ["Search", "Android", "YouTube"],
      icon: "google",
    },
    {
      name: "Tesla",
      headquarters: "Austin, Texas, USA",
      employees: 127855,
      revenue_billion: 81.5,
      industry: "Automotive",
      products: ["Model S", "Model 3", "Cybertruck"],
      icon: "car",
    },
    {
      name: "Amazon",
      headquarters: "Seattle, Washington, USA",
      employees: 1608000,
      revenue_billion: 469.8,
      industry: "E-commerce",
      products: ["AWS", "Prime", "Kindle"],
      icon: "shoppingcart",
    },
    {
      name: "Microsoft",
      headquarters: "Redmond, Washington, USA",
      employees: 221000,
      revenue_billion: 211.9,
      industry: "Technology",
      products: ["Windows", "Azure", "Xbox"],
      icon: "windows",
    },
    {
      name: "Coca-Cola",
      headquarters: "Atlanta, Georgia, USA",
      employees: 79000,
      revenue_billion: 43.0,
      industry: "Beverages",
      products: ["Coca-Cola", "Sprite", "Fanta"],
      icon: "drink",
    },

    {
      name: "BMW",
      headquarters: "Munich, Germany",
      employees: 133778,
      revenue_billion: 129.5,
      industry: "Automotive",
      products: ["Series 3", "X5", "i8"],
      icon: "car",
    },
  ];

  useEffect(() => {
    // Fetch the JSON data
    // fetch("http://localhost:8081/data/data.json")
    //   .then((response) => response.json())
    //   .then((data) => setCountries(data))
    //   .catch((error) => console.error("Error fetching data:", error));
    setCountries(data1);
    // console.log(countries);
  }, []);

  const selectCategory = (country) => {
    setSelectedCountry(country.name);
    setCountryData(country);
  };

  return (
    <SafeAreaView>
      <Text>Home page</Text>
      <Text style={{ fontSize: 20, fontWeight: 600 }}>Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {countries.map((country, index) => (
          <Pressable
            onPress={() => {
              selectCategory(country);
            }}
          >
            <View
              onMouseEnter={() => setIsHovered(country.name)} // Trigger hover state
              onMouseLeave={() => setIsHovered("")} // Revert hover state
              style={[
                {
                  margin: 10,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    selectedCountry == country.name ? "orange" : "white",
                  paddingHorizontal: 8,
                  borderRadius: 10,
                  flexDirection: "row",
                },

                isHovered == country.name && selectedCountry != country.name
                  ? styles.hovered
                  : null, // Apply hover style conditionally
              ]}
            >
              <AntDesign
                name={country.icon}
                size={12}
                color={selectedCountry === country.name ? "white" : "black"}
              />
              <Text
                style={{
                  color: selectedCountry == country.name ? "white" : "black",
                }}
              >
                {" "}
                {country.name}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
      <Text> {countryData.name} </Text>

      <Link href="/user/1">Go To user 1</Link>

      <Pressable
        onPress={() =>
          router.push({
            pathname: "/user/[id]",
            params: { id: 2, ipro: "ip" },
          })
        }
      >
        <Text>Go to user 2</Text>
      {"\n"}
      </Pressable>
      <Pressable
        onPress={() => {
          router.push({
            pathname: "/home/Home2",
            params: { id: 2, ipro: "ip" },
          });
        }}
        >
        {"\n"}
        <Image
          style={{ height: 100, width: 100 }}
          source="https://picsum.photos/seed/999/3000/2000"
          contentFit="cover"
          transition={1000}
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  hovered: {
    backgroundColor: "#ddd", 
    transform: [{ scale: 1.05 }], 
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});
