import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    websiteLogo: {
      width: 300,
      height:150,
      resizeMode: 'contain',
      margin: 0,
    },
    backgroundContainer: {
      flex: 1,
      justifyContent: 'center' ,
      alignItems: 'center',
      margin:0,
    },
    backgroundContainerLight:{
      backgroundColor:'white'
    },
    backgroundContainerDark:{
      backgroundColor:'#21282E'
    },
    button1: {
      padding: 12,
      borderRadius: 10,
      margin:0,
      backgroundColor: '#FF7A00',
    },
    button1light: {
      backgroundColor: '#FF7A00',
    },
    button1Dark: {
      backgroundColor: 'white',
    },
    button2: {
      borderRadius: 10,
      padding: 12,
      margin: 0,
      backgroundColor: 'rgba(0,0,0,0.35)',
    },
    button2light: {
      backgroundColor: 'rgba(0,0,0,0.35)',
    },
    button2Dark: {
      backgroundColor: '#FF7A00',
    },
    buttonText: {
      fontSize: 20,
      margin: 0,
      color: 'white',
      fontFamily: 'LeagueSpartan-Bold',
    },
    buttonTextDark: {
      fontSize: 20,
      margin: 0,
      color: 'black',
      fontFamily: 'LeagueSpartan-Bold',
    },
    formTitleContainer: {
      flexDirection: 'row',
      width: '80%'
    },
    formTitle: {
      fontSize: 30,
      fontFamily: 'LeagueSpartan-Bold',
      width: '100%',
      textAlign:'right'
    },
    formTitleLight:{
      color:'#21282E',
    },
    formTitleDark:{
      color:'white',
    },
    supremeFormContainer: {
      flex: 1,
      justifyContent: 'center' ,
      alignItems: 'center',
      margin:0
    },
    formContainer: {
      borderRadius: 15,
      width: 350,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10, 
      paddingVertical: 30,
    },
    formContainerLight: {
      backgroundColor: '#FF7A00',
    }, 
    formContainerDark:{
      backgroundColor: 'rgb(90, 96, 100)',
    },
    inputText: {
      fontSize: 20,
      margin: 0,
      color: 'white',
      fontFamily: 'LeagueSpartan-Bold',
    },
    inputField: {
      fontSize: 20,
      height: 40,
      width: '90%',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginTop: 5,
      marginBottom: 15,
      backgroundColor: 'white',
      fontFamily: 'LeagueSpartan-Regular',
    },
    goToLoginLink: {
      textDecorationLine: 'underline',
      fontSize: 20,
      margin: 0,
      fontFamily: 'LeagueSpartan-Bold'
    },
    goToLoginLinkLight: {
      color: '#64380F'
    },
    goToLoginLinkDark: {
      color: '#FF7A00'
    },
    goToLoginContainer:{
      marginTop: 15,
      flexDirection: 'row',
    },
    themeButton: {
      backgroundColor: 'rgba(0,0,0,0.35)',
      borderRadius: 5,
      padding: 10,
      width:'90%',
      alignItems:'center',
      marginTop: 5,
      marginBottom: 10,
    },
  });

export default styles;