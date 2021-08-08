import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import { SafeAreaView, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: () => void;
}

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#22e3dd' }}>
      <View
        style={{
          margin: 10,
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 8,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <FontAwesome name="search" size={20} color="black" />
        <TextInput
          style={{
            height: 30,
            marginLeft: 10,
          }}
          placeholder="Searching ..."
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}
    >
      <Stack.Screen
        //component={HomeScreen}
        name="HomeScreen"
        options={{ title: 'Home' }}
      >
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen component={ProductScreen} name="ProductDetails" />
    </Stack.Navigator>
  );
};

export default HomeStack;
