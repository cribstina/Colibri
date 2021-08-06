import React from 'react';
import { Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function Filmes() {

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> Página Favoritos </Text>
    </View>
    
  );
}