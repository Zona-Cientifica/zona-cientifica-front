import { ImageBackground, StyleSheet, View, Image, Text, TextInput } from "react-native";

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
    padding: '2%',
    marginBottom: '3%'
  },
  inputName: {
    backgroundColor: '#D9D9D9',
    fontSize: 22,
    fontWeight: '400',
    padding: 2
  }
})