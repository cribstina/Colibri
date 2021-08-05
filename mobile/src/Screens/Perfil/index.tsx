import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import { MainView, TopView, BottomView, RoleText, OptionsView, OptionView } from './styles';
import { BsHeartFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { GrMoney } from 'react-icons/gr';
import { BsBagFill } from 'react-icons/bs';
import { BiPencil } from 'react-icons/bi';
import axios from "axios";

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  optionText: {
    textAlign: 'center'
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

  useEffect(() => {

  }, []);

  const getUserInfo = () => {
    try {
      axios.
    } catch (error) {
      throw error;
    }
  }

  return (
    <MainView>
      <View>
        <TopView>
          <View>
          <Avatar.Icon 
              size={100} icon="account"
              style={{ backgroundColor: '#06DAB5' }} />
          
          <Text style={{ fontSize: 24, marginTop: 24 }}>Usuário</Text>
          <RoleText>Role</RoleText>
          </View>
        </TopView>
        <BottomView>
          <OptionsView>
            <OptionView>
                <View>
                <BsBagFill size={50} style={styles.icon} />
                </View>
          </OptionView>
          <OptionView>
            <View>
              <BsHeartFill size={50} style={styles.icon} color="red"/>
              {/*<Text style={styles.optionText}>Favoritos</Text>*/}
            </View>
          </OptionView>
          <OptionView>
            <View>
              <AiFillStar size={50} style={styles.icon}/>
              {/*<Text style={styles.optionText}>Avaliações</Text>*/}
            </View>
          </OptionView>
          <OptionView>
            <View>
              <GrMoney size={50} style={styles.icon}/>
              {/*<Text style={styles.optionText}>Vendas</Text>*/}
            </View>
          </OptionView>
          </OptionsView>
          </BottomView>
      </View>
    </MainView>

  );
}