import styled from "styled-components/native";
import { widthPercentageToDP  as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export const BackgroundApp = styled.View `
    background-color: #F5FFFD;
    width: ${wp('100%')};
    height: ${wp('180%')};
`

export const Title = styled.Text `
    font-family: montserrat;
    font-weight: bold;
    color: #236D71;
    font-size: 18px;
    margin-top:10%;
    margin-left:5%;
    margin-bottom:5%;
`
export const TextList = styled.Text `
    font-weight: medium;
    color: #000;
    font-size: 14px;
    margin-left:7%;
    font-family: montserrat;
`

export const CategoriasButton = styled.TouchableOpacity `
    width: ${wp('100%')};
    padding: 4%;
    background-color: #F5FFFD;
    opacity: 0.7;
`