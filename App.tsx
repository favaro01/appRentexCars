import { ActivityIndicator } from 'react-native';
import { 
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo'
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
 } from '@expo-google-fonts/inter'

import { ThemeProvider } from "styled-components";

import { Routes } from './src/routes';
import theme from './src/screens/styles/theme';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium, 
    Archivo_600SemiBold
  });

  if(!fontsLoaded){
    return <ActivityIndicator />
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}


