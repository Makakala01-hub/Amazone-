import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import QuantitySelector from '../QuantitySelector';

interface CartProductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      price: number;
      oldPrice?: number;
    };
  };
}

const CartProductItem = ({ cartItem }: CartProductItemProps) => {
  const { quantity: quantityProp, item } = cartItem;

  const [quantity, setQuantity] = useState(quantityProp);
  return (
    <View>
      <View style={styles.root}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          {/*Ratings*/}
          <View style={styles.ratingContainer}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                key={`${item.id}-id`}
                style={styles.star}
                name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                size={18}
                color="#e47911"
              />
            ))}

            <Text>{item.avgRating}</Text>
          </View>
          {/*Price*/}
          <Text style={styles.price}>from ${item.price}</Text>
          {item.oldPrice && <Text style={styles.oldPrice}>${item.price}</Text>}
        </View>
      </View>
      <View style={styles.quantitySelector}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    margin: 10,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
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
  rightContainer: {
    padding: 10,
    width: '100%',
    flex: 3,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
  quantitySelector: {
    marginVertical: 10,
    marginLeft: 13,
  },
});

export default CartProductItem;
