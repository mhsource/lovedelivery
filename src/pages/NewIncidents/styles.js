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
        justifyContent:'space-between',
        alignItems:'center'
    },
    image:{
        width:50,
        height:50
    },
    incident:{
        padding:24,
        borderRadius:8,
        marginBottom:5,
        backgroundColor:'#fff',
        marginTop:40
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
        color:'#737380'
    },
    contactBox:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:16
    },
    heroTitle:{
        fontWeight:'bold',
        fontSize:20,
        color:'#13131a',
        lineHeight:30
    },
    heroDescription:{
        fontSize:15,
        color:'#737380',
        marginTop:16
    },
    actions:{
        flexDirection:'row',
        justifyContent:'flex-end'
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