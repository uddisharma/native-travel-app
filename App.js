import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
// import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreeen from "./screens/HomeScreeen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreeen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
