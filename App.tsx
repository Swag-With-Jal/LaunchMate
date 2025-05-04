import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Toaster } from 'sonner-native';

import HomeScreen from "./screens/HomeScreen"
import IdeaValidationScreen from "./screens/IdeaValidationScreen"
import MarketResearchScreen from "./screens/MarketResearchScreen"
import LegalComplianceScreen from "./screens/LegalComplianceScreen"
import InvestorMatchingScreen from "./screens/InvestorMatchingScreen"

import Domain from './screens/Domain';
import ExecutionGuidelines from './screens/ExecutionGuidelines';
import ProgressTrack from './screens/ProgressTrack';
import TechStack from './screens/TechStack';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="IdeaValidation" component={IdeaValidationScreen} />
      <Stack.Screen name="MarketResearch" component={MarketResearchScreen} />
      <Stack.Screen name="LegalCompliance" component={LegalComplianceScreen} />
      <Stack.Screen name="InvestorMatching" component={InvestorMatchingScreen} />
      <Stack.Screen name="Domain" component={Domain} />
      <Stack.Screen name="ExecutionGuidelines" component={ExecutionGuidelines} />
      <Stack.Screen name="ProgressTrack" component={ProgressTrack} />
      <Stack.Screen name="TechStack" component={TechStack} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Toaster />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


