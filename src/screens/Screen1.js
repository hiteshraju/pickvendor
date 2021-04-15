import React , {Component} from 'react';
import {Text , View  , ScrollView, StatusBar, FlatList} from 'react-native';
import { ForceTouchGestureHandler } from 'react-native-gesture-handler';
import { Title , Divider , Button, Paragraph , Headline , RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



class Screen1 extends Component {
    state = {business:[] , food:[] , order_token:'' , loading:true , no_people:'' , event_date:'' , address:'' , processed:'' , orderred_on:''}


    async componentDidMount()
    {
        console.log(this.props.route.params.order_token)
        this.setState({order_token:this.props.route.params.order_token})
        this.business_info()
        this.setState({processed:this.props.route.params.processed})
        this.food_items()
        
    }


    async business_info() 
    {
        fetch('http://menu.pickmycaterer.com/apivendor/orderdetailsapi',{
        method: 'POST',
        header:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"order_token":this.props.route.params.order_token})
        })
        .then((response) => response.json())
        .then((res) => {

            //alert(res.results[0].email)
            console.log(res)
            this.setState({no_people:res[0].no_of_people , event_date: res[0].event_date , address: res[0].address  , loading:false , orderred_on:res[0].created_at })
            // //alert(this.state.orders[0].title)
            // // alert(res[1].order_token)   
        })
        .catch(function(error) {
        alert('There has been a problem with your fetch operation: ' + error.message);
        console('There has been a problem with your fetch operation: ' + error.message);
        // ADD THIS THROW error
            throw error;
        });
    }

    async food_items() 
    {
        fetch('http://3.7.4.24/api_fetch/api.php',{
        method: 'POST',
        header:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"order_token":this.props.route.params.order_token})
        })
        .then((response) => response.json())
        .then((res) => {
            console.log(res)
            this.setState({food:res , loading:false })
            // //alert(this.state.orders[0].title)
            // // alert(res[1].order_token)   
        })
        .catch(function(error) {
        alert('There has been a problem with your fetch operation: ' + error.message);
        console('There has been a problem with your fetch operation: ' + error.message);
        // ADD THIS THROW error
            throw error;
        });
    }




    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor={'#040468'} barStyle="light-content" ></StatusBar>  

                <View style={styles.topview}>
                    <Title style={styles.titles}>Business Information</Title>

                    <View style={styles.orderview}> 

                        <View style={styles.info} >
                            <Icon style={styles.icons} name="calendar-multiple-check" size={24} color="#FFF" />
                            <Text style={styles.text}>Orderered on {this.state.orderred_on}</Text>
                        </View>
                        <View style={styles.info} >
                            <Icon style={styles.icons} name="account-multiple" size={24} color="#FFF" />
                            <Text style={styles.text}>{ this.state.no_people } Guests</Text>
                        </View>
                        <View style={styles.info} >
                            <Icon style={styles.icons} name="campfire" size={24} color="#FFF" />
                            <Text style={styles.text}>Custom Booking</Text>
                        </View>
                        <View style={styles.info} >
                            <Icon style={styles.icons} name="chat" size={24} color="#FFF" />
                            <Text style={styles.text}>Customer custom information of the order being deilvered.</Text>
                        </View>

                    </View>
                </View>

                <View style={styles.bottomview}>
  
                    <Text style={styles.orders}>{this.props.route.params.order_token}</Text>
                    <Text style={styles.para}>Event Date on { this.state.event_date} - ( MM/DD/YYYY )</Text>
                    <Divider style={styles.divider}/>
                


                <ScrollView style={styles.menuview}> 

                {
                    this.state.food.map((item,index) => (

                    <View style={styles.info} >
                        <Icon style={styles.icons} name="food" size={24} color="#F57F0A" />
                        <Text style={styles.foodtext}>{item.dish_name}</Text>
                        <Text>x {this.state.no_people}</Text>
                    </View>

                    ))

                }
                    

                </ScrollView>

                    <Divider style={styles.divider}/>

                    { this.state.processed == "Yes" ?
                    

                    <View style={styles.notes}>
                        <Button icon="check" mode="outlined">Sent</Button>

                       


                        

                    </View>

                    
                    
                    
                    :

                    <View style={styles.notes}>
                        <Button icon="check" mode="outlined" onPress={() => this.props.navigation.navigate('Sendquote' , {order_token:this.state.order_token})}>Send Quote</Button>
                        <Paragraph style={styles.para}>Note : All orders are timebound , hence quotations are expected in a timely manner.</Paragraph>
                    </View>

                      
                    }

                </View>
                
            </View>
        )
    }
}




const styles ={

    container:{
        flex:1,
        backgroundColor: '#040468',
    },
    info:{
        flexDirection:'row',
        marginTop:10

    },
    topview:{
        flex:1,
        padding:10,
        backgroundColor:'#040468'
        
    },
    bottomview:{
        flex:2,
        padding:10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor:'#FFF'
    },
    icons:{
        flex:1
    },
    text:{
        flex:8,
        fontSize:15,
        color:'#FFF',
        fontFamily: 'Nunito-Regular',
    },
    foodtext:{
        flex:8,
        fontSize:16,
        fontFamily: 'Nunito-Regular',
    },
    divider:{
        marginTop:10,
        fontStyle:'bold'
    },
    itemscontained:{
        padding:20,
    },
    titles:{
        textAlign:'center',
        color:'#FFF',
        fontFamily: 'Nunito-Regular',
    },
    notes:{
        marginTop:10,
        flex:1,
    },
    para:{
        fontFamily: 'Nunito-Regular',
    },
    image:{
        flex:2,
        width:'100%',
        height:25
    },
    Orderview:{
        flex:1
    },
    menuview:{
        flex:3
    },
    orders:{
        fontWeight:'bold',
        fontSize:16,
        marginTop:10
    },
    quotes:{
        flexDirection:'row',
        marginTop:5
    },
    sl:{
        flex:1,
        textAlign:'center'
    },
    list_quotes:{
        flex:6,
        textAlign:'center'
    },
    dates:{
        flex:2,
        textAlign:'center'
    }

}

export default Screen1;