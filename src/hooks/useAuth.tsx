import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

interface AuthState{
    user: User;
    token: string;
}

interface AuthContextData{
    user: User;
    login(user: object, setErrorWrongCred: React.Dispatch<React.SetStateAction<string>>): Promise<void>;
    logout(): void;
    token: string;
}

export interface User{
    username: string;
    first_name: string;
    last_name: string;
    foto: string;
    id: number;
    pius: [];
    email: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [userData, setUserData] = useState<AuthState>({} as AuthState);

    useEffect(() => {
        async function carregarDadosUsuario(){
            const user = await AsyncStorage.getItem('@Project:user');
            const token = await AsyncStorage.getItem('@Project:token');

            if(user && token){
                api.defaults.headers.authorization = `JWT ${token}`;

                setUserData({user: JSON.parse(user), token: token})
            }
        }
        carregarDadosUsuario();
    }, []);

    const login = useCallback(async (cred, setErrorWrongCred) => {
        try{
            const response = await api.post('/login/', cred)
            const { token } = response.data;

            await AsyncStorage.setItem('@Project:token', token);

            if (!!token){
                const userResponse = await api.get(`usuarios/?search=${cred.username}`);
                const user = userResponse.data[0];
                
                await AsyncStorage.setItem('@Project:user', JSON.stringify(user));
        
                setUserData({token: token, user: user});
            }
        } 
        catch{
            return(
                setErrorWrongCred('Usuário e/ou senha incorreta(s)')
            )
        }
    }, [])

    const logout = useCallback (async() => {
        await AsyncStorage.removeItem('@Project:user');
        await AsyncStorage.removeItem('@Project:token');

        setUserData({} as AuthState);
    }, [])

    return(
        <AuthContext.Provider value = {{user: userData.user, login, logout, token: userData.token}}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextData{
    const context = useContext(AuthContext);
    return context;
}