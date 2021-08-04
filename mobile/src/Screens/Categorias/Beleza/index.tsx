import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Beauty() {

  const navigation = useNavigation();

  return (

    <><View>
      <Button 
        icon={'arrow-left'}
        labelStyle={{fontSize: 25}}
        onPress = {() => navigation.goBack()} 
        color="black"
        style={{ alignItems: 'flex-start', marginTop: 16 }} />
    </View>

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> Categoria Beleza </Text>
    </View></>
  );
}