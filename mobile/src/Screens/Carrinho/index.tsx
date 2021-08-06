import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";

export default function Cart(){
    return (

        <View 
            style={{ flexDirection: 'row', marginTop: 50, backgroundColor: '#e6e4e4fa', padding: 20 }}>
            <><View>
                <TouchableOpacity>
                    <Image
                    style={{ height: 100, width: 100, marginHorizontal: 20 }}
                    source={{ uri: 'https://cdn.verbolia.com/api/images/H4sIAAAAAAAEAGWPQUvEMBCF!0rIWRLb3a3a266wuIfC4iqes+mQjiaZkkygIP5304soDnOZx+N7bz7la!KylxPznHutMThFflGWgrqmehoHWbdt3bZ5aLpu2+26+12j3mcnb+TReH819uMvJLNhtL85dtQeM2N0OhIfqcRRzXElDGbBUMIToJtY9s3d7Y!2hiNPsm83Vdp7hhQNwwss1SYHKhnEAJwoirMvWewjoyNxgYTGi7MVjxTmwmakJA7kMU5G/PK9+8W9qjdP66IUTsK2Rm69v6wVoZhgBAAA=/mouse-metron-plus-antigo-serial-pc-computador-bolinha-retro.jpg' }}/>
                </TouchableOpacity>
            </View>
        
            <View style={{ alignItems: 'center' }} >
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}> 

                    Mouse Gamer

                </Text>

                <Text style={{ padding: 4 ,borderWidth: 2, borderColor: '#06DAB5', borderRadius: 10, fontSize: 12, marginTop: 5 }}> 

                    R$ 599,90 

                </Text>
            </View></>

            <Button
            icon="trash-can-outline"
            labelStyle={{ fontSize: 20 }}
            color="red" />
        </View>
        
            

    
    )
}