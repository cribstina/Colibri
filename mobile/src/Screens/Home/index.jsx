import React from "react";
import {
  Image,
  View,
  Text,
  Button,
  SectionList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import {
  Title,
  Anuncio,
  Subtitle,
  BackgroundApp,
  ProdutoButton,
  ImageProduto,
  Price,
} from "./styled";

export default function Home() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <BackgroundApp>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Anuncio
            source={require("../../../assets/Identidade Visual/Group 27.png")}
          ></Anuncio>

          <Title>Ofertas do dia</Title>
          <ScrollView horizontal={true}>
            <ProdutoButton
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                navigation.navigate("Produtos");
              }}
            >
              <ImageProduto
                source={require("../../../assets/Identidade Visual/8122042_1.webp")}
              ></ImageProduto>
              <Subtitle>Notebook Hp 250</Subtitle>
              <Price>R$ 4.999,99</Price>
            </ProdutoButton>

            <ProdutoButton
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ImageProduto
                source={require("../../../assets/Identidade Visual/notebook-dell-inspiron-14-3467-14-intel-core-i5-25ghz-8gb-ram-1tb-hd-dvd-rw-esp-windows-10.jpg")}
              ></ImageProduto>
              <Subtitle>Notebook Dell</Subtitle>
              <Price>R$ 5.999,99</Price>
            </ProdutoButton>

            <ProdutoButton
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ImageProduto
                source={require("../../../assets/Identidade Visual/1010696394.jpg")}
              ></ImageProduto>
              <Subtitle>Samsung Galaxy Z</Subtitle>
              <Price>R$ 6.229,99</Price>
            </ProdutoButton>
          </ScrollView>

          <Title>Ofertas em informática</Title>

          <ScrollView horizontal={true}>
            <ProdutoButton
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ImageProduto
                source={require("../../../assets/Identidade Visual/16248950914572_zoom.jpg")}
              ></ImageProduto>
              <Subtitle>Teclado Fallen</Subtitle>
              <Price>R$ 320,50</Price>
            </ProdutoButton>

            <ProdutoButton
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ImageProduto
                source={require("../../../assets/Identidade Visual/mouse-gamer-cougar-minos-xt-rgb-6-botoes-programaveis-4000-dpi-pink-3mmxtwop0001_92337.jpg")}
              ></ImageProduto>
              <Subtitle>Mouse Kawaii</Subtitle>
              <Price>R$ 299,99</Price>
            </ProdutoButton>

            <ProdutoButton
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ImageProduto
                source={require("../../../assets/Identidade Visual/TECLADO-GAMER-XZONE-GTS-01-001.jpg")}
              ></ImageProduto>
              <Subtitle>Teclado Gamer</Subtitle>
              <Price>R$ 199,99</Price>
            </ProdutoButton>
          </ScrollView>

          <Title>Ofertas em Petshop</Title>

          <ScrollView horizontal={true}>
            <ProdutoButton
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ImageProduto
                source={require("../../../assets/Identidade Visual/frango-de-brinquedo-franguinho-para-ces-e-gato-mordedor-d-nq-np-794211-mlb20515254584-122015-f-926x926.jpg")}
              ></ImageProduto>
              <Subtitle>Frango sonoro</Subtitle>
              <Price>R$ 19,99</Price>
            </ProdutoButton>
            <ProdutoButton
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ImageProduto
                source={require("../../../assets/Identidade Visual/_0079_6019-halter-gear-900x1200.jpg")}
              ></ImageProduto>
              <Subtitle>Brinquedo halter</Subtitle>
              <Price>R$ 12,99</Price>
            </ProdutoButton>

            <ProdutoButton
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ImageProduto
                source={require("../../../assets/Identidade Visual/dd-a4105t2-m_1_.jpg")}
              ></ImageProduto>
              <Subtitle>Macaco pelúcia</Subtitle>
              <Price>R$ 59,99</Price>
            </ProdutoButton>
          </ScrollView>
        </View>
      </BackgroundApp>
    </ScrollView>
  );
}
