import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Hotels } from "../assets";
import MenuContainer from "../components/MenuContainer";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const Discover = () => {
  const navigation = useNavigation([]);
  const [type, setType] = useState();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-6 mt-5 space-y-3 flex-row justify-between">
        <View>
          <Text className="text-[#0B646B] text-[35px] font-bold">Discover</Text>
          <Text className="text-[#527576] text-[30px] ">the beauty today</Text>
        </View>
        <View className="w-12 h-12 ">
          <Image
            source={Avatar}
            className="h-full w-full rounded-md  shadow-lg "
          />
        </View>
      </View>
      <TextInput
        style={{ borderWidth: 1 }}
        placeholder="Search here..."
        className="w-[90%] mx-auto mt-5 px-5 rounded-md"
      />
      <ScrollView>
        <View className="flex-row  items-center px-8 mt-8 justify-between">
          <View className="h-[40px] w-[40] justify-center items-center">
            <Image
              source={Hotels}
              className="w-full h-full justify-center items-center"
            />
          </View>
          <View className="h-[40px] w-[40] justify-center items-center">
            <Image
              source={Hotels}
              className="w-full h-full justify-center items-center"
            />
          </View>
          <View className="h-[40px] w-[40] justify-center items-center">
            <Image
              source={Hotels}
              className="w-full h-full justify-center items-center"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
