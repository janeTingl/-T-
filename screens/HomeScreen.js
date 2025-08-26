import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>欢迎使用小T的辅导能手</Text>
      <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('Subject')}>
        选择科目
      </Button>
      <Button mode="contained" style={styles.button} onPress={() => navigation.navigate('Camera')}>
        拍照识题
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40
  },
  button: {
    width: '80%',
    marginVertical: 10
  }
});
