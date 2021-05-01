import React from 'react';
import { } from 'react-native'
import { PIN } from './src/pages/PIN'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

export default function App() {
  const x = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });



  return (

    <PIN />
  );
}
