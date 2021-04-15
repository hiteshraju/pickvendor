import React , {Component} from 'react';
import {Text , View } from 'react-native';
import { Card , Searchbar , Badge, Title , Paragraph , Button } from 'react-native-paper';

class Screen2 extends Component {
    render(){
        return(
            <View style={styles.container}>

                <Text>Screen2</Text>
                <Button onPress={()=> this.props.navigation.navigate('Screen1')}>Go Back Screen1</Button>

            </View>
        )
    }
}

const styles ={

    container:{
        flex:1,
        backgroundColor: '#FFF',
        paddingLeft:10,
        paddingRight:10
    },

}

export default Screen2;