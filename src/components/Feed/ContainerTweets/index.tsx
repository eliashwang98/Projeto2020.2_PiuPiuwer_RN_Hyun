import React, { useCallback, useState } from 'react';

import axios from 'axios';

import { useAuth } from '../../../hooks/useAuth';

import logoX from '../../../assets/icons/x.png';
import logoLike from '../../../assets/icons/like.png';
import logoRetweet from '../../../assets/icons/retweet.png';
import logoComment from '../../../assets/icons/comment.png';

import{
    Tweet, EachProfileImage, TweetExceptProfileImg, NameLoginExclude, NameLogin, FirstName, Username, DeleteButton,
    DeleteImage, EachTweetMessage, LikeRetweetComment, LikeButton, LikeImage, LikeNumber, RetweetButton, 
    RetweetNumber, CommentButton, CommentNumber
} from './styles';

import EachPiu from '../../../interfaces/EachPiu';

export interface ContainerLastTweetsProps{
    eachpiu: EachPiu;
    pius: Array<EachPiu>;
    setPius(pius: any): void;
}

const ContainerTweet: React.FC<ContainerLastTweetsProps> = ({ eachpiu, pius, setPius }) => {
    const [likes, setLikes] = useState(eachpiu.likers.length);

    const { token, user } = useAuth();

    //   useCallback que deleta o Piu e depois faz uma varredura dos Pius restantes e retorna todos os pius exceto
    // o Piu que você deletou.
    const handleDelete = useCallback(async (eachpiuid) => {
        await axios({
            url: `http://piupiuwer.polijr.com.br/pius/${eachpiuid}`,
            method: 'DELETE',
            headers: {
                Authorization: `JWT ${token}`
            }
        });

        const arrayPius: EachPiu[] = [];

        pius.forEach((piu) => {
            if(eachpiuid === piu.id){
                return;      
            }

            arrayPius.push(piu);
        })

        setPius(arrayPius)

    }, [eachpiu, token, pius])

    //   useCallback que aumenta o like: pelo POST ele aumenta o like e depois pelo GET pega os pius com os números
    // de likes atualizados.
    const handleLikes = useCallback(async(eachpiuid) => {
        const userId = user.id
        const piuId = eachpiuid

        await axios({
            url: 'http://piupiuwer.polijr.com.br/pius/dar-like/',
            method: 'POST',
            headers: {
                Authorization: `JWT ${token}`
            },
            data: {
                usuario: userId,
                piu: piuId
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
            if(eachpiuid === response.data[i].id){
                setLikes(response.data[i].likers.length); 
            }
            arrayNewPius.push(response.data[i])
        }

        setPius(arrayNewPius)
    }, [user.id, token, pius, likes])

    return(
        <Tweet>
            <EachProfileImage source={{uri: eachpiu.usuario.foto}} resizeMode='contain'/>
            <TweetExceptProfileImg>
                <NameLoginExclude>
                    <NameLogin>
                        <FirstName>{ eachpiu.usuario.first_name } { eachpiu.usuario.last_name }</FirstName>
                        <Username>@{ eachpiu.usuario.username }</Username>
                    </NameLogin>
                    { user.id === eachpiu.usuario.id && 
                        (<DeleteButton onPress={() => {handleDelete(eachpiu.id)}}>
                            <DeleteImage source={logoX}/>
                        </DeleteButton>)
                    }
                </NameLoginExclude>
                <EachTweetMessage>{ eachpiu.texto }</EachTweetMessage>
                <LikeRetweetComment>
                    <LikeButton onPress={() => {handleLikes(eachpiu.id)}}>
                        <LikeImage source={logoLike}/>
                    </LikeButton>
                    <LikeNumber>{ eachpiu.likers.length }</LikeNumber>
                    <RetweetButton source={logoRetweet}/><RetweetNumber>0</RetweetNumber>
                    <CommentButton source={logoComment}/><CommentNumber>0</CommentNumber>
                </LikeRetweetComment>
            </TweetExceptProfileImg>
        </Tweet>
    )
}

export default ContainerTweet;