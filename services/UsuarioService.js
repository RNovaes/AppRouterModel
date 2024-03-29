import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Config from "../util/config"

class UsuarioService {

    async cadastrar(data) {
        return axios({
            url: Config.API_URL + "usuario/cadastrar",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async login(data) {
        return axios({
            url: Config.API_URL + "usuario/login",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            if (response && response.data && response.data.access_token) {
                AsyncStorage.setItem("TOKEN", response.data.access_token)
                return Promise.resolve(response)
            }
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async loginComToken(data) {
        return axios({
            url: Config.API_URL + "usuario/login-token",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            if (response.data.access_token) {
                console.log("Token-LoginComToken ", response.data.access_token)
                if (response && response.data && response.data.access_token) {
                    AsyncStorage.setItem("TOKEN", response.data.access_token)
                    return Promise.resolve(response)
                }
            } else {
                return Promise.reject(response)
            }
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async verificar(data) {
        return axios({
            url: Config.API_URL + "usuario/verificar",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async verificaremail(data) {
        return axios({
            url: Config.API_URL + "usuario/verificar-email",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async recuperar(data) {
        return axios({
            url: Config.API_URL + "usuario/recuperar",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    async novasenha(data) {
        return axios({
            url: Config.API_URL + "usuario/novasenha",
            method: "POST",
            timeout: Config.TIMEOUT_REQUEST,
            data: data,
            headers: Config.HEADER_REQUEST
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}

const usuarioService = new UsuarioService()
export default usuarioService