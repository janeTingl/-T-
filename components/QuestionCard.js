import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function QuestionCard({ question, answer }) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.question}>{question}</Text>
        <Text style={styles.answer}>答案：{answer}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 15
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  answer: {
    fontSize: 14,
    marginTop: 5
  }
});
