import React, { useState, useCallback } from 'react';
import { ScrollView } from 'react-native';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/useAuth';

import logoPiupiuwer from '../../assets/images/logo-piupiuwer.png';
import imageLogin from '../../assets/images/image-login.png';

import{
    Page, LogoPiupiuwer, PhrasePiupiuwer, ImageLogin, LoginInput, LoginEnter, LoginEnterText, ErrorMessage, 
    ForgotPw, Register, RegisterText
} from './styles';

function Login(){
  const [errorLogin, setErrorLogin] = useState('');
  const [errorPw, setErrorPw] = useState('');
  const [errorWrongCred, setErrorWrongCred] = useState('');
  const [cred, setCred] = useState({ username: '', password: '' })

  const { login } = useAuth();

  const handleLogin = useCallback(async () => {
    try {
      setErrorWrongCred('');
      
      const esquema = Yup.object().shape({
        username: Yup.string().required('Login ou Email obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await esquema.validate(cred, { abortEarly: false });

      setErrorLogin('');
      setErrorPw('');

      await login (cred, setErrorWrongCred)
    }
    catch (err){
      if (err instanceof Yup.ValidationError){
        var i=0

        for (i=0; i<err.errors.length; i++){
          setErrorLogin(err.errors[0])
          
          if(err.errors[1] !== ''){
            setErrorPw(err.errors[1])
          }
        }
      }
    }
  }, [cred, login]);

  const onChangeUsername = useCallback((text) => {
    setCred({...cred, username: text})
  }, [setCred, cred]);

  const onChangePassword = useCallback((text) => {
    setCred({...cred, password: text})
  }, [setCred, cred]);

  return(
    <ScrollView>
      <Page>
        <LogoPiupiuwer source={logoPiupiuwer} resizeMode='contain'/>
        <PhrasePiupiuwer>Se expresse e ouça os outros</PhrasePiupiuwer>
        <ImageLogin source={imageLogin} resizeMode='contain'/>
        <LoginInput placeholder="Login ou Email" onChangeText={onChangeUsername}/>
        <LoginInput placeholder="Senha" onChangeText={onChangePassword} secureTextEntry/>
        <LoginEnter onPress={handleLogin}><LoginEnterText>Entrar</LoginEnterText></LoginEnter>
        { errorLogin !== '' ? (<ErrorMessage>{errorLogin}</ErrorMessage>) : (<></>) }
        { errorPw !== '' ? (<ErrorMessage>{errorPw}</ErrorMessage>) : (<></>) }
        { errorWrongCred !== '' ? (<ErrorMessage>{errorWrongCred}</ErrorMessage>) : (<></>) }
        <ForgotPw>Esqueceu a senha?</ForgotPw>
        <Register><RegisterText>Cadastre-se</RegisterText></Register>
      </Page>
    </ScrollView>
  )
}

export default Login;