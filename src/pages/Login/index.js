import React, {useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View,FlatList,Image,Text,TouchableOpacity,Linking,TextInput,AsyncStorage} from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

export default function Login(){

    const navigation = useNavigation()
    const route = useRoute()
    const [usuario, setUsuario] = React.useState('24ebc1bf');

    async function verificarSessao(){
      const userId = await AsyncStorage.getItem("userId")
      console.log(userId)
      if(userId != null){
      navigation.navigate('Incidents',{userId});
      }
    }

    useEffect(() => {
       verificarSessao()
    },[])

    function cadastro(){
        navigation.navigate('NewOng')
    }

    async function entrar(){
        try{
            const response = await api.post('/sessions',{id:usuario})
            if(response.status ==200){
               await AsyncStorage.setItem('userId',usuario);
               navigation.navigate('Incidents',{'userId':usuario});
            }
        }catch(err){
            console.log('Falha no login, tente novamente',err)
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} style={styles.image} />
            </View>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty]}>Uma idéia sustentavel, que pode te render dinheiro</Text>
            </View>
            <View style={styles.contactBox}>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={entrar}>
                        <Text style={styles.actionText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={cadastro}>
                        <Text style={styles.actionText}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}