

import TabNavigator from './components/TabNavigator';
import C from './screens/component_3';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={"component_3"} screenOptions={{headerShown: false}} id={undefined}>
        <Tab.Screen name={"TabNavigator"} component={TabNavigator} />
        <Tab.Screen name={"component_3"} component={C} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}