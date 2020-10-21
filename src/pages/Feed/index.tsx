import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import api from '../../services/api';

import { useAuth } from '../../hooks/useAuth';

import logoPiupiuwer from '../../assets/images/logo-piupiuwer.png';
import logoSearch from '../../assets/icons/search.png';
import logoLogout from '../../assets/icons/logout.png';

import ContainerTweet from '../../components/Feed/ContainerTweets';
import ComponentShareTweet from '../../components/Feed/ComponentShareTweet';

import{
    PageHeader,  PageHeaderSearchLogo, LogoPiupiuwerSmall, LogoutButton, PageHeaderLogoutLogo,
    LastTweets, LastTweetsHeader, LastTweetsHeaderText
} from './styles';

import EachPiu from '../../interfaces/EachPiu';

export interface UserInfo{
  email: string;
  first_name: string;
  foto: string;
  id: number;
  last_name: string;
  sobre: string;
  username: string;
}

function Feed(){
  const [pius, setPius] = useState([]);

  const { logout, token } = useAuth();

  // Hook responsável por carregar os Pius na tela
  useEffect(() => {
    api.defaults.headers.authorization = `JWT ${token}`
    api.get('/pius').then(response => {
      setPius(response.data)
    })
  }, [token])

  return(
    <ScrollView>
      <View>
        <PageHeader>
          <PageHeaderSearchLogo source={logoSearch}/>
          <LogoPiupiuwerSmall source={logoPiupiuwer} resizeMode='contain'/>
          <LogoutButton onPress={logout}>
            <PageHeaderLogoutLogo source={logoLogout}/>
          </LogoutButton>
        </PageHeader>
        <ComponentShareTweet setPius={setPius} pius={pius}/>
        <LastTweets>
          <LastTweetsHeader>
            <LastTweetsHeaderText>Últimos pius</LastTweetsHeaderText>
          </LastTweetsHeader>
          {pius.map ((eachpiu: EachPiu) => {
            return <ContainerTweet key={eachpiu.id} eachpiu={eachpiu} setPius={setPius} pius={pius}/>;
          })}
        </LastTweets>
      </View>
    </ScrollView>
  )
}

export default Feed;