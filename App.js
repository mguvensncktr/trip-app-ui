import React from 'react';
import { useFonts } from 'expo-font';
import Router from './navigation/Router';

export default function App() {

  const [loadFonts] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!loadFonts) {
    return null;
  }

  return (
    <Router />
  );
}

