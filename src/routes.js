import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';
import Login from './pages/Login';
import NewIncidents from './pages/NewIncidents';
import NewOng from './pages/NewOng';

export default function Routes(){
    return(
<NavigationContainer>
    <AppStack.Navigator screenOptions={{headerShown:false}}>
        <AppStack.Screen  name="Login" component={Login} />
        <AppStack.Screen  name="Incidents" component={Incidents} />
        <AppStack.Screen  name="Detail" component={Detail} />
        <AppStack.Screen  name="NewIncidents" component={NewIncidents} />
        <AppStack.Screen  name="NewOng" component={NewOng} />
    </AppStack.Navigator>
</NavigationContainer>
    );
}