import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Tabs, TabScreen } from 'react-native-paper-tabs';

import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { TextInput, Checkbox } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";


export default function Login_Register() {

  const navigation = useNavigation();

  const [checked, setChecked ] = React.useState(false);

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const { control, handleSubmit, formState: {errors}, getValues } = useForm({mode: 'onTouched'});

  const onSubmit = (data: FormData) => {
      console.log(data);
      navigation.navigate('UserProfile')

  }
  interface FormData {
      email: string;
      senha: string;
      confirmPassword: string;
  }

    return (
      <Tabs
        style={{backgroundColor: 'white'}}
        theme={{ colors: { primary: "#0B9E7C" } }}
      >
        <TabScreen label="ACESSAR">
           

        <View style={{ marginTop: 70 }}>
            <View>
                <Controller 
                control={control}
                render={({field:{onBlur, onChange, value}}) => (
                    <TextInput
                        label="E-mail"
                        placeholder="email@email.com"
                        mode="outlined"
                        outlineColor="#bbbbbb7e"
                        theme={{colors: {primary: "#0B9E7C"}}}
                        style={{width: 320, marginLeft: 20}}

                        onBlur={onBlur}
                        onChangeText= {(value:any) => onChange(value)}
                        value={value}
                    />
                )}
                rules={{ 
                    required: 'O e-mail é obrigatório.',
                     pattern: {
                         value: /^\S+@\S+$/i,
                       message: 'Formato de e-mail inválido.'
                     },
                }}
                name="email"
                defaultValue=""
                />

                {errors.email && 
                    <Text style={{ color:'red', display: 'flex', justifyContent: 'center'}}>{errors.email.message}</Text>}
 
            </View>

            <View>
                <Controller 
                control={control}
                render={({field:{onBlur, onChange, value}}) => (
                    <TextInput
                        label="Senha"
                        mode="outlined"
                        outlineColor="#bbbbbb7e"
                        theme={{colors: {primary: "#0B9E7C"}}}
                        style={{width: 320, marginLeft: 20, marginTop: 25}} 
                        secureTextEntry={secureTextEntry}
                        right={<TextInput.Icon 
                                    name="eye-outline"
                                    onPress = {() => {setSecureTextEntry(!secureTextEntry);
                                    }} />}
                        onBlur={onBlur}
                        onChangeText= {(value:any) => onChange(value)}
                        value={value}
                    />
                )}
                name="senha"
                defaultValue=""
                />
            </View>
            
            <View style={{ margin: 13, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {setChecked(!checked);}} 
                    color="#0B9E7C" />

                <Text> Lembrar usuário </Text>
            </View>

            <TouchableOpacity 
                style={{marginTop: 30}} 
                onPress={handleSubmit(onSubmit)}
                 >
                <LinearGradient
                    colors={['#0FD1A4', '#0B9E7C', '#065240']}
                    style={{ width: 300, height: 50, marginLeft: 30, justifyContent: 'center', alignItems: 'center', marginTop: 25, borderRadius: 35 }}>
                    <Text style={{color: 'white', fontSize: 17}}>
                        ENTRAR
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>

        </TabScreen>


        <TabScreen label="REGISTRAR">
    
         
         <View style={{ marginTop: 70 }}>
            <View>
                <Controller 
                control={control}
                render={({field:{onBlur, onChange, value}}) => (
                    <TextInput
                        label="E-mail"
                        placeholder="email@email.com"
                        mode="outlined"
                        outlineColor="#bbbbbb7e"
                        theme={{colors: {primary: "#0B9E7C"}}}
                        style={{width: 320, marginLeft: 20}}

                        onBlur={onBlur}
                        onChangeText= {(value:any) => onChange(value)}
                        value={value}
                    />
                )}
                rules={{ 
                    required: 'O e-mail é obrigatório.',
                     pattern: {
                         value: /^\S+@\S+$/i,
                       message: 'Formato de e-mail inválido.'
                     },
                }}
                name="email"
                defaultValue=""
                />

                {errors.email && 
                <Text style={{ color:'red', display: 'flex', justifyContent: 'center'}}>{errors.email.message}</Text>} 

            </View>

            <View>
                <Controller 
                control={control}
                render={({field:{onBlur, onChange, value}}) => (
                    <TextInput
                        label="Senha"
                        mode="outlined"
                        outlineColor="#bbbbbb7e"
                        theme={{colors: {primary: "#0B9E7C"}}}
                        style={{width: 320, marginLeft: 20, marginTop: 25}} 
                        secureTextEntry={secureTextEntry}
                        right={<TextInput.Icon 
                                    name="eye-outline"
                                    onPress = {() => {setSecureTextEntry(!secureTextEntry);
                                    }} />}
                        onBlur={onBlur}
                        onChangeText= {(value:any) => onChange(value)}
                        value={value}
                    />
                )}
                name="senha"
                defaultValue=""
                />
            </View>

            <View>
                <Controller 
                control={control}
                render={({field:{onBlur, onChange, value}}) => (
                    <TextInput
                        label="Confirme sua senha"
                        mode="outlined"
                        outlineColor="#bbbbbb7e"
                        theme={{colors: {primary: "#0B9E7C"}}}
                        style={{width: 320, marginLeft: 20, marginTop: 25}}
                        secureTextEntry={secureTextEntry}
                        right={<TextInput.Icon 
                                    name="eye-outline"
                                    onPress = {() => {setSecureTextEntry(!secureTextEntry);
                                    }} />}
                        onBlur={onBlur}
                        onChangeText= {(value:any) => onChange(value)}
                        value={value}
                    />
                )}
                rules={{ 
                    validate: {
                        verifyPassword: (value) => {
                        const { senha } = getValues();
                        return senha === value || 'As senhas devem ser idênticas';
                        }
                    }
                   }}
                name="confirmPassword"
                defaultValue=""
                />

                {errors.confirmPassword && 
                <Text style={{ color:'red', display: 'flex', justifyContent: 'center' }}>{errors.confirmPassword.message}</Text>}
            </View>

            <TouchableOpacity style={{marginTop: 30}} onPress={handleSubmit(onSubmit)}>
                <LinearGradient
                    colors={['#0FD1A4', '#0B9E7C', '#065240']}
                    style={{ width: 300, height: 50, marginLeft: 30, justifyContent: 'center', alignItems: 'center', marginTop: 25, borderRadius: 35 }}>
                    <Text style={{color: 'white', fontSize: 17}}>
                        REGISTRAR-SE
                    </Text>
                </LinearGradient>
            </TouchableOpacity>

         </View>

        </TabScreen>
      </Tabs>
    
    )
}