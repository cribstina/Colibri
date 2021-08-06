import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import { MainView, TopView, BottomView, RoleText, OptionsView, OptionView } from './styles';
import { BsHeartFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { GrMoney } from 'react-icons/gr';
import { BsBagFill } from 'react-icons/bs';
import { BiPencil } from 'react-icons/bi';
import { MdMonetizationOn } from "react-icons/md";
import api from "../../Api";

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  optionText: {
    textAlign: 'center',
    marginTop: 5
  },
  icon: {
    flexGrow: 1,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent:'center',
  },
});

export default function UserProfile() {
  const user_id = 1;
  

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const response = await api.get(`/user/${user_id}`);

      console.log("RESPONSE", response.data);
    } catch (error) {
      throw error;
    }
  }

  return (
    <MainView>
      <View>
        <TopView>
          <View style={{alignItems: 'center'}}>
          <Avatar.Icon 
              size={100} icon="account" color='white'
              style={{ backgroundColor: '#06DAB5' }} />
          
          <Text style={{ fontSize: 24, marginTop: 24 }}>Usuário</Text>
          <RoleText></RoleText>
          </View>
        </TopView>
        <BottomView>
          <OptionsView>
            <OptionView>
                <View style={{alignItems: 'center'}}>
                <BsBagFill size={50} style={styles.icon} color='#236D71'/>
                {<Text style={styles.optionText}>Meus pedidos</Text>}
                </View>
          </OptionView>
          <OptionView>
            <View style={{alignItems: 'center'}}>
              <BsHeartFill size={50} style={styles.icon} color='#236D71'/>
              {<Text style={styles.optionText}>Favoritos</Text>}
            </View>
          </OptionView>
          <OptionView>
            <View style={{alignItems: 'center'}}>
              <AiFillStar size={50} style={styles.icon} color='#236D71'/>
              {<Text style={styles.optionText}>Avaliações</Text>}
            </View>
          </OptionView>
          <OptionView>
            <View style={{alignItems: 'center'}}>
              <MdMonetizationOn size={50} style={styles.icon} color='#236D71'/>
              {<Text style={styles.optionText}>Vendas</Text>}
            </View>
          </OptionView>
          </OptionsView>
          </BottomView>
      </View>
    </MainView>

  );
}