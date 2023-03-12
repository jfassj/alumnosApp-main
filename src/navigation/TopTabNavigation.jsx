import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Calificaciones from '../screens/Calificaciones';
import Home from '../screens/Home';
import Icon from "react-native-vector-icons/Ionicons";
import Perfil from '../screens/Perfil';
import Contacto from '../screens/Contacto';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="home" color={'#140099'} size={26} />,
        }}
      />
      <Tab.Screen name="Calificaciones" component={Calificaciones}
      options={{
        tabBarLabel: 'Calificaciones',
        tabBarIcon: () => <Icon name="albums" color={'#140099'} size={26} />,
      }}
       />
       <Tab.Screen name="Perfil" component={Perfil}
      options={{
        tabBarLabel: 'Perfil',
        tabBarIcon: () => <Icon name="person" color={'#140099'} size={26} />,
      }}
       />
      <Tab.Screen name="Contacto" component={Contacto}
      options={{
        tabBarLabel: 'Contacto',
        tabBarIcon: () => <Icon name="happy" color={'#140099'} size={26} />,
      }}
      />
    </Tab.Navigator>
  );
}
export default TopTabNavigation;