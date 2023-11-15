import { View, StyleSheet, Image, Text } from "react-native"

interface Event{
  title: string,
  picture: string,
  description: string,
  date: string
}
interface Props{
  event: Event
}
export function Card({ event }: Props){

  return(
    <View style={styles.card}>
      <Image
        style={styles.imgCard}
        source={{uri: event.picture}}
      />
      <View style={styles.boxDescription}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.description}>{event.description}</Text>
        <Text style={styles.date}>{event.date}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D9D9D9',
    width: 340,
    height: 250,
    borderRadius: 11,
    marginTop: '5%',
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
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
  },
  date: {
    color: '#000',
    fontSize: 19,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: '3%'
  },
  boxDescription: {
    flex: 1,
    marginLeft: '3%',
    marginRight: '3%',
    marginBottom: '2%',
    alignItems: 'center',
    justifyContent: "space-between"
  }
})