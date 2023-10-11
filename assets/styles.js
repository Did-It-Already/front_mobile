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
      alignItems:'center'
    },
    button1light: {
      backgroundColor: '#FF7A00',
    },
    button1Dark: {
      backgroundColor: 'white',
    },
    button1Red: {
      backgroundColor: 'rgb(170, 33, 12)',
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
    formContainer2: {
      borderRadius: 15,
      width: 330,
      height: 600,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 10, 
      paddingVertical: 30,
      marginTop:15
    },
    text4container: {
      width: 330,
      height: 480,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:0,
      margin: 0,
    },
    text5container: {
      width: 300,
      flexDirection:'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      margin: 0
    },
    text4: {
      fontSize: 20,
      color: 'white',
      fontFamily: 'LeagueSpartan-Bold',
    },
    text6: {
      fontSize: 20,
      color: 'white',
      fontFamily: 'LeagueSpartan-Bold',
      marginTop:15
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
    inputTextEmail: {
      fontSize: 20,
      margin: 0,
      color: 'white',
      fontFamily: 'LeagueSpartan-Regular',
      marginBottom:13
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
    inputFieldDate: {
      height: 35,
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
      backgroundColor: 'black',
      marginBottom:15
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
      alignContent:'center',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: 'rgba(0,0,0,0.35)',
      borderRadius:8,
      marginBottom:5,
    },
    userEditButtons: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 20,
      right: 20,
      zIndex: 2
    },

    twoButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width:220
    },

    sectionTitle: {
      color: 'white',
      marginTop: 30,
      fontSize: 28,
      fontFamily: 'LeagueSpartan-Bold',
    },

    sectionTitle2: {
      color: 'white',
      marginTop: 10,
      fontSize: 28,
      fontFamily: 'LeagueSpartan-Bold',
      alignContent:'center',
      textAlign:'center',
      width:230      
    },

    sectionTitle3: {
      color: 'white',
      marginTop: 0,
      marginBottom: 10,
      fontSize: 28,
      fontFamily: 'LeagueSpartan-Bold',
    },

    taskSectionTitleContainer: {
      flexDirection: 'row',
      fontSize: 28,
      fontFamily: 'LeagueSpartan-Bold',
      width:270,
      justifyContent:'space-between',
      marginBottom:5
    },


    goBackButton: {
      width: 40,
      height: 40,
      padding: 0,
      alignContent:'center',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: 'rgba(0,0,0,0.35)',
      borderRadius:8,
      marginBottom:5,
    },

    addButton: {
      width: 40,
      height: 40,
      padding: 0,
      alignContent:'center',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: 'rgba(0,0,0,0.35)',
      borderRadius:8,
      marginBottom:5,
      position:'absolute',
      top:20,
      right:20
    },

    addButtonLight: {
      width: 40,
      height: 40,
      padding: 0,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:8,
      position:'absolute',
      top:20,
      right:20
    },

    addButtonDark: {
      backgroundColor:'white'
    },

    addButtonLight: {
      backgroundColor: 'rgba(0,0,0,0.35)'
    },

    addButtonText:{
      padding: 0,
      marginTop:3,
      fontSize: 45,
      fontFamily: 'LeagueSpartan-Bold',
    },

    addButtonTextLight:{
      color:'white'
    },

    addButtonTextDark:{
      color:'black'
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
    },

    taskCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
      paddingVertical: 20,
      paddingHorizontal: 10,
      width:'100%',
      borderRadius: 5,
      marginBottom: 10,
    },
    dark: {
      backgroundColor: 'rgba(0,0,0,0.35)',
      color: 'white'
    },
    light: {
      backgroundColor: 'rgba(255,255,255,0.6)',
      color: 'black'
    },
  
    dark2: {
      color: 'white'
    },
    light2: {
      color: 'black'
    },
    taskMainContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    taskCheckbox: {
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:5,
      borderWidth: 3,
    },
    taskCheckboxLight: {
      borderColor: 'white',
    },
    taskCheckboxDark: {
      borderColor: 'black',
    },
    taskTextContainer: {
      marginLeft: 10,
      width:160,
    },
    taskCardTitle: {
      fontSize: 20,
      fontFamily: 'LeagueSpartan-Bold'
    },
    taskCardDescription: {
      fontSize: 17,
      fontFamily: 'LeagueSpartan-Regular'
    },
    taskCardDate: {
      fontSize: 17,
      fontFamily: 'LeagueSpartan-Regular'
    },
    taskEditButtonsContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    taskEditButton: {
      marginBottom: 5,
      padding:5,
      backgroundColor:'rgba(255,255,255,0.2)',
      borderRadius:5,
    },
    taskEditIcon: {
      width: 25,
      height: 25,
    }

  });

export default styles;