import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import { IoList } from 'react-icons/io5';
import { IoHomeOutline } from 'react-icons/io5';
import { IoPricetagOutline } from 'react-icons/io5';
import { IoHeartOutline } from 'react-icons/io5';
import { IoBagOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { IoGiftOutline } from 'react-icons/io5';





import Home from './src/Screens/Home';
import Pesquisa from './src/Screens/Pesquisa';
import Favoritos from './src/Screens/Favoritos';
import Pedidos from './src/Screens/pedidos';
import Ofertas from './src/Screens/Ofertas';
import Categorias from './src/Screens/Categorias';
import Presentes from './src/Screens/Presente';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeTabs() {
    return(
        <Tab.Navigator tabBarOptions={{showLabel: false, activeTintColor: '#5FC7B7',inactiveTintColor: '#5B5A5A'}}>
             <Tab.Screen name="Home" component={Home} 
                 options={{tabBarIcon: ({color, size}) =>
                        (<IoHomeOutline color={color} size={size} />)
                        }} />
                <Tab.Screen name="Pesquisa" component={Pesquisa} 
                    options={{tabBarIcon: ({color, size})=>
                        (<IoSearchOutline color={color} size={size} />)
                        }}/>
                <Tab.Screen name="Favoritos" component={Favoritos} 
                    options={{tabBarIcon: ({color, size})=>
                        (<IoHeartOutline color={color} size={size} />)
                         }}/>
                <Tab.Screen name="Meus Pedidos" component={Pedidos} 
                    options={{tabBarIcon: ({color, size}) =>
                        (<IoBagOutline color={color} size={size} />) 
                        }}/>
                
        </Tab.Navigator>
    )
}


function MenuDrawer() {
    return (
        <Drawer.Navigator screenOptions={{headerShown: true, headerStyle: {backgroundColor: "#06DAB5"
        }, headerTintColor: '#fff',}}>
            <Drawer.Screen name="Home" component={HomeTabs} 
            options={{drawerIcon: ({color, size}) =>
            (<IoHomeOutline color={color} size={size} />)
            }} /> 
            <Drawer.Screen name="Buscar" component={Pesquisa}
            options={{drawerIcon: ({color, size})=>
            (<IoSearchOutline color={color} size={size} />)
            }}/> 
            <Drawer.Screen name="Categorias" component={Categorias}
            options={{drawerIcon: ({color, size}) =>
            (<IoList color={color} size={size} />)
            }} /> 
            <Drawer.Screen name="Ofertas do dia" component={Ofertas}
            options={{drawerIcon: ({color, size}) =>
            (<IoPricetagOutline color={color} size={size} />)
            }} /> 
            <Drawer.Screen name="Dicas de presentes" component={Ofertas}
            options={{drawerIcon: ({color, size}) =>
            (<IoGiftOutline color={color} size={size} />)
            }} /> 
        </Drawer.Navigator>
    )
}

export default function app() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen name="Menu" component={MenuDrawer} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

