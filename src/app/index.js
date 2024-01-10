import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, Alert, ActivityIndicator } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import inicial from "./estilos/inicial";
import AsyncStorage from "@react-native-async-storage/async-storage";
import usuarioService from "../../services/UsuarioService";
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const {navigate} = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [isLoad, setLoad] = useState(false)
    const [isLoadingToken, setLoadingToken] = useState(false)

    const validaCampos = () => {

        let error = false

        // Verifique seus campos aqui
        if (email == '' || senha == '') {
            alert('Por favor, preencha todos os campos antes de prosseguir.');
            error = true
        } else {
            // Navegue para a próxima tela se os campos estiverem preenchidos
            // Substitua '/next-screen' pelo seu caminho de destino
            // Pode usar o useHistory() ou Redirect para navegar para a próxima tela
            //console.log('Campos válidos. Navegando para a próxima tela.');
        }

        return !error
    };

    const logar = () => {
        //setLoad(true)
        if (validaCampos()) {
            let data = {
                username: email,
                password: senha
            }
            usuarioService.verificaremail(data).then((response) => {
                if (response.data.status == true) {
                    usuarioService.login(data)
                        .then((response) => {
                            setLoad(false)
                            navigate("(tabs)");
                        })
                        .catch((error) => {
                            setLoad(false)
                            Alert.alert("Atenção", "Senha inválida")
                        })
                } else {
                    Alert.alert("Atenção", "Email incorreto ou não cadastrado")
                }
            }).catch((error) => {
                console.log(error)
            })

        }
    }

    //Função para utilizar o token existente para logar, sem precisar de login e senha
    const logarComToken = (token) => {

        setLoadingToken(true)
        let data = {
            token: token
        }
        usuarioService.loginComToken(data)
            .then((response) => {
                setLoadingToken(false)
                navigate("(tabs)")
            })
            .catch((error) => {
                setLoadingToken(false)
            })
    }

    useEffect(() => {
        AsyncStorage.getItem("TOKEN").then((token) => {
            if (token != null) {
                logarComToken(token)
            }
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <View>
            <Text style={{ fontSize: 44, fontWeight: 'bold' }}>
                Home
            </Text>

            <View style={inicial.blocoinputs}>
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    mode="outlined"
                />
                <TextInput
                    label="Senha"
                    secureTextEntry
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                    mode="outlined"
                />
                {isLoad && <ActivityIndicator />}
                {!isLoad && (
                    <Button
                        onPress={logar}
                        style={inicial.buttonlogar}
                        disabled={isLoad}
                    >
                        <Text style={inicial.fontbotao}>Login</Text>
                    </Button>
                )}
            </View>

            <Link href='cadastrar'>Criar Conta</Link>
            <Link href='reset'>Esqueci minha senha</Link>
        </View>
    )
}