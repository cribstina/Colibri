import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";


export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Ofertas"
        onPress={() => navigation.navigate("Ofertas")}
      />
    </View>
  );
}
