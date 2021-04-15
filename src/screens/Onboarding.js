import React , {Component } from 'react';
import {View , Text , Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
    {
      key: 1,
      title: 'Cloud Kitchens',
      text: 'Our expert cloud kitchens serve across 12 different cuisines withing Bangalore',
      image: require('../../assets/images/cooking.png'),
      backgroundColor: '#040468',
    },
    {
      key: 2,
      title: 'Food Safety',
      text: 'Our cloud vendors check the temperatures of their entire staff every day. Anyone with a temperature above 99.1 F is advised to rest at home. This ensures 100% food safety.',
      image: require('../../assets/images/mask.png'),
      backgroundColor: '#040468',
    },
    {
      key: 3,
      title: 'Safe & Timely Delivery',
      text: 'Sansitizing the delivery partners is especially important as they usually come in close physical proximity with different individuals, including customers, vendors and other delivery partners.',
      image: require('../../assets/images/delivery-man.png'),
      backgroundColor: '#040468',
    }
  ];
  
  class Onboarding extends Component {

    state = {showRealApp:false}

    _renderItem = ({ item }) => {
    return (
        <View style={{backgroundColor:item.backgroundColor , flex:1 , padding:30}} >

        <Image style={{
            alignSelf: 'center',
            justifyContent:'center',
            alignItems:'center',
            resizeMode: 'contain',
            width: '90%',

          }} source={item.image} />
          <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 28,
            color: "#FFF",
            alignSelf: "center",
            fontFamily: 'Nunito-Regular',
          }}
        >
          {item.title}
        </Text>
        <Text style={{
          textAlign:"center",
          color:"#b5b5b5",
          fontSize:18,
          paddingHorizontal:5,
          fontFamily: 'Nunito-Regular',
        }}>
          {item.text}
        </Text>
        </View>
    );
    }

    _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
    this.props.navigation.navigate('Login')
    }

    render(){
        return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone} />;
       
    }
  }

  const styles ={
      onboardingview:{
          flex:1,
      }
  }

  export default Onboarding;

