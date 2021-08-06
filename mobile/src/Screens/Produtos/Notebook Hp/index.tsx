import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import {
  SubTitle,
  Title,
  Name,
  Line,
  ProductImage,
  SmallProductImage,
  Price,
  OldPrice,
  Juros,
  Description,
  BackgroundApp,
  Tag,
  CommentsBackgroundApp,
  Username,
  Comments,
  Comments2,
  Username2,
  Description2,
  UserBackgroundApp,
} from "../../Produtos/Notebook Hp/styled";
import { useNavigation } from "@react-navigation/native";
import { IoArrowBackSharp, IoPersonCircleSharp } from "react-icons/io5";
import { Button } from "react-native-paper";

export default function Produtos() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <BackgroundApp>
        <Button
          icon="arrow-left"
          labelStyle={{ fontSize: 20 }}
          color="#5B5A5A"
          style={{ alignSelf: "flex-start", marginTop: 20 }}
          onPress={() => {
            navigation.goBack();
          }}
        ></Button>

        <View style={{ flex: 1 }}>
          <SubTitle> Informática </SubTitle>
          <Title> Notebook Hp 250</Title>
          <Name> Henrique Store</Name>

          <ProductImage
            source={require("../../../../assets/Identidade Visual/8122042_1.webp")}
          ></ProductImage>

          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Line>
              <SmallProductImage
                source={require("../../../../assets/Identidade Visual/8122042_1.webp")}
              ></SmallProductImage>
            </Line>
            <Line>
              <SmallProductImage
                source={require("../../../../assets/Identidade Visual/8122042_3.webp")}
              ></SmallProductImage>
            </Line>
            <Line>
              <SmallProductImage
                source={require("../../../../assets/Identidade Visual/8122042_7.webp")}
              ></SmallProductImage>
            </Line>
          </View>

          <OldPrice>R$ 5.999,99</OldPrice>
          <Price>R$ 4.999,99</Price>
          <Juros>Em 12X de 416,66</Juros>
          <Button
            style={{ alignSelf: "center" }}
            color="#236D71"
            onPress={() => {
              navigation.navigate("Ofertas");
            }}
          >
            Adicionar ao carrinho
          </Button>
          <Tag>Descrição</Tag>
          <Description>
            Conte com o melhor da tecnologia e execute todas as tarefas com o
            máximo de agilidade e eficiência com o Notebook HP 250 G8. Projetado
            para entregar um desempenho de nível desktop totalmente portátil,
            ele traz uma configuração poderosa que inclui processador Intel Core
            i5 da 10ª geração e 8GB de memória RAM.
          </Description>
        </View>
      </BackgroundApp>
      <CommentsBackgroundApp>
        <View>
          <Tag> Avaliações</Tag>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginLeft: 18,
            }}
          >
            <View style={{ justifyContent: "center" }}>
              <IoPersonCircleSharp style={{ fontSize: 30 }} />
            </View>

            <View>
              <Username>Gilberto </Username>
              <Comments>
                O Git é como colocar um fone de ouvido no bolso
              </Comments>
            </View>

            <View></View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginLeft: 23,
              
            }}
          >
            <View style={{ justifyContent: "center" }}>
              <IoPersonCircleSharp style={{ fontSize: 30 }} />
            </View>

            <View>
              <Username2>Emma </Username2>
              <Comments2>
                O cliente não vê "Emma" ou "Gilberto", ele vê a EJCM!
              </Comments2>
            </View>

            <View></View>
          </View>
          </View>

        
      </CommentsBackgroundApp>

      <UserBackgroundApp>
        <View>
          <Tag>Informações do anunciante</Tag>

         

          <View style={{ justifyContent: "center", alignItems: "center" }}>
              <IoPersonCircleSharp style={{ fontSize: 80 }} />
          

          </View>
          <Description2>Henrique Store</Description2>
          <Description2>No Colibri há 5 anos</Description2>
        </View>
      </UserBackgroundApp>
    </ScrollView>
  );
}
