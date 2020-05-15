import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, BackHandler, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from "./screens/SignUpScreen";
// import LoginScreen
// import WelcomeScreen from './screens/WelcomeScreen';
// import VillageSetupScreen from './screens/VillageSetupScreen';
// import SplashRedirectionScreen from './screens/SplashRedirectionScreen';


const Stack = createStackNavigator();

export default function App(props) {
    return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <NavigationContainer >
            <Stack.Navigator initialRouteName="SignUpScreen">
              <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
