import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = ({ item }: ProductItemProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    console.warn('item pressed');
    navigation.navigate('ProductDetails', { id: item.id });
  };
  return (
    <Pressable onPress={onPress} style={styles.root}>
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
        <Text style={styles.price}>from ${item.price.toFixed(2)}</Text>
        {item.oldPrice && (
          <Text style={styles.oldPrice}>${item.oldPrice.toFixed(2)}</Text>
        )}
      </View>
    </Pressable>
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
});

export default ProductItem;
