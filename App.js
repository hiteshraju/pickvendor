import * as React from 'react';
import {Text , View} from 'react-native';
import Route from './Route.js';



export default function App() {

const [visible, setVisible] = React.useState(false);
const onToggleSnackBar = () => setVisible(!visible);
const onDismissSnackBar = () => setVisible(false);


  return (


    <Route />

    // <View style={styles.container}>

    //   <View style={styles.topview}>
    //     <Headline style={styles.headers}>Welcome.</Headline>
    //     <Title>Sign in to continue !</Title>
    //   </View>

    //   <View style={styles.formview}>
    //     <TextInput keyboardType='numeric' maxLength={10} style={styles.inputs} label="Email" mode="outlined" />
    //     <TextInput style={styles.inputs} label="Password" mode="outlined" />
    //     <Button style={styles.buttons} mode="contained" onPress={onToggleSnackBar}>Login</Button>
    //   </View>

    //   <View style={styles.footer}  >
    //     <Text style={styles.textstyles}>Terms & Conditions</Text>
    //   </View>

    //   <Snackbar
    //     visible={visible}
    //     onDismiss={onDismissSnackBar}
    //     action={{
    //       label: 'Undo',
    //       onPress: () => {
    //         // Do something
    //       },
    //     }}>
    //     Invalid Credentials , Please try again
    //   </Snackbar>

    // </View>

  );
}

const styles = 
{
    container:{
        flex:1,
        backgroundColor: '#FFF',
        paddingLeft:10,
        paddingRight:10
    },
    topview:{
      flex:2,
      paddingTop:40
    },
    formview:{
      flex:5,
    },
    inputs:{
      marginTop:10
    },
    buttons:{
      padding:10,
      marginTop:10
    },
    footer: {
        flex: 1,
    },
    textstyles:{
      textAlign:'center',
    },
    headers:{
      color:'#131DF2',
      fontSize:30
    }

};