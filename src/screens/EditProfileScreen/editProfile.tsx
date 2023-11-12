import { ImageBackground, StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from "react-native";

export function EditProfileScreen(){
  return(
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/backgrounds/Rectangle1.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.boxProfile}>
          <Image
            style={styles.picture}
            source={require('../../assets/backgrounds/Ellipse1.png')}
          />
          <TextInput
            style={styles.inputFullName}
            placeholder="Leonardo Mendes"
            placeholderTextColor={'#000'}
          />
          <TextInput 
            style={styles.inputName}
            placeholder="Leonardo"
            placeholderTextColor={'#000'}
          />
        </View>

        <Text style={styles.contact}>Contato</Text>

        <View style={styles.boxContact}>
          <TextInput 
            style={styles.inputNumber}
            placeholder="88 9 96647341"
            placeholderTextColor={'#000'}
          />
          <TextInput 
            style={styles.inputEmail}
            placeholder="mendes.leonardo@academico.com"
            placeholderTextColor={'#000'}
          />
        </View>

        <View style={styles.boxButton}>
          <TouchableOpacity style={styles.buttonSave}>
            <Image 
              source={require('../../assets/backgrounds/check-circle.png')}
              style={styles.imgSave}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  boxProfile: {
    marginTop: '20%',
    alignItems: 'center',
  },
  picture: {
    width: 171,
    height: 171,
    marginBottom: '5%'
  },
  inputFullName: {
    backgroundColor: '#D9D9D9',
    color: '#000',
    fontSize: 32,
    fontWeight: '700',
    paddingLeft: '1%',
    paddingRight: '1%',
    width: '70%', 
    marginBottom: '3%'
  },
  inputName: {
    backgroundColor: '#D9D9D9',
    fontSize: 22,
    fontWeight: '400',
    padding: '2%',
    width: '28%'
  },
  contact: {
    color: '#000',
    fontSize: 23,
    fontWeight: '700',
    marginTop: '10%',
    marginLeft: '10%'
  },
  boxContact: {
    marginTop: '2%',
    alignItems: 'center'
  },
  inputNumber: {
    backgroundColor: '#D9D9D9',
    fontSize: 20,
    fontWeight: '400',
    padding: "1%",
    marginTop: '2%',
    marginBottom: '3%',
    width: '35%'
  },
  inputEmail: {
    backgroundColor: '#D9D9D9',
    fontSize: 20,
    fontWeight: '400',
    padding: '1%',
    width: '81%'
  },
  boxButton: {
    alignItems: 'center',
    marginTop: '45%'
  },
  buttonSave: {
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
    width: '28%',
    padding: '1%',
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1
  },
  imgSave: {
    width: 100,
    height: 30
  }
})