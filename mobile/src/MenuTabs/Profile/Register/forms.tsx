/* import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-paper";
import { BackgroundApp } from "../Register/styles";

export default function Register() {

    const navigation = useNavigation();

    const { control, handleSubmit, formState: {errors}, getValues } = useForm({mode: 'onTouched'});

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    interface FormData {
        email: string;
        senha: string;
        confirmPassword: string;
    }

    return (
        
        <BackgroundApp>
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
                
                <Text style={{ color:'red'}}>{errors.email.message}</Text>} 
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
                        secureTextEntry
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

                        secureTextEntry
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
                <Text style={{ color:'red'}}>{errors.confirmPassword.message}</Text>}
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
        </BackgroundApp>
    )
} */