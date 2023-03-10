import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const BuyNow = ({ route }) => {
  const navigation = useNavigation();

  const data = route?.params?.param;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <Text className="pt-10 text-[35px] m-auto text-[#0B646B] font-bold">
        Enter Your Details
      </Text>
      <TextInput
        style={{ borderWidth: 1 }}
        placeholder="Name"
        className="w-[90%] mx-auto mt-5 px-5 rounded-md h-[40px]"
      />
      <TextInput
        style={{ borderWidth: 1 }}
        placeholder=" Full Address"
        className="w-[90%] mx-auto mt-5 px-5 rounded-md h-[40px]"
      />
      <TextInput
        style={{ borderWidth: 1 }}
        placeholder="Land Mark"
        className="w-[90%] mx-auto mt-5 px-5 rounded-md h-[40px]"
      />
      <TextInput
        style={{ borderWidth: 1 }}
        placeholder="Phone Number"
        className="w-[90%] mx-auto mt-5 px-5 rounded-md h-[40px]"
      />
      <TextInput
        style={{ borderWidth: 1 }}
        placeholder="Email Address"
        className="w-[90%] mx-auto mt-5 px-5 rounded-md h-[40px]"
      />
      {/* <TouchableOpacity
        className="rounded-md shadow-md"
        onPress={() => navigation.navigate("Home")}
      > */}
      {/* <View className=" w-[90%] m-auto  rounded-lg bg-[#0B646B] items-center justify-center "> */}
      <View className="w-[90%] m-auto mt-5">
        <Button
          onPress={() => navigation.navigate("Home")}
          title="Confirm Order"
          color="#0B646B"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      {/* </TouchableOpacity> */}
    </View>
  );
};

export default BuyNow;
