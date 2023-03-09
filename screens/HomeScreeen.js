import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeroImage } from "../assets";

const HomeScreeen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full justify-center items-center">
          <Text className="text-[#4DABB7] text-2xl font-semibold ">Go</Text>
        </View>
        <Text className="text=[2A2B4B] text-2xl font-semibold">Travel</Text>
      </View>
      <View className="px-6 mt-5 space-y-3">
        <Text className="text-[#3C6072] text-[35px]">Enjoy the trip with</Text>
        <Text className="text-[#4DABB7] text-[35px] font-bold ">
          Good Moments
        </Text>
        <Text className="text-[#3C6072] text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </View>
      <View className="w-[300px] h-[300px] bg-[#4DABB7] rounded-full  absolute bottom-20 -right-36"></View>
      <View className="w-[300px] h-[300px] bg-[#E99] rounded-full  absolute bottom-[-50] -left-36"></View>
      <View className="flex-1 relative items-center justify-center">
        <Image source={HeroImage} className="w-80 h-full mt-10" />

        <View className="absolute border-l-2 border-r-2 border-t-4 border-[#4DABB7]  bottom-20 w-24 h-24 rounded-full items-center justify-center">
          <TouchableOpacity>
            <View className="bg-[#4DABB7]  w-20 h-20 rounded-full items-center justify-center">
              <Text className="text-gray-50 text-[30px] font-semibold">Go</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreeen;
