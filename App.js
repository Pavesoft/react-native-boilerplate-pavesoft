import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BOTTOM_TABS_ROUTES from "./src/shared/constants/Routes.const";

const RootView = styled.View`
  height: 100%;
`;

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {BOTTOM_TABS_ROUTES.map((route) => {
        return (
          <Tab.Screen
            key={route.name}
            name={route.name}
            component={route.component}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const AppContainer = () => {
  return (
    <NavigationContainer>
      <RootView>
        <AppNavigator />
      </RootView>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <AppContainer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
