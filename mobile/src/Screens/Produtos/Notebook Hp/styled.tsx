import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const BackgroundApp = styled.View`
  background-color: #fff;
  width: ${wp("100%")};
  height: ${wp("230%")};
`;

export const UserBackgroundApp = styled.View`
  background-color: #fff;
  width: ${wp("100%")};
  height: ${wp("60%")};
`;

export const CommentsBackgroundApp = styled.View`
  background-color: #f4fffd;
  width: ${wp("100%")};
  height: ${wp("50%")};
`;

export const ProductImage = styled.Image`
  width: ${wp("100%")};
  height: ${wp("70%")};
`;

export const SmallProductImage = styled.Image`
  width: ${wp("20%")};
  height: ${wp("15%")};
  margin-top: 4%;
`;

export const Title = styled.Text`
  font-family: montserrat;
  font-weight: bold;
  color: #000;
  font-size: 20px;
  margin-top: 2%;
  margin-left: 5%;
`;

export const Name = styled.Text`
  font-family: montserrat;
  font-weight: medium;
  color: #000;
  font-size: 14px;
  margin-left: 6%;
  margin-bottom: 5%;
`;

export const Username = styled.Text`
  font-family: montserrat;
  font-weight: bold;
  color: #3b3b3b;
  font-size: 12px;
  margin-bottom: 2%;
  margin-top: 5%;
`;

export const Comments = styled.Text`
  font-family: montserrat;
  font-weight: medium;
  color: #000000;
  font-size: 10px;

  margin-bottom: 2%;
  margin-top: 2%;
`;

export const Username2 = styled.Text`
  font-family: montserrat;
  font-weight: bold;
  color: #3b3b3b;
  font-size: 12px;
  margin-bottom: 2%;
  margin-top: 5%;
  margin-left: 2%;
`;

export const Comments2 = styled.Text`
  font-family: montserrat;
  font-weight: medium;
  color: #000000;
  font-size: 10px;

  margin-bottom: 2%;
  margin-top: 2%;
   margin-left: 2%;
`;

export const SubTitle = styled.Text`
  font-family: montserrat;
  font-weight: bold;
  color: #236d71;
  font-size: 16px;
  margin-top: 5%;
  margin-left: 5%;
  margin-bottom: 2%;
`;

export const Tag = styled.Text`
  font-family: montserrat;
  font-weight: bold;
  color: #000;
  font-size: 14px;
  margin-top: 5%;
  margin-left: 10%;
  margin-bottom: 8%;
`;

export const Line = styled.View`
  flex-direction: column;
  align-content: space-around;
  align-items: center;
`;

export const Price = styled.Text`
  font-weight: bold;
  color: #000;
  font-size: 30px;
  font-family: montserrat;
  margin-left: 10%;
  margin-bottom: 1%;
  align-items: left;
`;

export const OldPrice = styled.Text`
  font-family: montserrat;
  font-weight: medium;
  font-size: 15px;
  margin-left: 10%;
  margin-top: 5%;
  margin-bottom: 1%;
`;

export const Juros = styled.Text`
  font-family: montserrat;
  font-weight: medium;
  font-size: 15px;
  margin-left: 10%;
  margin-bottom: 5%;
`;
export const Description = styled.Text`
  font-family: montserrat;
  font-weight: medium;
  font-size: 12px;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 2%;
`;

export const Description2 = styled.Text`
  font-family: montserrat;
  font-weight: medium;
  font-size: 12px;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 2%;
  align-items: center;
  text-align: center;
`;

/*export const CartButton = styled.TouchableOpacity `
    background-color: #06DAB5;
   
`*/
