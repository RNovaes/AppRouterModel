import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Cadastrar() {
    return (
        <View>
            <Text style={{ fontSize: 44, fontWeight: 'bold' }}>
                Cadastrar
            </Text>
            <Link href="/">Login</Link>
        </View>
    )
}