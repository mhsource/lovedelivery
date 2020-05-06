import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:Constants.statusBarHeight + 20,
    },
    header:{
        paddingTop:100,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:300,
        height:200,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    incident:{
        padding:24,
        borderRadius:8,
        marginBottom:5,
        marginTop:30
    },
    incidentProperty:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold',
        marginTop:14
    },
    contactBox:{
        padding:24,
        borderRadius:8,
        marginBottom:16
    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    action:{
        backgroundColor:'#42A62C',
        borderRadius:8,
        height:50,
        width:'48%',
        justifyContent:'center',
        alignItems:'center'
    },
    actionText:{
        color:'#ffffff',
        fontSize: 15,
        fontWeight:'bold'
    }
})