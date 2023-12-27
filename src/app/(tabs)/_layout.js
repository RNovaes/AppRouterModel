import { Tabs } from "expo-router"
import { MaterialIcons } from '@expo/vector-icons'

export default function RotasBotoesLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="encomendar"
                options={{
                    title: "Encomendar",
                    tabBarIcon: ({ size, color }) => {
                        <MaterialIcons name="person" size={size} color={color} />
                    }
                }}
            />
            <Tabs.Screen
                name="pedidos"
                options={{
                    title: "Pedidos",
                    tabBarIcon: ({ size, color }) => {
                        <MaterialIcons name="person" size={size} color={color} />
                    }
                }}
            />
            <Tabs.Screen
                name="localizacao"
                options={{
                    title: "Localização",
                    tabBarIcon: ({ size, color }) => {
                        <MaterialIcons name="person" size={size} color={color} />
                    }
                }}
            />
            <Tabs.Screen
                name="perfil"
                options={{
                    title: "Minha Conta",
                    tabBarIcon: ({ size, color }) => {
                        <MaterialIcons name="person" size={size} color={color} />
                    }
                }}
            />
        </Tabs>
    )
}