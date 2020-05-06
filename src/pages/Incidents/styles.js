import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:Constants.statusBarHeight +20
    },
    header: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:20
    },
    image:{
        width:50,
        height:50
    },
    headerText:{
        fontSize:15,
        color:'#737380'
    },
    title:{
        fontSize:30,
        marginTop:30,
        marginLeft:30,
        color:'#13131a',
        fontWeight:'bold'
    },
    description:{
        fontSize:16,
        lineHeight:24,
        color:'#737380'
    },
    incidentList:{
        marginTop:32
    },
    incident:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:16
    },
    incidentProperty:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold'
    },
    incidentValue:{
        marginTop:8,
        fontSize:15,
        marginBottom:24,
        color:'#737380'
    },
    detailsButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    detailsButtonText:{
        color:'#42A62C',
        fontSize:15,
        fontWeight:'bold'
    },
    action:{
        backgroundColor:'#42A62C',
        borderRadius:8,
        height:50,
        width:'30%',
        justifyContent:'center',
        alignItems:'center'
    },
    actionText:{
        color:'#ffffff',
        fontSize: 15,
        fontWeight:'bold'

    },
    contactBox:{
        borderRadius:8,
        backgroundColor:'#fff'
    },
    actions:{
        margin:16,
        flexDirection:'row',
        justifyContent:'space-between'
    }


});