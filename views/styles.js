import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundColor: '#fff',
    container: {
      margin: 20,
      display: 'flex',
      backgroundColor: '#fff',
      color: '#363636',
    },
    containerHome: {
      display: 'flex',
      backgroundColor: '#fff',
      color: '#363636',
      textAlign: 'center',
      maxWidth: '100%',
      alignItems: 'center',
    },
    dropdown: {
      position: 'absolute',
      backgroundColor: '#F7EFEE',
      borderColor: '#F0D05F',
      borderRadius: 10,
      top: 50,
      right: 2,
      minWidth: 80,
      zIndex: 1,
      alignItems: 'flex-end',
    }, 
    dropdownText: {
      marginBottom: 10,
    },
    dropdown_item: {
      position: 'absolute',
      flex: 1,
      borderRadius: 10,
      marginTop: 50,
      marginRight: 40,
      backgroundColor: '#F7EFEE',
      paddingTop: 10,
      borderColor: '#F0D05F',
      justifyContent: 'center',
      minWidth: 80,
    },
    // dropdown_item: {
    //   paddingVertical: 10,
    //   paddingHorizontal: 15,
    //   width: '100%',
    //   alignItems: 'flex-end',
    // },
    container_exame: {
      margin: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      textAlign: 'center',
      alignContent: 'center',
      backgroundColor: '#fff',
      color: '#363636'
    },
    link:{
      fontWeight: 'bold',
    },
    containerCentralize:{
      display: 'flex',
      textAlign: 'center',
      maxWidth: '100%',
      alignItems: 'center',
    },
    welcome: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 10
    },
    title: {
      textAlign: 'left',
      fontSize: 21,
      fontFamily: 'Arial',
      fontWeight: 'bold',
      color: '#363636',
      marginBottom: 20,
      marginTop: 20,
    },
    titleHome: {
      textAlign: 'center',
      fontSize: 22,
      fontFamily: 'Arial',
      fontWeight: 'bold',
      color: '#363636',
      marginBottom: 40,
      marginTop: 20,
    },
    titleCadastro: {
      textAlign: 'left',
      fontSize: 22,
      fontWeight: 'bold',
      color: '#363636',
      marginBottom: 20,
      marginTop: 40,
    },
    patientText: {
      textAlign: 'left',
      fontSize: 16,
      fontFamily: 'Arial',
      fontWeight: 'bold',
      color: '#363636',
      marginBottom: 10,
      marginTop: 10,
    },
    menu: {
      margin: 40,
      alignContent: 'center',
      fontFamily: 'Arial',
      textAlign: 'center',
      fontSize: 21,
      color: '#363636',
      fontWeight: 'normal',
    },
    subtitle: {
      marginBottom: 16,
      textAlign: 'left',
      fontFamily: 'Arial',
      color: '#363636',
      fontSize: 13,
    },
    list_title: {
      marginTop: 5,
      textAlign: 'left',
      fontSize: 20,
      fontWeight: 'bold'
    },
    list_subtitle: {
      textAlign: 'left',
      marginLeft: 10,
      marginTop: 5,
      fontSize: 15
    },
    list_icon: {
      padding: 10
    },
    camera_icon: {
      marginTop: -5,
      marginRight: 10,
    },
    field_name: {
      textAlign: 'center',
      fontSize: 16,
      fontFamily: 'Arial',
      fontWeight: 'normal',
      color: '#363636'
    },
    field_name_left: {
      display: 'flex',
      marginLeft: 'auto',
      textAlign: 'left',
      fontSize: 20,
      fontWeight: 'bold'
    },
    field_name_leftCadastro: {
      display: 'flex',
      textAlign: 'left',
      //fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: 16,
      paddingLeft: 5,
    },
    field: {
      backgroundColor: '#F2F2F5',
      borderRadius: 5,
      height: 40,
      width: 250,
      marginBottom: 20,
      marginTop: 10,
      paddingVertical: 20,
      paddingHorizontal: 20
    },
    fieldCadastro: {
      backgroundColor: '#F2F2F5',
      height: 56,
      width: 338,
      marginBottom: 20,
      marginTop: 8,
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderRadius: 16,
      fontSize: 16,
      marginLeft: 6,
    },
    big_field: {
      backgroundColor: '#F2F2F5',
      borderRadius: 5,
      height: 150,
      width: 250,
      marginBottom: 20,
      marginTop: 10,
      paddingVertical: 20,
      paddingHorizontal: 20
    },
    picker: {
      backgroundColor: '#F2F2F5',
      borderRadius: 5,
      width: 250,
      marginBottom: 20,
      marginTop: 10,
      paddingVertical: 20,
      paddingHorizontal: 20
    },
    pickerCadastro: {
      backgroundColor: '#F2F2F5',
      height: 56,
      width: 338,
      marginBottom: 20,
      marginTop: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 16,
      borderColor: '#F2F2F5',
      fontSize: 16,
    },
    button: {
      marginTop: 30,
      paddingVertical: 10,
      borderRadius: 16,
      backgroundColor: '#6A79A8',
      width: 200
    },
    buttonHome: {
      paddingVertical: 10,
      marginBottom: 30,
      borderRadius: 16,
      backgroundColor: '#6A79A8',
      height: 57,
      width: 335,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    buttonCadastro: {
      marginTop: 30,
      paddingVertical: 10,
      borderRadius: 16,
      backgroundColor: '#6A79A8',
      height: 57,
      width: 335,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button_exam: {
      marginTop: 0,
      paddingVertical: 10,
      borderRadius: 5,
      backgroundColor: '#6A79A8',
      width: 200
    },
    menu_button: {
      margin: 10,
      paddingVertical: 10,
      borderRadius: 10,
      backgroundColor: '#F7EFEE',
      height: 150,
      width: 150,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    menu_button_container: {
      marginTop: -20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    menu_button_container_low: {
      marginTop: 10,
      display: 'flex',
      flexGrow: 1,
      flexShrink: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    menu_button_container_inside: {
      marginRight: 170
    },
    list_button: {
      marginTop: 10,
      paddingVertical: 10,
      borderRadius: 5,
      backgroundColor: '#F2F2F5',
      height: 100,
      maxWidth: 500,
      marginBottom: 20,
      marginTop: 10,
      padding: 20,
      justifyContent: 'center',
      alignContent: 'center',
      textAlign: 'center',
      display: 'flex'
    },
    list_button_local: {
      display: 'flex',
      flexDirection: 'row'
    },
    text: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 22,
      fontWeight: 'bold'
    },
    textHome: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold'
    },
    textCadastro: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold'
    },
    text_menu_button: {
      fontFamily: 'Arial',
      color: '#363636',
      textAlign: 'center',
      fontSize: 13,
      width: 100,
      fontWeight: 'bold'
    },
    viewImageLogo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:20,
      marginTop:100,
    },
    logo: {
      alignItems: 'center',
      width: 180,
      height: 180,
      position: 'relative',
      marginBottom:20,
    }
  }
);

export default styles;