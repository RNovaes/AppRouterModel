import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Reset() {

    // const recuperar = () => {
    //     if (validacao()) {
    //       const startDate = getFormatedDate(today.setDate(today.getDate()), 'DDMMYYHHmmSS')
    //       let data = {
    //         email: email,
    //         senha: startDate
    //       }
    //       usuarioService.verificar(data).then((response) => {
    //         if (response.data.status == true) {
    //           usuarioService.recuperar(data).then((response) => {
    //             usuarioService.novasenha(data).then((response) => {
    //             }).catch((error) => {
    //               console.log(error)
    //             })
    //             Alert.alert("Sucesso", "Sua nova senha será enviada para o email informado.")
    //             navigation.reset({
    //               index: 0,
    //               routes: [{ name: "login" }]
    //             })
    //           }).catch((error) => {
    //             console.log(error)
    //           })
    //         } else {
    //           Alert.alert("Email não cadastrado")
    //         }
    //       }).catch((error) => {
    //         console.log(error)
    //       })
    //     }
    //   }

    return (
        <View>
            <Text style={{ fontSize: 44, fontWeight: 'bold' }}>
                Resetar Senha
            </Text>
            <Link href="/">Login</Link>
        </View>
    )
}