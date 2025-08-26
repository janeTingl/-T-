import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';

const subjects = ['数学', '物理', '化学'];

export default function SubjectScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>选择你要辅导的科目</Text>
      {subjects.map((subject, index) => (
        <Button
          key={index}
          mode="outlined"
          style={styles.button}
          onPress={() => navigation.navigate('QuestionDetail', { subject })}
        >
          {subject}
        </Button>
      ))}
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30
  },
  button: {
    width: '70%',
    marginVertical: 10
  }
});
