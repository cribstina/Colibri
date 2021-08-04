import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Title } from "./styled";


export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Title>Ofertas do dia</Title>
      <Title>Ofertas em informática</Title>
      <Title>Ofertas em Petshop</Title>
    </View>
  );
}


