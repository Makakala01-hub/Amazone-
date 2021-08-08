import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import countryList from 'country-list';
import Button from '../components/Button';

const countries = countryList.getData();

const AddressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('Invalid Address');
  const [city, setCity] = useState('');

  const onCheckout = () => {
    if (addressError) {
      Alert.alert('Fix all field errors before submiting');
      return;
    }
    if (!fullname) {
      Alert.alert('Please fill in the fullame field');
      return;
    }
    if (!phone) {
      Alert.alert('Please fill in the phone field');
      return;
    }
    console.warn('Success. CheckOut');
  };

  const validateAddress = () => {
    if (address.length < 3) {
      setAddressError('Address is too Short');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 150 : 0}
    >
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <Picker selectedValue={country} onValueChange={setCountry}>
            {countries.map(country => (
              <Picker.Item value={country.code} label={country.name} />
            ))}
          </Picker>
        </View>

        {/*Fullname*/}
        <View style={styles.row}>
          <Text style={styles.label}>Full Name (First and Last Name)</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullname}
            onChangeText={setFullname}
          />
        </View>

        {/*Phone*/}
        <View style={styles.row}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType={'phone-pad'}
          />
        </View>

        {/*Address*/}
        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Street address or P.O Box"
            value={address}
            onEndEditing={validateAddress}
            onChangeText={text => {
              setAddress(text);
              setAddressError('');
            }}
          />
          {!!addressError && (
            <Text style={styles.errorLabel}>{addressError}</Text>
          )}
        </View>

        {/*City*/}
        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
        </View>

        <Button text="CheckOut" onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  row: {
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    height: 40,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 4,
  },
  errorLabel: {
    color: 'red',
  },
});

export default AddressScreen;
