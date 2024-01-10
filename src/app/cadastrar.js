import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, Button, Alert, ActivityIndicator } from "react-native";
import usuarioService from "../../services/UsuarioService";

export default function Cadastrar() {

    const [nome, setNome] = useState(null)
    const [email, setEmail] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [senha, setSenha] = useState(null)
    const [alterado, setAlterado] = useState(0)

    const [isLoading, setLoading] = useState(false)

    const validacao = () => {

        let error = false

        // Verifique seus campos aqui
        if (nome == null || email == null || telefone == null || senha == null) {
            Alert.alert('Atenção', 'Por favor, preencha todos os campos antes de prosseguir.');
            error = true
        }

        return !error
    };

    const enviarcadastro = () => {
        if (validacao()) {
            setLoading(true)

            let data = {
                nome: nome,
                email: email,
                telefone: telefone,
                senha: senha,
                alterado: alterado
            }
            usuarioService.cadastrar(data)
                .then((response) => {
                    setLoading(false)
                    const titulo = (response.data.status) ? "Sucesso" : "Erro"
                    Alert.alert(titulo, response.data.mensagem)
                    if (response.data.status == true) {

                    } else {

                    }
                })
                .catch((error) => {
                    setLoading(false)
                })
        }
    }

    return (
        <View>
            <Text style={{ fontSize: 44, fontWeight: 'bold' }}>
                Cadastrar
            </Text>
            <View style={{ marginBottom: 20, marginTop: 20 }}>
                <TextInput
                    placeholder="Nome"
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                    style={{ backgroundColor: 'gray' }}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={{ backgroundColor: 'gray' }}
                />
                <TextInput
                    placeholder="Telefone"
                    keyboardType="numeric"
                    value={telefone}
                    onChangeText={(text) => setTelefone(text)}
                    style={{ backgroundColor: 'gray' }}
                />
                <TextInput
                    placeholder="Senha"
                    secureTextEntry
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                    style={{ backgroundColor: 'gray' }}
                />
                {isLoading &&
                    <ActivityIndicator />
                    //<Text>Carregando...</Text>
                }
                {!isLoading &&
                    <Link href="/" asChild>
                        <Button onPress={enviarcadastro} title="Cadastrar" />
                    </Link>
                }
            </View>
            <Link href="/">Login</Link>
        </View>
    )
}