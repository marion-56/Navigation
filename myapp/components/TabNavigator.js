import A from '../screens/component_1';
import B from '../screens/component_2';

import { createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function TabNavigator() {
    return (
        <Stack.Navigator initialRouteName="component_1" screenOptions={{headerShown: false}} id={undefined}>
            <Stack.Screen initialParams={{screen: 'component_1'}} name={"component_1"} component={A} />
            <Stack.Screen initialParams={{screen: 'component_1'}} name={"component_2"} component={B} />
        </Stack.Navigator>
    )
}