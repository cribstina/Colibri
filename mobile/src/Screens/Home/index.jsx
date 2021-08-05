import React from "react";
import {
  Image,
  View,
  Text,
  Button,
  SectionList,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import {
  Title,
  Anuncio,
  Subtitle,
  BackgroundApp,
  ProdutoButton,
  ImageProduto,
} from "./styled";

export default function Home() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Anuncio
          source={require("../../../assets/Identidade Visual/Group 27.png")}
        ></Anuncio>

        <Title>Ofertas do dia</Title>
        <ScrollView horizontal={true}>

          <ProdutoButton
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
            onPress={()=> {navigation.navigate("Produtos")}}
          >
            
            <ImageProduto
              source={require("../../../assets/Identidade Visual/8122042_1.webp")}
            ></ImageProduto>
            <Subtitle>Notebook Hp 250</Subtitle>
            

          </ProdutoButton>

          <ProdutoButton
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Subtitle>Notebook Dell</Subtitle>
          </ProdutoButton>

          <ProdutoButton
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Subtitle>Samsung Galaxy S21</Subtitle>
          </ProdutoButton>

          <Subtitle>Samsung Galaxy Z</Subtitle>
        </ScrollView>

        <Title>Ofertas em informática</Title>

        <ScrollView horizontal={true}>
          <ProdutoButton
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Subtitle>Teclado Fallen</Subtitle>
          </ProdutoButton>

          <ProdutoButton
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Subtitle>Mouse Kawaii</Subtitle>
          </ProdutoButton>

          <ProdutoButton
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Subtitle>Teclado Gamer</Subtitle>
          </ProdutoButton>

          <Subtitle>Teclado RGB</Subtitle>
        </ScrollView>

        <Title>Ofertas em Petshop</Title>

        <ScrollView horizontal={true}>
          <Subtitle>Frango sonoro</Subtitle>
          <Subtitle>Brinquedo halter</Subtitle>
          <Subtitle>Macaco pelúcia</Subtitle>
          <Subtitle>Lhama pelúcia</Subtitle>
          <Subtitle>Brinquedo Bife</Subtitle>
        </ScrollView>
      </View>
    </ScrollView>
  );
}
