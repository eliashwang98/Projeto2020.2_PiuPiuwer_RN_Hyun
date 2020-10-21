import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FeedTabs from './FeedTabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Feed" component={FeedTabs}/>
        </Navigator>
    );
}

export default AppStack;