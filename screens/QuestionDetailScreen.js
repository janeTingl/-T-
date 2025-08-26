import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, ActivityIndicator } from 'react-native-paper';
import { fetchQuestions } from '../utils/api';

export default function QuestionDetailScreen({ route }) {
  const { subject } = route.params;
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadQuestions() {
      const data = await fetchQuestions();
      const filtered = data.filter(q => q.subject === subject);
      setQuestions(filtered);
      setLoading(false);
    }
    loadQuestions();
  }, [subject]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {questions.map((q, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content>
            <Text style={styles.question}>{q.question}</Text>
            <Text style={styles.answer}>答案：{q.answer}</Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
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
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
