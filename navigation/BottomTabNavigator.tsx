/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/ProductScreen';
import TabThreeScreen from '../screens/ShoppingCartScreen';
import TabFourScreen from '../screens/AddressScreen';
import MenuScreen from '../screens/MenuScreen';

import HomeStack from '../navigation/HomeStack';
import ShoppingCartStack from '../navigation/ShoppingCartStack';

import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  TabThreeParamList,
  TabFourParamList,
  MenuParamList,
} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      tabBarOptions={{
        showLabel: false,
        inactiveTintColor: '#ffbd7d',
        activeTintColor: '#e47911',
      }}
      initialRouteName="TabOne"
      //tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        //component={TabOneNavigator}
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            //<TabBarIcon name="ios-code" color={color} />
            <FontAwesome name="home" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Product"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={ShoppingCartStack}
        options={{
          tabBarIcon: ({ color }) => (
            //<TabBarIcon name="ios-code" color={color} />
            <FontAwesome name="shopping-cart" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Person"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            //<TabBarIcon name="ios-code" color={color} />
            <Ionicons name="person-circle" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Menu"
        component={MenuNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            //<TabBarIcon name="ios-code" color={color} />
            <Entypo name="menu" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Home' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Product' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerTitle: 'Cart' }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="TabFourScreen"
        component={TabFourScreen}
        options={{ headerTitle: 'Address' }}
      />
    </TabFourStack.Navigator>
  );
}

const MenuStack = createStackNavigator<MenuParamList>();

function MenuNavigator() {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{ headerTitle: 'Menu' }}
      />
    </MenuStack.Navigator>
  );
}
