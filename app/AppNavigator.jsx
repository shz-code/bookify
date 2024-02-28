import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./Screens/Details";
import Home from "./Screens/Home";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={({ route }) => ({
          title: `${route.params.book.name} Details`,
          headerStyle: {
            backgroundColor: "#1B1A55",
          },
          headerTintColor: "#fff",
        })}
        name="Details"
        component={Details}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
