import React,{useEffect,useState} from 'react';
import { Feather } from '@expo/vector-icons';
import {useNavigation,useRoute} from '@react-navigation/native';
import {View,FlatList,Image,Text,TouchableOpacity,AsyncStorage} from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

export default function Incidents(){

const route = useRoute()
const navigation = useNavigation()
const [incidents,setIncidents] = useState([]);
const [total,setTotal] = useState(0);
const [page,setPage] = useState(1);
const [loading,setLoading] = useState(false);
const usuario = route.params.userId

async function loadIncidents(){
    if(loading){
        return;
    }
    if(total > 0 && incidents.length == total){
        return;
    }
    setLoading(true)
    const response = await api.get('incidentsProfile',{
        params:{
            page
        },headers:{
            Authorization: usuario
        }
    });
    setIncidents([...incidents,...response.data])
    setTotal(response.headers['x-total-count'])
    setPage(page+1);
    setLoading(false)
}

useEffect(() => {
    loadIncidents()
},[])

useEffect(
    () => navigation.addListener('focus', () => loadIncidents()),
    []
  );

    function NavigateToDetail(incident){
        navigation.navigate('Detail',{incident});
    }

    function NavigateToNew(){
        navigation.navigate('NewIncidents',{usuario});
    }

    function Sair(){
        AsyncStorage.clear();
        navigation.navigate('Login');
    }

    return(
        <View style={styles.container} >
            <View style={styles.header}>
                <Image source={logoImg} style={styles.image} />
                <TouchableOpacity   onPress={() => Sair()}>
                <Text style={styles.headerText} >Sair</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.contactBox}>
            <View style={styles.actions}>
            <Text style={[styles.actionText,{color:'#000',paddingTop:15}]}>
                    Total de {total} casos
                </Text>
            <TouchableOpacity style={styles.action}  onPress={() => NavigateToNew()}>
                <Text style={styles.actionText} >Novo caso</Text>
           </TouchableOpacity>
            </View>
            </View>

        <FlatList 
            style={styles.incidentList}
            data={incidents}
            keyExtractor={incident => String(incident.id)}
            showsVerticalScrollIndicator={false}
            onEndReached={loadIncidents}
            onEndReachedThreshold={0.2}
            renderItem={({item:incident}) =>(         
                <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>
                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>
                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(incident.value)}</Text>
                <TouchableOpacity style={styles.detailsButton}  onPress={() => NavigateToDetail(incident)}>
                <Text style={styles.detailsButtonText} >Ver mais detalhes</Text>
                <Feather name="arrow-right" size={16} color="#42A62C" />
                </TouchableOpacity>
                </View>
            )}
        
        />
        </View>
    );
}