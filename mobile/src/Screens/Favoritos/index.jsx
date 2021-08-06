import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { BackgroundApp } from "../Home/styled";
import { Title, Line, SubTitle, ProductImage, Price } from "./styled";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Favoritos() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <BackgroundApp>
        <View style={{ flex: 1 }}>
  
          <Title>Favoritos</Title>

          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Line>
              <ProductImage
                source={require("../../../assets/Identidade Visual/8122042_1.webp")}
              />
              <SubTitle>Notebook Hp 250</SubTitle>
              <Price>R$ 4.999,99</Price>

              <ProductImage
                source={require("../../../assets/Identidade Visual/mouse-gamer-cougar-minos-xt-rgb-6-botoes-programaveis-4000-dpi-pink-3mmxtwop0001_92337.jpg")}
              ></ProductImage>
              <SubTitle>Mouse Kawaii</SubTitle>
              <Price>R$ 299,99</Price>

              <ProductImage
                source={require("../../../assets/Identidade Visual/2021-galaxy-s21.jpg")}
              ></ProductImage>
              <SubTitle>Samsung S21</SubTitle>
              <Price>R$ 5.999,99</Price>
            </Line>
            <Line>
              <ProductImage
                source={require("../../../assets/Identidade Visual/16248950914572_zoom.jpg")}
              ></ProductImage>
              <SubTitle>Teclado Fallen</SubTitle>
              <Price>R$ 320,50</Price>

              <ProductImage
                source={require("../../../assets/Identidade Visual/791994152.jpg")}
              ></ProductImage>
              <SubTitle>Ipad</SubTitle>
              <Price>R$ 7.999,99</Price>

              <ProductImage
                source={require("../../../assets/Identidade Visual/_0079_6019-halter-gear-900x1200.jpg")}
              ></ProductImage>
              <SubTitle>Brinquedo Halter</SubTitle>
              <Price>R$ 12,99</Price>
            </Line>
          </View>
        </View>
      </BackgroundApp>
    </ScrollView>
  );
}
