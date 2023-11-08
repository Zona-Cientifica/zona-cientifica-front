import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native"

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.boxProfile}>
        <Image
          style={styles.picture}
          source={require('../../assets/backgrounds/Ellipse1.png')}
        />
        <Text style={styles.fullName}>Leonardo Mendes</Text>
        <Text style={styles.firstName}>Leonardo</Text>
      </View>

      <View style={styles.boxContact}>
        <Text style={styles.contact}>Contato</Text>
        <Text style={styles.number}>88 9 96647341</Text>
        <Text style={styles.email}>mendes.leonardo@academico.com</Text>
      </View>

      <TouchableOpacity style={styles.buttonFavorite}>
        <Text style={styles.favorite}>Favoritos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonParticipating}>
        <Text style={styles.participating}>Participando</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  boxProfile: {
    alignItems: 'center',
  },
  picture: {
    width: 171,
    height: 171,
    marginBottom: 10
  },
  fullName: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700'
  },
  firstName: {
    color: '#DBBCBC',
    fontSize: 22,
    fontWeight: '400',
  },
  boxContact: {
    marginTop: 20
  },
  contact: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700'
  },
  number: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '400'
  },
  email: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '400'
  },
  buttonFavorite: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderBlockColor: '#000',
    padding: 5,
    marginTop: 80,
    marginRight: 180
  },
  favorite: {
    color: '#003465',
    fontSize: 32,
    fontWeight: '700'
  },
  participating: {
    color: '#003465',
    fontSize: 32,
    fontWeight: '700'
  },
  buttonParticipating: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderBlockColor: '#000',
    padding: 5,
    marginTop: 10,
    marginRight: 130
  }
})