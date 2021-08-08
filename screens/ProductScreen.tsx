import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import product from '../data/product';
import { Picker } from '@react-native-picker/picker';
import QuantitySelector from '../components/QuantitySelector';
import Button from '../components/Button';
import ImageCarousel from '../components/ImageCarousel';
import { useRoute } from '@react-navigation/native';
import { DataStore, Auth } from 'aws-amplify';
import { Product, CartProduct } from '../src/models';

const ProductScreen = () => {
  const [product, setProduct] = useState<Product | undefined>(undefined);

  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );
  const [quantity, setQuantity] = useState(1);

  const route = useRoute();

  useEffect(() => {
    if (!route.params?.id) {
      return;
    }
    DataStore.query(Product, route.params.id).then(setProduct);
  }, [route.params?.id]);

  useEffect(() => {
    if (product?.options) {
      setSelectedOption(product.options[0]);
    }
  }, [product]);

  const onAddToCart = async () => {
    const userData = await Auth.currentAuthenticatedUser();

    if (product || userData) {
      return;
    }

    const newCartProduct = new CartProduct({
      userSub: userData.attributes.sub,
      quantity,
      option: selectedOption,
      productID: product.id,
    });
    DataStore.save(newCartProduct);
  };

  if (!product) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
      {/*image caroise*/}
      <ImageCarousel images={product.images} />
      {/*option selection*/}
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}
      >
        {product.options?.map(option => (
          <Picker.Item label={option} value="option" />
        ))}
      </Picker>
      {/*Price*/}
      <Text style={styles.price}>
        from ${product.price.toFixed(2)}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice.toFixed(2)}</Text>
        )}
      </Text>
      {/*Description*/}
      <Text style={styles.description}>{product.description}</Text>
      {/*Quantities selection*/}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      {/*Button*/}
      <Button
        text={'Add To Cart'}
        onPress={onAddToCart}
        containerStyles={{ backgroundColor: '#e3c905' }}
      />
      <Button
        text={'Buy Now'}
        onPress={() => {
          console.warn('buy now');
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'darkgrey',
  },
  root: {
    padding: 10,
    backgroundColor: 'white',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
  },
});

export default ProductScreen;
