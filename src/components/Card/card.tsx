import { View, StyleSheet, Image, Text } from "react-native"

export function Card(){
  return(
    <View style={styles.card}>
      <Image
        style={styles.imgCard}
        source={require('../../assets/backgrounds/SertaoComp.png')}
      />
      <Text style={styles.title}>IV SertãoComp</Text>
      <Text style={styles.description}>4° edição do SertãoComp, acontecerá presencialmente no campus Cajazeiras.</Text>
      <Text style={styles.date}>04 a 07 de Outubro</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D9D9D9',
    width: '85%',
    height: '57%',
    borderRadius: 11
  },
  imgCard: {
    width: '100%',
    height: '40%',
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11
  },
  title: {
    color: '#000',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center'
  },
  description: {
    color: '#000',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
  date: {
    color: '#000',
    fontSize: 19,
    textAlign: 'center',
    marginTop: '3%'
  }
})