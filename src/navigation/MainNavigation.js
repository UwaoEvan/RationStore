import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Shop from '../screens/Shop';
import Details from '../screens/Details';
import Checkout from '../screens/Checkout';

const Stack = createStackNavigator();
export default function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name='Shop' component={Shop} />
                <Stack.Screen name='Details' component={Details} />
                <Stack.Screen name='Checkout' component={Checkout} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}