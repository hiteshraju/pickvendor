import React , {Component} from 'react';
import {Text , View , StatusBar} from 'react-native';
import { TextInput, Button, Paragraph, Divider , DataTable } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


class Sendquote extends Component {

    state = {quotation:'',message:'' , order_token:'' , email:''};

    async componentDidMount()
    {
        console.log(this.props.route.params.order_token)
        this.setState({order_token:this.props.route.params.order_token})
        var email = await AsyncStorage.getItem('email');
        this.setState({email:email})
        console.log(this.state.order_token)

    }

    

    render(){

        const Sendquote = () =>
        {
            var quotation = this.state.quotation;
            var message = this.state.message;
            var order_token = this.props.route.params.order_token;
            var vendor_email = this.state.email
            var dataObj = {}
            dataObj.price = quotation,
            dataObj.comments = message,
            dataObj.order_token = order_token,
            dataObj.vendor_email = vendor_email
    
            fetch('http://menu.pickmycaterer.com/apivendor/sendquote',{
                method: 'POST',
                header:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataObj)
            })
            .then((response) => response.text())
            .then((res) => {
                
                //alert("Success")
                this.props.navigation.navigate('Success');
            
                
            })
            .catch(function(error) {
                alert('There has been a problem with your fetch operation: ' + error.message);
                // ADD THIS THROW error
                throw error;
                });
        }



        return(
            <View style={styles.container}>

                <View>
                    <StatusBar backgroundColor={'#FFF'} barStyle="dark-content" ></StatusBar> 
                    <Text style={styles.titles}>Quotation</Text>
                    <Divider />
                    <TextInput keyboardType = 'numeric' style={styles.inputs} label="Quotation" onChangeText={(value) => this.setState({quotation: value})}  mode="outlined" />
                    <TextInput multiline style={styles.textinputs} onChangeText={(value) => this.setState({message: value})} mode="outlined" label="Message" />
                    <Button labelStyle={{ fontSize: 18 }} icon="check-circle-outline" style={styles.buttons} mode="outlined" onPress={Sendquote} >Save</Button>
                    {/* <Button onPress={()=> this.props.navigation.navigate('Screen1')}>Go Back Screen1</Button> */}

                    <Paragraph style={styles.note}>Note : All quotes are time bound</Paragraph>
                </View>

               
                


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
    titles:{
        textAlign:'center',
        marginTop:10,
        marginBottom:10,
        fontSize:18,
        fontFamily: 'Nunito-Regular',
    },
    inputs:{
        marginTop:10,
 
    },
    textinputs:{
        marginTop:10,
        justifyContent: "flex-start",
        fontFamily: 'Nunito-Regular',
    },
    buttons:{
        marginTop:10,
        fontFamily: 'Nunito-Regular',

    },
    note:{
        marginTop:10,
        fontFamily: 'Nunito-Regular',
    }

}

export default Sendquote;