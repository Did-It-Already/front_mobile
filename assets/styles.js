import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    websiteLogo: {
      width: 300,
      height:150,
      resizeMode: 'contain',
      marginBottom: 10,
    },
    backgroundContainer: {
      flexGrow: 1,
      justifyContent: 'center' ,
      alignItems: 'center',
      paddingVertical: 20,
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
    },
    formTitle: {
      fontSize: 30,
      fontFamily: 'LeagueSpartan-Bold'
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
      alignItems: 'center'
    },
    formContainer: {
      borderRadius: 15,
      width: 330,
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
      height: 35,
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

    userSectionContainer: {
      width: 330,
      height: 300,
      borderRadius: 10,
      flexDirection: 'column',
      padding: 0,
      alignItems: 'center',
      margin: 0,
      position: 'relative',
      color: 'white',
      backgroundColor: 'black'
    },

    userImage: {
      position: 'absolute',
      borderRadius: 10,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      top: 0,
      bottom: 0,
      margin: 0,
      zIndex: -5,
    },

    userImageCustom: {
      opacity:0.7
    },

    userImageDefault: {
      opacity:1
    },

    userEditIcon: {
      width: '70%',
      height: '70%'
    },
    userEditButton: {
      width: 50,
      height: 50,
      padding: 0,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 20,
      right: 20,
      backgroundColor: 'rgba(0,0,0,0.35)'
    },

    sectionTitle: {
      color: 'white',
      marginTop: 30,
      fontSize: 28,
      fontFamily: 'LeagueSpartan-Bold',
    },

    userNameContainer: {
      height: '75%',
      width: '85%',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },

    userCardTitle:{
      padding: 0,
      margin:0,
      fontSize: 28,
      fontFamily: 'LeagueSpartan-Bold',
      color: 'white'
    },
    
    userCardDescription:{
      padding: 0,
      marginTop:-5,
      fontSize: 25,
      fontFamily: 'LeagueSpartan-Regular',
      color: 'white'
    },

    calendarSectionContainer: {
      width: 330,
      height: 180,
      borderRadius: 10,
      flexDirection: 'row',
      padding:0,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      position: 'relative',
    },

    calendarSectionContainerLight: {
      backgroundColor: 'rgba(33, 40, 46, 0.16)',
    },

    calendarSectionContainerDark: {
      backgroundColor: 'rgba(255, 255, 255, 0.86)',
    },

    dateContainer: {
      height: '100%',
      width:100,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },

    dayText: {
      margin: 0,
      fontSize: 25,
      fontFamily: 'LeagueSpartan-Regular',
      color: 'black',
    },

    dayNumberText: {
      margin: 0,
      fontSize: 50,
      fontFamily: 'LeagueSpartan-Bold',
      color: 'black',
    },

    monthText: {
      marginTop: -5,
      fontSize: 20,
      fontFamily: 'LeagueSpartan-Bold',
      color: 'black',
    },

    yearText: {
      margin: 0,
      fontSize: 30,
      fontFamily: 'LeagueSpartan-Bold',
      color: '#FF7A00',
    },

    verticalSeparator: {
      width: 3,
      height: '85%',
      backgroundColor: 'black',
      marginHorizontal: 20,
    },

    hourText: {
      margin: 0,
      fontSize: 50,
      fontFamily: 'LeagueSpartan-Bold',
      color: 'black',
    },

    minutesText: {
      marginTop: -10,
      fontSize: 50,
      fontFamily: 'LeagueSpartan-Bold',
      color: 'black',
    },

    amPmText: {
      marginTop: -15,
      fontSize: 40,
      fontFamily: 'LeagueSpartan-Bold',
      color: '#FF7A00',
    }

  });

export default styles;