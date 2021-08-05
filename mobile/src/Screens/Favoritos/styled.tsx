import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const BackgroundApp = styled.View`
  background-color: #f5fffd;
  width: ${wp("100%")};
  height: ${wp("180%")};
`;

export const SubTitle = styled.Text`
  font-family: montserrat;
  font-weight: bold;
  padding-bottom: 100%;
  //width: ${wp("60%")};
`;

export const ProductImage = styled.Image `
  width: ${wp("40%")};
  height: ${wp("30%")};
`

export const Title = styled.Text`
  font-family: montserrat;
  font-weight: bold;
  color: #236d71;
  font-size: 18px;
  margin-top: 10%;
  margin-left: 5%;
  margin-bottom: 5%;
`;

export const Line = styled.View`
  flex-direction: column;
  align-content: space-around;
  align-items: center;

`;
