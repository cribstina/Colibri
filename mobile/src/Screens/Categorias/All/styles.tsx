import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";

export const Category = styled.Text `
    width: ${wp('45%')};
    height: ${hp('10%')};
    color: black;
//    font-weight: bold;
    opacity: 0.9;
//    text-shadow: 1px 1px rgba(0,0,0,0.5);
`

export const Line = styled.View `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`