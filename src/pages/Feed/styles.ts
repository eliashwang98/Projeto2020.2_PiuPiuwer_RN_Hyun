import styled from 'styled-components/native';

export const PageHeader = styled.View`
    height: 73px;

    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;

    background-color: #E5E5E5;

    border-bottom-width: 2px;
    border-color: #DEDEDE;
`

export const PageHeaderSearchLogo = styled.Image`
    width: 22px;
    height: 22px;

    margin: 0 15px 16px 15px;
`

export const LogoutButton = styled.TouchableOpacity`
    width: 22px;
    height: 22px;

    margin: 0 15px 14px 0;
` 

export const PageHeaderLogoutLogo = styled.Image`
    width: 22px;
    height: 22px;
`

export const PageHeaderLogo = styled.Image`
    width: 22px;
    height: 22px;
`

export const LogoPiupiuwerSmall = styled.Image`
    width: 138px;
    height: 50px;
`

export const NavBar = styled.View`
    height: 40px;

    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    
    background-color: #E5E5E5;
`

export const LastTweets = styled.View`

`

export const LastTweetsHeader = styled.View`
    height: 35px;

    align-items: center;
    justify-content: center;

    background-color: #FCA311;

    margin-top: 20px;

    border-top-width: 1px;
    border-bottom-width: 1px;
    border-color: #000000;
`

export const LastTweetsHeaderText = styled.Text`
    font-size: 19px;
    font-family: Quicksand_700Bold;
`