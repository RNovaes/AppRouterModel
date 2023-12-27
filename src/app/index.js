import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Home() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = (event) => {
        // Verifique seus campos aqui
        if (email === '' || senha === '') {
            alert('Por favor, preencha todos os campos antes de prosseguir.');
            event.preventDefault()
        } else {
            // Navegue para a próxima tela se os campos estiverem preenchidos
            // Substitua '/next-screen' pelo seu caminho de destino
            // Pode usar o useHistory() ou Redirect para navegar para a próxima tela
            //console.log('Campos válidos. Navegando para a próxima tela.');
        }
    };

    return (
        <View>
            <Text style={{ fontSize: 44, fontWeight: 'bold' }}>
                Home
            </Text>

            <View style={{ marginBottom: 20, marginTop: 20 }}>
                <TextInput
                    placeholder="Username"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={{ backgroundColor: 'gray' }}
                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                    style={{ backgroundColor: 'gray' }}
                />
                <Link href="/(tabs)/encomendar" asChild>
                    <Button onPress={logar} title="Login" />
                </Link>
            </View>

            <Link href='cadastrar'>Criar Conta</Link>
            <Link href='reset'>Esqueci minha senha</Link>
        </View>
    )
}