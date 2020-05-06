import React from 'react';
import { Feather } from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View,FlatList,Image,Text,TouchableOpacity,Linking,TextInput,AsyncStorage,Clipboard,Share,Alert } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';
import {Picker} from '@react-native-community/picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CheckBox } from 'react-native-elements'

export default function NewOng(){

    const navigation = useNavigation()
    const route = useRoute()

    const [ide, setIde] = React.useState('');

    const [categoria, setCategoria] = React.useState('');
    const [tipoPessoa, setTipoPessoa] = React.useState('');
    const [cpfCnpj, setCpfCnpj] = React.useState('');
    const [nomeEstabelecimento, setNomeEstabelecimento] = React.useState('');
    const [nomeProprietario, setNomeProprietario] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telefone, setTelefone] = React.useState('');

    const [cep,setCep] = React.useState('');
    const [tipoEndereco,setTipoEndereco] = React.useState('');
    const [logradouro,setLogradouro] = React.useState('');
    const [numero,setNumero] = React.useState('');
    const [complemento,setComplemento] = React.useState('');
    const [bairro,setBairro] = React.useState('');
    const [cidade,setCidade] = React.useState('');
    const [uf,setUF] = React.useState('');

    const [diaFuncionamento,setDiaFuncionamento] = React.useState(true);
    const [horarioFuncionamento,setHorarioFuncionamento] = React.useState('');
    const [formaPagamento,setFormaPagamento] = React.useState('');
    const [area,setArea] = React.useState('');
    const [linkPrestador,setLinkPrestador] = React.useState('');
    const [tema,setTema] = React.useState('');
    const [logo,setLogo] = React.useState('');
    const [senha,setSenha] = React.useState('');

    const [visibleDadosCadastral, setVisibleDadosCadastral] = React.useState();
    const [visibleEndereco, setVisibleEndereco] = React.useState({display:'none'});
    const [visibleEmpresa, setVisibleEmpresa] = React.useState({display:'none'});
    const [visibleSenha, setVisibleSenha] = React.useState({display:'none'});
    const [visibleFinal, setVisibleFinal] = React.useState({display:'none'});

    const styleInput = { height: 40,borderBottomColor: '#000000',borderBottomWidth: 1, };

    function NavigateBack(){
        setVisibleDadosCadastral()
        setVisibleEndereco({display:'none'})
        setVisibleEmpresa({display:'none'})
        setVisibleSenha({display:'none'})
        setVisibleFinal({display:'none'})
        navigation.goBack()
    }

 
  function Proximo(workflow){

    switch (workflow) {

        case 0:
            setVisibleDadosCadastral()
            setVisibleEndereco({display:'none'})
            setVisibleEmpresa({display:'none'})
            setVisibleSenha({display:'none'})
            setVisibleFinal({display:'none'})
            break;

        case 1:
            setVisibleDadosCadastral({display:'none'})
            setVisibleEndereco()
            setVisibleEmpresa({display:'none'})
            setVisibleSenha({display:'none'})
            setVisibleFinal({display:'none'})
            break;

        case 2:
            setVisibleDadosCadastral({display:'none'})
            setVisibleEndereco({display:'none'})
            setVisibleEmpresa()
            setVisibleSenha({display:'none'})
            setVisibleFinal({display:'none'})
            break;

        case 3:
            setVisibleDadosCadastral({display:'none'})
            setVisibleEndereco({display:'none'})
            setVisibleEmpresa({display:'none'})
            setVisibleSenha()
            setVisibleFinal({display:'none'})
            break;

        case 4:
            setVisibleDadosCadastral({display:'none'})
            setVisibleEndereco({display:'none'})
            setVisibleEmpresa({display:'none'})
            setVisibleSenha({display:'none'})
            setVisibleFinal()
            break;
    
        default:
            break;
    }

}

    async function salvar(){
        try{
            const response = await api.post('/cadastro-prestador',{categoria,tipoPessoa,cpfCnpj,nomeEstabelecimento,nomeProprietario,email,telefone})
            if(response.status ==200){
               setIde(response.data.id)
               console.log(response.data)
               Proximo(1)
            }
        }catch(err){
            console.log('Falha no cadastro, tente novamente',err)
        }
    }

    function testar(test){
        console.log(test)
    }


    return(
        <View  style={styles.container}>
            
            <View style={styles.header}>
                <Image source={logoImg} style={styles.image} />
            </View>

            <KeyboardAwareScrollView  showsVerticalScrollIndicator={false}>
            <View style={[visibleDadosCadastral]} >
        
            <View style={[styles.incident]} >
            <Text style={[styles.incidentProperty]}>Categoria:</Text>
            <Picker selectedValue={categoria} style={[styleInput,{borderBottomColor:'#000'}]}
             onValueChange={(itemValue, itemIndex) => setCategoria(itemValue) }>
            <Picker.Item label="Selecione..." value=""/>
            <Picker.Item label="Comida" value="Comida" />
            <Picker.Item label="Bebida" value="Bebida" />
            </Picker>
            <Text style={[styles.incidentProperty]}>Tipo de pessoa:</Text>
            <Picker selectedValue={tipoPessoa} style={styleInput}
             onValueChange={(itemVal, itemIndex) => setTipoPessoa(itemVal) }>
            <Picker.Item label="Selecione..." value=""/>
            <Picker.Item label="Pessoa Fisica" value="PF" />
            <Picker.Item label="Pessoa Juridica" value="PJ" />
            </Picker>
            <Text style={[styles.incidentProperty]}>Documento:</Text>
            <TextInput style={styleInput} onChangeText={e => setCpfCnpj(e)} value={cpfCnpj} />
            <Text style={[styles.incidentProperty]}>Nome do Estabelecimento:</Text>
            <TextInput style={styleInput} onChangeText={e => setNomeEstabelecimento(e)} value={nomeEstabelecimento} />
            <Text style={[styles.incidentProperty]}>Nome do propetário:</Text>
            <TextInput style={styleInput} onChangeText={e => setNomeProprietario(e)} value={nomeProprietario} />
            <Text style={[styles.incidentProperty]}>E-mail:</Text>
            <TextInput style={styleInput} onChangeText={e => setEmail(e)} value={email} />
            <Text style={[styles.incidentProperty]}>Telefone:</Text>
            <TextInput style={styleInput} onChangeText={e => setTelefone(e)} value={telefone} />

            <View style={[styles.contactBox]}>
            <View style={[styles.actions]}>
            <TouchableOpacity style={styles.action} onPress={NavigateBack}>
                <Text style={styles.actionText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} onPress={() => Proximo(1)}>
                <Text style={styles.actionText}>Proximo</Text>
            </TouchableOpacity>
            </View>
            </View>

            </View>
            </View>


            <View style={[visibleEndereco]}>  
             
            <View style={[styles.incident]} >

            <Text style={[styles.incidentProperty]}>CEP:</Text>
            <TextInput style={styleInput} onChangeText={e => setCep(e)} value={cep} />
            <Text style={[styles.incidentProperty]}>Logradouro:</Text>
            <TextInput style={styleInput} onChangeText={e => setLogradouro(e)} value={logradouro} />
            <Text style={[styles.incidentProperty]}>Numero:</Text>
            <TextInput style={styleInput} onChangeText={e => setNumero(e)} value={numero} />
            <Text style={[styles.incidentProperty]}>Complemento:</Text>
            <TextInput style={styleInput} onChangeText={e => setComplemento(e)} value={complemento} />
            <Text style={[styles.incidentProperty]}>Bairro:</Text>
            <TextInput style={styleInput} onChangeText={e => setBairro(e)} value={bairro} />
            <Text style={[styles.incidentProperty]}>Cidade:</Text>
            <TextInput style={styleInput} onChangeText={e => setCidade(e)} value={cidade} />
            <Text style={[styles.incidentProperty]}>Uf:</Text>
            <TextInput style={styleInput} onChangeText={e => setUF(e)} value={uf} />

            <View style={[styles.contactBox]}>
            <View style={[styles.actions]}>
            <TouchableOpacity style={styles.action} onPress={() => Proximo(0)}>
                <Text style={styles.actionText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} onPress={() => Proximo(2)}>
                <Text style={styles.actionText}>Proximo</Text>
            </TouchableOpacity>
            </View>
            </View>
            </View>
 
            </View>

            <View style={[visibleEmpresa]}>   
            <View style={[styles.incident]} >

            <Text style={[styles.incidentProperty]}>Uf:</Text>
            <TextInput style={styleInput} onChangeText={e => setUF(e)} value={uf} />
            <Text style={[styles.incidentProperty]}>Uf:</Text>
            <TextInput style={styleInput} onChangeText={e => setUF(e)} value={uf} />
            <Text style={[styles.incidentProperty]}>Uf:</Text>
            <TextInput style={styleInput} onChangeText={e => setUF(e)} value={uf} />
            <Text style={[styles.incidentProperty]}>Uf:</Text>
            <TextInput style={styleInput} onChangeText={e => setUF(e)} value={uf} />
            <Text style={[styles.incidentProperty]}>Uf:</Text>
            <TextInput style={styleInput} onChangeText={e => setUF(e)} value={uf} />

            <CheckBox title='Segunda' onPress={e => setDiaFuncionamento(e)} checked={diaFuncionamento}/>
            <CheckBox title='Terça'/>
            <CheckBox title='Quarta'/>
            <CheckBox title='Quinta'/>
            <CheckBox title='Sexta'/>
            <CheckBox title='Sabado'/>
            <CheckBox title='Domingo'/>

            <View style={[styles.contactBox]}>
            <View style={[styles.actions]}>
            <TouchableOpacity style={styles.action} onPress={() => Proximo(1)}>
                <Text style={styles.actionText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} onPress={() => Proximo(3)}>
                <Text style={styles.actionText}>Proximo</Text>
            </TouchableOpacity>
            </View>
            </View>
            </View>
            </View>

            <View style={[visibleSenha]}>   
            <View style={[styles.incident]} >
            <Text style={[styles.incidentProperty]}>Senha</Text>
            </View>
            <View style={[styles.contactBox]}>
            <View style={[styles.actions]}>
            <TouchableOpacity style={styles.action} onPress={() => Proximo(2)}>
                <Text style={styles.actionText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} onPress={() => Proximo(4)}>
                <Text style={styles.actionText}>Proximo</Text>
            </TouchableOpacity>
            </View>
            </View>
            </View>

            <View style={[visibleFinal]}>   
            <View style={[styles.incident]} >
            <Text style={[styles.incidentProperty]}>Sucesso!</Text>
            </View>
            <View style={[styles.contactBox]}>
            <View style={[styles.actions]}>
            <TouchableOpacity style={styles.action} onPress={() => Proximo(3)}>
                <Text style={styles.actionText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action}>
                <Text style={styles.actionText}>Proximo</Text>
            </TouchableOpacity>
            </View>
            </View>
            </View>
            </KeyboardAwareScrollView>
        </View>
    );
}