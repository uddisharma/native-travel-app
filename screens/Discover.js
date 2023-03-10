import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Attractions, Avatar, Hotels, Restaurants } from "../assets";
import MenuContainer from "../components/MenuContainer";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import axios from "axios";
const Discover = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState("India");
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  // console.log(data);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-6 mt-5 space-y-3 flex-row justify-between">
        <View>
          <Text className="text-[#0B646B] text-[35px] font-bold">Discover</Text>
          <Text className="text-[#527576] text-[30px] ">the beauty today</Text>
        </View>
        <View className="w-12 h-12 ">
          <Image source={Avatar} className="h-full w-full rounded-md" />
        </View>
      </View>
      <TextInput
        style={{ borderWidth: 1 }}
        placeholder="Search here..."
        className="w-[90%] mx-auto mt-5 px-5 rounded-md h-[40px]"
      />
      <ScrollView className="mt-5">
        <View className="flex-row  items-center px-8 mt-8 justify-between">
          <View className="h-[70px] w-[90] justify-center items-center">
            <Image
              source={Hotels}
              className="w-full h-[80%] justify-center items-center"
            />
            <Text className="text-[#0B646B] text-[15px] font-bold">Hotels</Text>
          </View>
          <View className="h-[70px] w-[90] justify-center items-center">
            <Image
              source={Restaurants}
              className="w-full h-[80%] justify-center items-center"
            />
            <Text className="text-[#0B646B] text-[15px] font-bold">
              Restaurants
            </Text>
          </View>
          <View className="h-[70px] w-[90] justify-center items-center">
            <Image
              source={Attractions}
              className="w-full h-[80%] justify-center items-center"
            />
            <Text className="text-[#0B646B] text-[15px] font-bold">
              Attractions
            </Text>
          </View>
        </View>
        <View className="mt-10 flex-row flex-wrap justify-evenly">
          {data.length > 0 ? (
            data.map((e) => (
              <TouchableOpacity
                className="rounded-md shadow-md"
                key={e.id}
                onPress={() => navigation.navigate("ItemScreen", { param: e })}
              >
                <View style={{ borderWidth: 1 }} className="p-5 m-2">
                  <View className="h-[200px] w-[120px]">
                    <Image
                      source={{ uri: e.image }}
                      className="w-full h-[120px] justify-center items-center"
                    />
                    <Text className="text-[#0B646B] text-base font-bold justify-center items-center mt-5">
                      {e.title.slice(0, 20)}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
