import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { color } from "react-native-reanimated";

export const ScrollView = styled.ScrollView`
  height: 30%;
  width: 70%;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const BackgroundApp = styled.View `
background-color: #fff;
`

export const Anuncio = styled.Image`
  width: 100%;
  height: 40%;
  padding-top: 80%;
`;

export const ImageProduto = styled.Image`
  width: 60;
  height: 50;
`;


export const Title = styled.Text`
  font-weight: bold;
  color: #000000;
  font-size: 18px;
  margin-top: 10%;
  font-family: montserrat;
`;

export const Subtitle = styled.Text`
  font-weight: bold;
  color: #000000;
  font-size: 11px;
  margin-top: 10%;
  font-family: montserrat;
  margin-left: 2%;
  align-items: left;
`;

export const Price = styled.Text`
  font-weight: bold;
  color: #D94207;
  font-size: 11px;
  margin-top: 10%;
  font-family: montserrat;
  margin-left: 2%;
  align-items: left;
`;



export const ProdutoButton = styled.TouchableOpacity`
  width: ${wp("35%")};
  height: ${wp("45%")};
  padding: 1%;
  background-color: #fff;
  opacity: 1;
  margin-top: 1%;
`
