import React from 'react';
import { } from 'react-native'
import Routes from './src/routes'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

export default function App() {
  const x = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <Routes />
  );
}
