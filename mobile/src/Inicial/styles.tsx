import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

export const ZoetropeLogo = styled.Image `
    width: 300px;
    height: 100px;
    margin-top: 10%;
`

export const BackgroundApp = styled.ImageBackground `
    flex: 1;
`  

export const LoginButton = styled.TouchableOpacity `
    width: ${wp('90%')};
    padding: 4%;
    border-width: 3;
    border-radius: 5;
    border-color: #25B89F;

    margin-top: 35%;
    margin-left: 5%;
    
    box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`

export const GoToHome  = styled.TouchableOpacity `
    width: ${wp('90%')};
    padding: 4%;
    border-width: 3;
    border-radius: 5;
    border-color: grey;

    margin-top: 5%;
    margin-left: 5%;
    
    box-shadow: 2px 2px 4px rgba(0,0,0,0.5);

`

export const Enter = styled.Text `
    color: #25B89F;
    font-size: 17px;
    text-align: center;
`

    