import React ,{ Component } from "react";
import { Text , View , Image , StatusBar  } from "react-native";
import { Button } from 'react-native-paper';

class Success extends Component{
    render(){
        return(
            <View style={{backgroundColor:'#FFF' , flex:1 , padding:30}} >

                <Image style={styles.images} source={require('../../assets/images/check.png')} />
                <Text style={styles.titles}>Quotation Sent Successfully</Text>
                <Text style={styles.texts}>Further notifications regarding the order would reflect in the orders page.</Text>
                <Button icon="home" mode="outlined" onPress={() => this.props.navigation.navigate('Home')}>Home</Button>
            </View>
        )
    }
}

const styles ={
    container:{
        padding:30,
        flex:1
    },
    images:{
        alignSelf: 'center',
        justifyContent:'center',
        alignItems:'center',
        resizeMode: 'contain',
        width: '50%',
    },
    titles:{
        paddingTop: 5,
        paddingBottom: 10,
        fontSize: 20,
        color: "#000",
        alignSelf: "center",
        fontFamily: 'Nunito-Regular',
    },
    texts:{
        textAlign:"center",
        color:"#333",
        fontSize:18,
        paddingHorizontal:5,
        fontFamily: 'Nunito-Regular',
        marginBottom:10
    }

}

export default Success