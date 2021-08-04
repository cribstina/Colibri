import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { FiHome, FiUser } from 'react-icons/fi';
import { HiOutlineHeart, HiOutlineSearch, HiOutlineLogout } from "react-icons/hi";

import { useFonts } from 'expo-font';

import Home from './src/MenuTabs/Home'
import Search from './src/MenuTabs/Search';
import Favorites from './src/MenuTabs/Favorites';
import Info from './src/Screens/Categorias/Informática';
import Login_Register from './src/MenuTabs/Profile/Login_Register';
import Kid from './src/Screens/Categorias/Infantil';
import Petshop from './src/Screens/Categorias/Petshop';
import ForHome from './src/Screens/Categorias/Para Casa';
import Book from './src/Screens/Categorias/Livros';
import Eletro from './src/Screens/Categorias/Eletro';
import Beauty from './src/Screens/Categorias/Beleza';
import Clothing from './src/Screens/Categorias/Roupas';
import UserProfile from './src/Screens/Perfil';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function AppTabs() {
  return (

      <Tabs.Navigator tabBarOptions={{ showLabel: false, activeTintColor: "#25B89F" }}>
      <Tabs.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (<FiHome color={color} size={size} />)
        }} />
      <Tabs.Screen name="Search" component={SearchStack}
        options={{
          tabBarIcon: ({ color, size }) => (<HiOutlineSearch color={color} size={size} />)
        }} />
      <Tabs.Screen name="Favorites" component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => (<HiOutlineHeart color={color} size={size} />)
        }} />
      <Tabs.Screen name="Login_Register" component={Login_Register}
        options={{
          tabBarIcon: ({ color, size }) => (<FiUser color={color} size={size} />)
        }} />

      </Tabs.Navigator>
    
  )
}

function SearchStack() {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Pesquisar" component={Search}/>
      <Stack.Screen name="Informática" component={Info}/>
      <Stack.Screen name="Infantil" component={Kid}/>
      <Stack.Screen name="Petshop" component={Petshop}/>
      <Stack.Screen name="Para Casa" component={ForHome}/>
      <Stack.Screen name="Livros" component={Book}/>
      <Stack.Screen name="Eletrodomésticos" component={Eletro}/>
      <Stack.Screen name="Beleza" component={Beauty}/>
      <Stack.Screen name="Roupas" component={Clothing}/>
    </Stack.Navigator>

  )
}

function ProfileLoginRegister() {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Perfil" component={UserProfile}/>
    </Stack.Navigator>

  )
}

export default function App() {

  const [ loaded ] = useFonts ({
    Changa: require('./fontes/Changa-VariableFont_wght.ttf')
  })
  return (

      <NavigationContainer>
          <Drawer.Navigator screenOptions={{headerShown: false}}>

            <Drawer.Screen 
              name="Início" component={AppTabs}
              options={{drawerIcon: ({color, size}) => 
              (<FiHome color={color} size={size} />)
              }} />
            <Drawer.Screen 
              name="Buscar" component={Search}
              options={{drawerIcon: ({color, size}) => 
              (<HiOutlineSearch color={color} size={size} />)
              }} />
            <Drawer.Screen 
              name="Favoritos" component={Favorites}
              options={{drawerIcon: ({color, size}) => 
              (<HiOutlineHeart color={color} size={size} />)
              }}/>

          </Drawer.Navigator>
      </NavigationContainer>
      
  )
}