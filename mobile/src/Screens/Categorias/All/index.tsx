import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Searchbar, Surface } from 'react-native-paper';
import { Category, Line } from './styles';

export default function Search() {

  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    
    <><Searchbar 
      placeholder="Pesquisar"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{ marginBottom: 25, marginTop: 15, borderRadius: 23 }}/>

      <Line>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Informática')}
          style={styles.TouchableOpacity} >
              <Category> Informática </Category>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => navigation.navigate('Infantil')}
          style={styles.TouchableOpacity} >
            <Category> Infantil </Category>
        </TouchableOpacity>
      </Line>

      <Line>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Petshop')}
          style={styles.TouchableOpacity} >
              <Category> Petshop </Category>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.navigate('Para Casa')}
          style={styles.TouchableOpacity} >
            <Category> Para casa </Category>
        </TouchableOpacity>
      </Line>

      <Line>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Livros')}
          style={styles.TouchableOpacity} >
            <Category> Livros </Category>
        </TouchableOpacity>
        
        <TouchableOpacity 
          onPress={() => navigation.navigate('Eletrodomésticos')}
          style={styles.TouchableOpacity} >
            <Category> Eletrodomésticos </Category>
        </TouchableOpacity>
      </Line>

      <Line>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Beleza')}
          style={styles.TouchableOpacity} >
            <Category> Beleza </Category>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.navigate('Roupas')}
          style={styles.TouchableOpacity} >
          <Category> Roupas </Category>
        </TouchableOpacity>
      </Line>
    </>
  );
}

const styles = StyleSheet.create({
  TouchableOpacity: {
    padding: 8,
    height: 80,
    width: 160,

    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',

    borderWidth: 1,
    borderColor: '#0B9E7C',
    borderRadius: 5,
    elevation: 4,

    backgroundColor: 'white',
    },
});