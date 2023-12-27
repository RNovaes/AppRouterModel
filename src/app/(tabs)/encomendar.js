import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Encomendar() {
    return (
        <View>
            <Text style={{ fontSize: 44, fontWeight: 'bold' }}>
                Encomendar
            </Text>
            <Link href='../(stacks)/pagamento'>Ir para pagamento</Link>
        </View>
    )
}