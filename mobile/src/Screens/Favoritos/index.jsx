import React from "react";
import { View, Text, Image } from "react-native";
import { Title, Line, SubTitle, ProductImage} from "./styled";

export default function Favoritos() {
  return (
    <View style={{ flex: 1 }}>
      <Title>Favoritos</Title>

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Line>
          <ProductImage source={require("../../../assets/Identidade Visual/8122042_1.webp")}/>
          <SubTitle>Notebook Hp 250</SubTitle> 
          <SubTitle>Samsung S21</SubTitle>
        </Line>
        <Line>
          <SubTitle>Notebook Hp 250</SubTitle>
          <SubTitle>Samsung S21</SubTitle>
        </Line>
      </View>
    </View>
  );
}
