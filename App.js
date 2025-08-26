import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SubjectScreen from './screens/SubjectScreen';
import QuestionDetailScreen from './screens/QuestionDetailScreen';
import CameraScreen from './screens/CameraScreen';
import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: '小T的辅导能手' }} />
          <Stack.Screen name="Subject" component={SubjectScreen} options={{ title: '选择科目' }} />
          <Stack.Screen name="QuestionDetail" component={QuestionDetailScreen} options={{ title: '题目详情' }} />
          <Stack.Screen name="Camera" component={CameraScreen} options={{ title: '拍照识题' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
