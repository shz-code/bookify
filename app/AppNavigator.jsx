import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Details from "./Screens/Details";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import { primaryColor } from "./styles/styles";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const checkStorage = async () => {
      try {
        let storage = await AsyncStorage.getItem("auth");
        if (storage) {
          storage = JSON.parse(storage);
          if (new Date(storage.expiresIn) > new Date()) {
            dispatch(
              userLoggedIn({ email: storage.email, localId: storage.userId })
            );
          } else {
            dispatch(userLoggedOut());
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (!userId) {
      checkStorage();
    }
    setAuthChecked(true);
  }, [userId]);

  return (
    authChecked && (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: `${primaryColor}`,
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options={({ route }) => ({
            title: `${route.params.book.name} Details`,
          })}
          name="Details"
          component={Details}
        />
        {!userId && (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    )
  );
};

export default AppNavigator;
