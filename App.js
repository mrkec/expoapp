import { StyleSheet } from "react-native";
import React from "react";
import First from "./screens/First";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Auth/Login";
import SignUp from "./screens/Auth/SignUp";
import Home from "./screens/Home";
import AllPlans from "./screens/AllPlans";

import { TokenProvider } from "./store/TokenContext";
import PlanDetails from "./screens/PlanDetails";
import Contact from "./screens/Contact";
import About from "./screens/About";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <TokenProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="first">
          <Stack.Screen
            name="first"
            component={First}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="signup"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="plans"
            component={AllPlans}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="plandetails"
            component={PlanDetails}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="contact"
            component={Contact}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="about"
            component={About}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TokenProvider>
  );
}

const styles = StyleSheet.create({});
// export default App;
