import styled from 'styled-components/native';

export const ShareTweet = styled.View`
    height: 115px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: 20px;

    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: #000000;
`

export const ProfileImage = styled.Image`
    width: 75px;

    margin-left: 12px;
`

export const AllExceptProfileImage = styled.View`
    flex-direction: column;
    justify-content: space-between;
`

export const TweetTextArea = styled.TextInput`
    width: 183px;
    height: 35px;

    font-family: Quicksand_400Regular;

    text-align: left;

    margin: 15px 35px 20px 0;
`

export const EmotePhotoCounterSend = styled.View`
    flex-direction: row;
    align-items: center;

    margin-top: 5px;
`

export const EmotePhoto = styled.View`
    flex-direction: row;
`

export const LogosSendTweet = styled.Image`
    width: 22px;
    height: 22px;

    margin-right: 15px;
`

export const CounterSend = styled.View`
    width: 140px;

    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`

export const Counter = styled.Text`
    margin-right: 20px;

    font-size: 12px;
    font-family: Quicksand_500Medium;
`

export const CounterRed = styled.Text`
    margin-right: 20px;
    
    font-size: 12px;
    font-family: Quicksand_700Bold;
    color: red;
`

export const SendTweetButton = styled.TouchableOpacity`
    width: 60px;
    height: 28px;

    align-items: center;
    justify-content: center;

    background-color: #FCA311;
`

export const SendTweetButtonDisabled = styled.TouchableOpacity`
    width: 60px;
    height: 28px;

    align-items: center;
    justify-content: center;

    background-color: #FCA311;
    opacity: 0.3;
`

export const SendTweetButtonText = styled.Text`
    font-size: 15px;
    font-family: Quicksand_600SemiBold;
`

export const WarningNoText = styled.Text`
    text-align: center;
    font-size: 14px;
    font-family: Quicksand_700Bold;
    color: red;

    margin: 13px 0 -5px 0;
`

export const WarningAboveAllowed = styled.Text`
    text-align: center;
    font-size: 14px;
    font-family: Quicksand_700Bold;
    color: red;

    margin: 13px 0 -5px 0;
`