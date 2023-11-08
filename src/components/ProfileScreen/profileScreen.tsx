import { StyleSheet, View, Image, Text } from "react-native"

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
  }
})