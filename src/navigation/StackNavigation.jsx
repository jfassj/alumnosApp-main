import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import TopTabNavigation from './TopTabNavigation';

const Stack = createStackNavigator();

const StackNavigation =()=> {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TopTabNavigation" component={TopTabNavigation} />
    </Stack.Navigator>
  );
}
export default StackNavigation;