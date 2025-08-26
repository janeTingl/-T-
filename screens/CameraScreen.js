import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { recognizeAndMatch } from '../utils/OCR';

export default function CameraScreen() {
  const [resultText, setResultText] = useState('');

  const handleCapture = async () => {
    const text = await recognizeAndMatch();
    setResultText(text || '未识别到题目，请重试');
  };

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={handleCapture} style={styles.button}>
        拍照识题
      </Button>
      {resultText ? <Text style={styles.text}>{resultText}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  button: { width: '60%', marginBottom: 20 },
  text: { fontSize: 16, textAlign: 'center' }
});
