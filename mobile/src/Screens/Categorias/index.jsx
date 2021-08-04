import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Title, CategoriasButton, TextList, BackgroundApp } from './styled';


export default function Categorias() {
    return (
        <BackgroundApp>
            <View>
                <Title>Categorias</Title>
            </View>

            <CategoriasButton>
                <TextList>Mercado</TextList>
            </CategoriasButton>

            <CategoriasButton>
                <TextList>Celulares</TextList>
            </CategoriasButton>

            <CategoriasButton>
                <TextList>Informática</TextList>
            </CategoriasButton>

            <CategoriasButton>
                <TextList>Beleza e perfumaria</TextList>
            </CategoriasButton>

            <CategoriasButton>
                <TextList>Tv, áudio e home theater</TextList>
            </CategoriasButton>

            <CategoriasButton>
                <TextList>Eletrodoméstico e split</TextList>
            </CategoriasButton>

            <CategoriasButton>
                <TextList>Eletroportáteis</TextList>
            </CategoriasButton>

            <CategoriasButton>
                <TextList>Móveis e decoração</TextList>
            </CategoriasButton>

            <CategoriasButton>
                <TextList>Brinquedos e bebês</TextList>
            </CategoriasButton>

            <CategoriasButton>
                <TextList>Esporte e lazer</TextList>
            </CategoriasButton>

            <CategoriasButton>
                <TextList>Livros</TextList>
            </CategoriasButton>

            <CategoriasButton>
                <TextList>Papelaria</TextList>
            </CategoriasButton>

            <CategoriasButton>
                <TextList>Petshop</TextList>
            </CategoriasButton>

        </BackgroundApp>
    )
}

