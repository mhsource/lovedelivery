import React from 'react';
import { Feather } from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View,FlatList,Image,Text,TouchableOpacity,Linking,TextInput,AsyncStorage} from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

export default function NewIncidents(){

    const navigation = useNavigation()
    const route = useRoute()
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [value, setValue] = React.useState('');
    const styleInput = { height: 50,borderBottomColor: '#000000',borderBottomWidth: 1 };
    const ong_id = route.params.usuario

    function NavigateBack(){

        navigation.goBack()
    }

    async function salvar(){
        try{
            const response = await api.post('/incidents',{title,description,value},{headers:{
                Authorization: ong_id
            }})
            if(response.status ==200){
               navigation.navigate('Incidents');
            }
        }catch(err){
            console.log('Falha no login, tente novamente',err)
        }
    }

    return(
        <View  style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg} style={styles.image}   />
                <TouchableOpacity style={styles.detailsButton}  
                onPress={NavigateBack}>
                <Feather name="arrow-left" 
                size={28} color="#42A62C" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
            <Text style={[styles.incidentProperty,{marginTop:0}]}>Titulo:</Text>
            <TextInput style={styleInput} onChangeText={e => setTitle(e)} value={title} />
            <Text style={[styles.incidentProperty]}>Descrição:</Text>

            <TextInput multiline numberOfLines={4}
             style={{borderBottomColor: '#000000',borderBottomWidth: 1 }}  onChangeText={e => setDescription(e)} value={description} />

            <Text style={[styles.incidentProperty]}>Valor:</Text>
            <TextInput style={styleInput} onChangeText={e => setValue(e)} value={value} />
            </View>

            <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={salvar}>
                <Text style={styles.actionText}>Salvar</Text>
            </TouchableOpacity>
            </View>
           
        </View>
    );
}