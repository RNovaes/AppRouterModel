import { Stack } from "expo-router";

export default function RotasStacksLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="pagamento"
                options={{
                    title: "Pagamento"
                }}
            />
        </Stack>
    )
}