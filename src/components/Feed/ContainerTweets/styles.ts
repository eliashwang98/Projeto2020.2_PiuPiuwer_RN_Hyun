import styled from 'styled-components/native';

export const Tweet = styled.View`
    height: 127px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-bottom-width: 1px;
    border-color: #000000;
`

export const EachProfileImage = styled.Image`
    width: 75px;
    height: 75px;
    border-radius: 37.5px;

    margin-left: 12px;
`

export const TweetExceptProfileImg = styled.View`

`

export const NameLoginExclude = styled.View`
    width: 219px;
    height: 45px;

    flex-direction: row;
    justify-content: space-between;

    margin-top: 20px;
`

export const NameLogin = styled.View`
`

export const FirstName = styled.Text`
    font-size: 14px;
    font-family: Quicksand_700Bold;

    margin-right: 10px;
`

export const Username = styled.Text`
    font-size: 11px;
    font-family: Quicksand_500Medium;
`

export const DeleteButton = styled.TouchableOpacity`
    width: 15px;
    height: 15px;

    margin: 6px 12px 0 0;
`

export const DeleteImage = styled.Image`
    width: 15px;
    height: 15px;
`

export const EachTweetMessage = styled.Text`
    width: 215px;
    height: 50px;

    font-size: 13px;
    font-family: Quicksand_400Regular;

    margin-top: -5px;
`

export const LikeRetweetComment = styled.View`
    flex-direction: row;
    align-items: center;

    margin: 10px 0 22px 0;
`

export const LikeButton = styled.TouchableOpacity`
    width: 22px;
    height: 22px;
`

export const LikeImage = styled.Image`
    width: 22px;
    height: 22px;
`

export const LikeNumber = styled.Text`
    margin: 0 23px 0 7px;

    font-size: 13px;
    font-family: Quicksand_500Medium;
`

export const RetweetButton = styled.Image`
    width: 22px;
    height: 22px;
`

export const RetweetNumber = styled.Text`
    margin: 0 23px 0 7px;

    font-size: 13px;
    font-family: Quicksand_500Medium;
`

export const CommentButton = styled.Image`
    width: 23px;
    height: 23px;
`

export const CommentNumber = styled.Text`
    margin-left: 7px;

    font-size: 13px;
    font-family: Quicksand_500Medium;
`