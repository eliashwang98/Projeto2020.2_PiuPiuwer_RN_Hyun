import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';

import AppRoutes from './src/routes';

import { AuthProvider } from './src/hooks/useAuth';

import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold} from '@expo-google-fonts/quicksand';
import { Poppins_500Medium } from '@expo-google-fonts/poppins';

export default function App() {

  let [ fontsLoaded ] = useFonts({
    Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold,
    Poppins_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  else{
    return (
      <AuthProvider>
        <AppRoutes/>
        <StatusBar style="auto"/>
      </AuthProvider>
    );
  }
}
