import React, { useCallback, useState } from 'react';

import axios from 'axios';

import { useAuth } from '../../../hooks/useAuth';

import profileImg from '../../../assets/images/elias-profile-img.png';
import logoEmote from '../../../assets/icons/emote.png';
import logoCamera from '../../../assets/icons/camera.png';

import{
    ShareTweet, ProfileImage, AllExceptProfileImage, TweetTextArea, EmotePhotoCounterSend, EmotePhoto, 
    LogosSendTweet, CounterSend, Counter, CounterRed, SendTweetButton, SendTweetButtonDisabled, SendTweetButtonText, 
    WarningNoText, WarningAboveAllowed
} from './styles';

import EachPiu from '../../../interfaces/EachPiu';

interface ComponentShareTweetProps{
    pius: Array<EachPiu>;
    setPius(pius: any): void;
}

const ComponentShareTweet: React.FC<ComponentShareTweetProps> = ({ pius, setPius }) => {
    const [share, setShare] = useState('');
    const [count, setCount] = useState(0);

    const { token, user } = useAuth();

    const onChangeTextArea = useCallback((text) => {
        setShare(text);
        setCount(text.length);
    }, [setShare, setCount]);

    //   useCallback responsável por enviar para a API minha mensagem pelo POST e depois chama os Pius atualizados
    // junto com o Piu que acabei de postar pelo método GET.
    const sendTweet = useCallback(async () => {
        const userId = user.id;
        const message = share;
        setCount(0);
        setShare('');

        await axios({
            url: 'http://piupiuwer.polijr.com.br/pius/',
            method: 'POST',
            headers: {
                Authorization: `JWT ${token}`
            },
            data: {
                usuario: userId,
                texto: message
            }
        })

        const response = await axios({
            url: 'http://piupiuwer.polijr.com.br/pius/',
            method: 'GET',
            headers: {
                Authorization: `JWT ${token}`
            },
        })

        const arrayNewPius: EachPiu[] = []

        var i = 0
        for(i = 0 ; i < response.data.length ; i++){
            arrayNewPius.push(response.data[i])
        }

        setPius(arrayNewPius)

    }, [share, token, pius, user.id])

    return(
        <>
            <ShareTweet>
                <ProfileImage source={profileImg} resizeMode='contain'/>
                <AllExceptProfileImage>
                <TweetTextArea
                    value={share}
                    placeholder="O que deseja compartilhar?"
                    multiline = {true}
                    onChangeText={onChangeTextArea}
                />
                <EmotePhotoCounterSend>
                    <EmotePhoto>
                    <LogosSendTweet source={logoEmote}/>
                    <LogosSendTweet source={logoCamera}/>
                    </EmotePhoto>
                    <CounterSend>
                    { count > 140 || count <= 0 ? 
                        (<CounterRed>{count}/140</CounterRed>) : (<Counter>{count}/140</Counter>)
                    }
                    { count > 140 || count <= 0 ? 
                        (<SendTweetButtonDisabled disabled >
                            <SendTweetButtonText>Enviar</SendTweetButtonText>
                        </SendTweetButtonDisabled>) 
                        : 
                        (<SendTweetButton onPress={sendTweet}>
                            <SendTweetButtonText>Enviar</SendTweetButtonText>
                        </SendTweetButton>)
                    }
                    </CounterSend>
                </EmotePhotoCounterSend>
                </AllExceptProfileImage>
            </ShareTweet>
            { count <= 0 ? (<WarningNoText>É necessário pelo menos 1 caracter!</WarningNoText>) : (<></>) }
            { count > 140 ? (<WarningAboveAllowed>Você ultrapassou os caracteres permitidos!</WarningAboveAllowed>) : (<></>) }
        </>
    );
}

export default ComponentShareTweet;