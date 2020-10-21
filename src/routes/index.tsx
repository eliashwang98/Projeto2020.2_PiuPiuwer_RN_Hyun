import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../hooks/useAuth';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

function AppRoutes(){
    const { token } = useAuth();

    return(
        <NavigationContainer>
            {  
                (!token ? <AuthStack/> : <AppStack/>)
            }
        </NavigationContainer>
    );
}

export default AppRoutes;