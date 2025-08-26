import React from 'react';
import { Appbar } from 'react-native-paper';

export default function Header({ title, navigation }) {
  return (
    <Appbar.Header>
      {navigation && <Appbar.BackAction onPress={() => navigation.goBack()} />}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
