import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import ProductItem from '../components/ProductItem';
import { DataStore } from 'aws-amplify';
import { Product } from '../src/models';

//import products from '../data/products';

const HomeScreen = ({ searchValue }: { searchValue: string }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    DataStore.query(Product).then(setProducts);
  }, []);
  return (
    <View>
      {/*render Product component*/}
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
      />
      {/* <MasonryList
        style={{ alignSelf: 'stretch' }}
        conntentContainerStyle={{ paddingHorizontal: 24, alignSelf: 'stretch' }}
        numColumn={2}
        data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
      /> */}
    </View>
  );
};

export default HomeScreen;
