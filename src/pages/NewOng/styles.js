import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:Constants.statusBarHeight + 20
    },
    header:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:10
    },
    image:{
        width:70,
        height:70
    },
    incident:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
        marginTop:15
    },
    incidentProperty:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold',
        marginTop:10
    },
    incidentValue:{
        marginTop:8,
        fontSize:15,
        color:'#42A62C'
    },
    contactBox:{
        padding:10,
        borderRadius:8
    },
    actions:{
        flexDirection:'row',
        justifyContent:'center'
    },
    action:{
        backgroundColor:'#42A62C',
        borderRadius:8,
        height:50,
        width:'50%',
        justifyContent:'center',
        alignItems:'center',
        margin:10
    },
    actionText:{
        color:'#ffffff',
        fontSize: 15,
        fontWeight:'bold'
    }

})