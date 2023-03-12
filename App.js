import React from 'react';
import 'react-native-gesture-handler';
import { View } from "react-native";
import { styles } from "./src/theme/theme";
import { AuthProvider } from "./src/context/AlumnoContext";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
// import TopTabNavigation from './src/navigation/TopTabNavigation';


const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AppState>
          <StackNavigation />
          {/* <TopTabNavigation /> */}
        </AppState>
      </View>
    </NavigationContainer>
  );
}

const AppState = ({ children }) => {
  return(
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default App;