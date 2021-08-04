import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

export const BackgroundApp = styled.View `
    width: ${wp('100%')};
    height: ${hp('100%')};
    margin-top: 5%;
    flex: 1;
    color: white;
`