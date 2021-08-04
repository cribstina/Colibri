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