import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function SubjectButton({ subject, onPress }) {
  return (
    <Button mode="outlined" style={styles.button} onPress={onPress}>
      {subject}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '70%',
    marginVertical: 10
  }
});
