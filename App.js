import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import styles from "./styles.js"

const data = new Array(100).fill(null).map((v,i) => ({key: i.toString(), value: `Item ${i}`}));

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={({item}) => <Text style={styles.item}>{item.value}</Text>} />
    </View>
  );
}
