import { View, Text, Alert } from "react-native";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {

    const {navigate} = useNavigation();

    const logout = () => {
        AsyncStorage.setItem("TOKEN", "").then(() => {
            navigate("index")
        }).catch(() => {
            Alert.alert("Erro ao sair")
        })
    }

    return (
        <View>
            <Text style={{ fontSize: 44, fontWeight: 'bold' }}>
                Meu Perfil
            </Text>

            <Button onPress={logout}>SAIR</Button>
        </View>
    )
}