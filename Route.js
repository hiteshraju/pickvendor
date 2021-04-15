import React from 'react';
import {StatusBar, Text , View} from 'react-native';
import Login from './src/screens/Login';
import Orders from './src/screens/Orders';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import Processed from './src/screens/Processed';
import Onboarding from './src/screens/Onboarding'
import Sendquote from './src/screens/Sendquote'
import Success from './src/screens/Success'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

import AsyncStorage from '@react-native-async-storage/async-storage';




function MyTabs() {
    return (
      <TopTab.Navigator tabBarOptions={{labelStyle:{fontFamily:'Nunito-Regular',color:'#999'} ,  } } >
        <TopTab.Screen name='New' component={Orders} />
        <TopTab.Screen name="Processing" component={Processed} />
      </TopTab.Navigator>
    );
  }


class Route extends React.Component {

    state = {token:''};

    async componentDidMount()
    {
        console.log("Hello")
        const value = await AsyncStorage.getItem('email')
        this.setState({token:value})
        if(value === null)
        {
            alert("Hello")
            //this.navigation.navigate('Login')
        }
    }

    

    render() 
    {


        //return <Text>Helldfsfo</Text>

            return(

                <NavigationContainer>
                    { this.state.token === null ? (
                    <Stack.Navigator screenOptions={{headerShown:false}} >
                        <Stack.Screen name="Onboarding" component={Onboarding} />
                        <Stack.Screen name="Login" component={Login} /> 
                        <Stack.Screen name="Home" component={MyTabs} />
                        <Stack.Screen name="Screen1" component={Screen1} />
                        <Stack.Screen name="Sendquote" component={Sendquote} /> 
                        <Stack.Screen name="Success" component={Success} /> 
                    </Stack.Navigator> ):
                    <Stack.Navigator screenOptions={{headerShown:false}} >
                        <Stack.Screen name="Home" component={MyTabs} />
                        <Stack.Screen name="Screen1" component={Screen1} />
                        <Stack.Screen name="Login" component={Login} /> 
                        <Stack.Screen name="Sendquote" component={Sendquote} />
                        <Stack.Screen name="Success" component={Success} /> 
                    </Stack.Navigator>

                    }
                </NavigationContainer>



            )



        

    }
}

export default Route;

