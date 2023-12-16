import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  FlatList,
} from "react-native";
import { Card } from "../../components/Card/card";
import { api } from "../../utils/api";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useFocusEffect } from "@react-navigation/native";

/*const array = [
{
  title: 'IV SertãoComp',
  picture: 'https://s3-alpha-sig.figma.com/img/e25e/f73a/1287e212956d8313fb8b12163d14f89b?Expires=1700438400&Signature=NkXNU8CcHrw0HX0TCWO1kAcHc5YVNXiZyO1YmIQDbOSxVqq01YBU71IJeVL0rxoNDb8SdB5Iqfgcl6q8LJmoyW1MVGph5fF6ELqkhocDOTx-1Vh-v~8xbszFPzo855qr4NAm8-PIS0SBdyztSaQ1z31KzRnz9GDNcWzleWbKm7eQ3jLYpABcCJGtlDs7gYYXPU4a6Te1MUboH4fiI-uE9PZALsBspqG5X2j-7-JqLbGBVCLAoyYRLa2sWJz7ktU4jT-Db2Mbbx-R6m6tdOGwOBXnZxln0-uInAXzN9dS85a8o4i5NPRSWxU-OFmxI2kZMSu7QS8YfseL-rWFWcn9ig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  description: '4° edição do SertãoComp, acontecerá presencialmente no campus Cajazeiras.',
  date: '04 a 07 de Outubro'
},
{
  title: '43º CSBC',
  picture: 'https://s3-alpha-sig.figma.com/img/9239/7976/2f150cbdcf8a4f10f35ccce7b4035210?Expires=1700438400&Signature=aaAT~5I2X9XaiXeco1MSOQrTDh8c6M-hu5Sl6oFmNbP6D2FN-vkoFofAGCBx968AwNfr0saA0bRsyIwQJRfYYiVjPS6TrqpgzJ9h7guuv8ZYwmyrlye7YHRi5HF0kCxoy91f8rscRvormZw6Volo~d5cWyfl65S7--WcSrqY9oMPuHmjrq84CMthpmMbXxHHWt~3Rq0qCTd5Vi~sq1sMraKdwGfnxH-WoShzyDZ1waYa-hSn~3wplQBukoffwQrmBND~RNk3WB3ukPSInLOF3BauQjxRDSC-WIIRYFE6biqbm66bdVhJ2nu5fXSm8SJsSrnObPczBcGL1je4OrEunA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  description: 'O Congresso da Sociedade Brasileira de Computação',
  date: '06 a 11 de Agosto'
},
{
  title: 'IV SertãoComp',
  picture: 'https://s3-alpha-sig.figma.com/img/e25e/f73a/1287e212956d8313fb8b12163d14f89b?Expires=1700438400&Signature=NkXNU8CcHrw0HX0TCWO1kAcHc5YVNXiZyO1YmIQDbOSxVqq01YBU71IJeVL0rxoNDb8SdB5Iqfgcl6q8LJmoyW1MVGph5fF6ELqkhocDOTx-1Vh-v~8xbszFPzo855qr4NAm8-PIS0SBdyztSaQ1z31KzRnz9GDNcWzleWbKm7eQ3jLYpABcCJGtlDs7gYYXPU4a6Te1MUboH4fiI-uE9PZALsBspqG5X2j-7-JqLbGBVCLAoyYRLa2sWJz7ktU4jT-Db2Mbbx-R6m6tdOGwOBXnZxln0-uInAXzN9dS85a8o4i5NPRSWxU-OFmxI2kZMSu7QS8YfseL-rWFWcn9ig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  description: '4° edição do SertãoComp, acontecerá presencialmente no campus Cajazeiras.',
  date: '04 a 07 de Outubro'
},
{
  title: '43º CSBC',
  picture: 'https://s3-alpha-sig.figma.com/img/9239/7976/2f150cbdcf8a4f10f35ccce7b4035210?Expires=1700438400&Signature=aaAT~5I2X9XaiXeco1MSOQrTDh8c6M-hu5Sl6oFmNbP6D2FN-vkoFofAGCBx968AwNfr0saA0bRsyIwQJRfYYiVjPS6TrqpgzJ9h7guuv8ZYwmyrlye7YHRi5HF0kCxoy91f8rscRvormZw6Volo~d5cWyfl65S7--WcSrqY9oMPuHmjrq84CMthpmMbXxHHWt~3Rq0qCTd5Vi~sq1sMraKdwGfnxH-WoShzyDZ1waYa-hSn~3wplQBukoffwQrmBND~RNk3WB3ukPSInLOF3BauQjxRDSC-WIIRYFE6biqbm66bdVhJ2nu5fXSm8SJsSrnObPczBcGL1je4OrEunA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  description: 'O Congresso da Sociedade Brasileira de Computação',
  date: '06 a 11 de Agosto'
}
]
*/
export function ParticipatingScreen() {
  const [participating, setParticipating] = useState<[]>([]);
  const context = useAuth();

  async function findParticipating() {
    try {
      api
        .post("/getParticipatingList", { email: context.user?.email })
        .then((res) => {
          const list = res.data.participatingList;
          setParticipating(list);
        });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }
  useFocusEffect(() => {
    findParticipating();
  });
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/backgrounds/color-morph1.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.boxCards}>
          <Text style={styles.textParticipating}>Estou Participando</Text>
          <FlatList
            data={participating}
            renderItem={({ item }) => <Card event={item} />}
          />
        </View>
      </ImageBackground>
    </View>
  );
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
  boxCards: {
    marginTop: "8%",
    alignItems: "center",
    marginBottom: "15%",
  },
  textParticipating: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "700",
  },
});
