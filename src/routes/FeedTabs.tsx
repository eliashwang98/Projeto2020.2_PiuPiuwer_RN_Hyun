import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Feed from '../pages/Feed';
import Profile from '../pages/Profile';
import Config from '../pages/Config';

const { Navigator, Screen } = createBottomTabNavigator();

function FeedTabs(){
    return(
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 45
                },
                labelStyle: {
                    fontFamily: 'Quicksand_700Bold',
                    fontSize: 11
                },
                inactiveBackgroundColor: '#E5E5E5',
                activeBackgroundColor: '#FCA311',
                activeTintColor: '#000000'
            }}
        >
            <Screen 
                name="Home"
                component={Feed}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return(
                            <Ionicons name="ios-home" size={size} color={color}/>
                        );
                    },
                }}
            />
            <Screen 
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => {
                        return(
                            <Ionicons name="ios-person" size={size} color={color}/>
                        );
                    }
                }}
            />
            <Screen 
                name="Config" 
                component={Config}
                options={{
                    tabBarLabel: 'Configurações',
                    tabBarIcon: ({ color, size }) => {
                        return(
                            <Ionicons name="ios-cog" size={size} color={color}/>
                        );
                    }
                }}
            />
        </Navigator>
    )
}

export default FeedTabs;