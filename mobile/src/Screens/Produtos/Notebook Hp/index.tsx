import React from "react";
import { View, Text } from "react-native";
import { Subtitle, Title } from "../../Home/styled";
import { useNavigation } from "@react-navigation/native";
import { IoArrowBackSharp } from "react-icons/io5";
import { Button } from "react-native-paper";


export default function Produtos() {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        icon="arrow-left"
        labelStyle={{ fontSize: 20 }}
        color="#5B5A5A"
        style={{ alignSelf: "flex-start", marginTop: 20}}
        onPress={() => {
          navigation.goBack();
        }}>

        </Button>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Subtitle> Informática </Subtitle>
        <Title> Notebook Hp 250</Title>
      </View>
    </View>
  );
}
