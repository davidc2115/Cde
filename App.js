import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import GestionScreen from './src/screens/GestionScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#6366f1',
            tabBarInactiveTintColor: '#6b7280',
            tabBarStyle: {
              backgroundColor: '#ffffff',
              borderTopColor: '#e5e7eb',
              borderTopWidth: 1,
            },
            headerShown: false,
          }}
        >
          <Tab.Screen 
            name="Gestion" 
            component={GestionScreen}
            options={{
              tabBarLabel: 'Gestion',
              tabBarIcon: ({ color }) => <Text style={{ fontSize: 24 }}>⚙️</Text>,
            }}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});
