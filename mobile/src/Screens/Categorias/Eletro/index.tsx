import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import { Return } from '../All/styles';

export default function Eletro() {

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
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Categoria Eletrodomésticos </Text>
      </View></>
  );
}

