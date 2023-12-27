import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Reset() {
    return (
        <View>
            <Text style={{ fontSize: 44, fontWeight: 'bold' }}>
                Resetar Senha
            </Text>
            <Link href="/">Login</Link>
        </View>
    )
}