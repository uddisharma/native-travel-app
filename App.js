import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
// import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreeen from "./screens/HomeScreeen";
import Discover from "./screens/Discover";
import ItemScreen from "./screens/ItemScreen";
import BuyNow from "./screens/BuyNow";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreeen} />
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
        <Stack.Screen name="BuyNow" component={BuyNow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
