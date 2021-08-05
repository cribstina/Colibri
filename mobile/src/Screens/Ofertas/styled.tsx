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
  margin-top: 5%;
  margin-left: 5%;
  margin-bottom: 5%;
`;

export const Line = styled.View`
  flex-direction: column;
  align-content: space-around;
  align-items: center;

`;

export const Price = styled.Text`
  font-weight: bold;
  color: #D94207;
  font-size: 14px;
  margin-top: 2%;
  margin-bottom: 40%;
  font-family: montserrat;
  margin-left: 2%;
  align-items: left;
`;