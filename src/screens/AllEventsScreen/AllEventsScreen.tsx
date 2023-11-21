import { View, Text, ImageBackground, FlatList } from "react-native";
import styles from "./style";
import Category from "../../components/Category/Category";
import { Card } from "../../components/Card/card";
import axios from "axios";
import { useState } from "react";

const api = axios.create({
  baseURL: "http://10.0.2.2:3000",
});

type Events = {
  title: string;
  picture: string;
  description: string;
  date: string;
};

/*const events = [
  {
    title: "IV SertãoComp",
    picture:
    "https://s3-alpha-sig.figma.com/img/e25e/f73a/1287e212956d8313fb8b12163d14f89b?Expires=1700438400&Signature=NkXNU8CcHrw0HX0TCWO1kAcHc5YVNXiZyO1YmIQDbOSxVqq01YBU71IJeVL0rxoNDb8SdB5Iqfgcl6q8LJmoyW1MVGph5fF6ELqkhocDOTx-1Vh-v~8xbszFPzo855qr4NAm8-PIS0SBdyztSaQ1z31KzRnz9GDNcWzleWbKm7eQ3jLYpABcCJGtlDs7gYYXPU4a6Te1MUboH4fiI-uE9PZALsBspqG5X2j-7-JqLbGBVCLAoyYRLa2sWJz7ktU4jT-Db2Mbbx-R6m6tdOGwOBXnZxln0-uInAXzN9dS85a8o4i5NPRSWxU-OFmxI2kZMSu7QS8YfseL-rWFWcn9ig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    description:
    "4° edição do SertãoComp, acontecerá presencialmente no campus Cajazeiras.",
    date: "04 a 07 de Outubro",
  },
  {
    title: "43º CSBC",
    picture:
    "https://s3-alpha-sig.figma.com/img/9239/7976/2f150cbdcf8a4f10f35ccce7b4035210?Expires=1700438400&Signature=aaAT~5I2X9XaiXeco1MSOQrTDh8c6M-hu5Sl6oFmNbP6D2FN-vkoFofAGCBx968AwNfr0saA0bRsyIwQJRfYYiVjPS6TrqpgzJ9h7guuv8ZYwmyrlye7YHRi5HF0kCxoy91f8rscRvormZw6Volo~d5cWyfl65S7--WcSrqY9oMPuHmjrq84CMthpmMbXxHHWt~3Rq0qCTd5Vi~sq1sMraKdwGfnxH-WoShzyDZ1waYa-hSn~3wplQBukoffwQrmBND~RNk3WB3ukPSInLOF3BauQjxRDSC-WIIRYFE6biqbm66bdVhJ2nu5fXSm8SJsSrnObPczBcGL1je4OrEunA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    description: "O Congresso da Sociedade Brasileira de Computação",
    date: "06 a 11 de Agosto",
  },
  {
    title: "IV SertãoComp",
    picture:
    "https://s3-alpha-sig.figma.com/img/e25e/f73a/1287e212956d8313fb8b12163d14f89b?Expires=1700438400&Signature=NkXNU8CcHrw0HX0TCWO1kAcHc5YVNXiZyO1YmIQDbOSxVqq01YBU71IJeVL0rxoNDb8SdB5Iqfgcl6q8LJmoyW1MVGph5fF6ELqkhocDOTx-1Vh-v~8xbszFPzo855qr4NAm8-PIS0SBdyztSaQ1z31KzRnz9GDNcWzleWbKm7eQ3jLYpABcCJGtlDs7gYYXPU4a6Te1MUboH4fiI-uE9PZALsBspqG5X2j-7-JqLbGBVCLAoyYRLa2sWJz7ktU4jT-Db2Mbbx-R6m6tdOGwOBXnZxln0-uInAXzN9dS85a8o4i5NPRSWxU-OFmxI2kZMSu7QS8YfseL-rWFWcn9ig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    description:
    "4° edição do SertãoComp, acontecerá presencialmente no campus Cajazeiras.",
    date: "04 a 07 de Outubro",
  },
  {
    title: "43º CSBC",
    picture:
    "https://s3-alpha-sig.figma.com/img/9239/7976/2f150cbdcf8a4f10f35ccce7b4035210?Expires=1700438400&Signature=aaAT~5I2X9XaiXeco1MSOQrTDh8c6M-hu5Sl6oFmNbP6D2FN-vkoFofAGCBx968AwNfr0saA0bRsyIwQJRfYYiVjPS6TrqpgzJ9h7guuv8ZYwmyrlye7YHRi5HF0kCxoy91f8rscRvormZw6Volo~d5cWyfl65S7--WcSrqY9oMPuHmjrq84CMthpmMbXxHHWt~3Rq0qCTd5Vi~sq1sMraKdwGfnxH-WoShzyDZ1waYa-hSn~3wplQBukoffwQrmBND~RNk3WB3ukPSInLOF3BauQjxRDSC-WIIRYFE6biqbm66bdVhJ2nu5fXSm8SJsSrnObPczBcGL1je4OrEunA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    description: "O Congresso da Sociedade Brasileira de Computação",
    date: "06 a 11 de Agosto",
  },
];
*/
const category = [
  {
    name: "Tecnologia",
    picture:
      "https://s3-alpha-sig.figma.com/img/a165/5663/798343d67745f88113352206ab3a1443?Expires=1701043200&Signature=Ng5738hwfD~ukuB0JCpKsT~e6TjnhqFaY9Ja2kVnfPmUMtQz80mu1d4hZ~vd2iVdiNhL5VnwmXf9byKzhnQd2YnWuurEUwvijqoiJYaJtpWYfFdsnCpq-B4BS8VjMfC2YYu~DQingzWxm2PbOw-f1sDFh61wT7CRZVpJOHN3XNCUwBVQcCVKx2-0LPs2Edmkdmj5McU0oNvo-KMU~aiPpF5vAJptSDjAw1hFE80jp34a-7yK9Wx4cWAI1FF9lJNdyb6e73fSRwoGm6gNkv8xOoYifEibPPNVB7heR05uKI7NlldPgPeLb-Ff0GBt0DE6M2fSaUtER7iMP~RsAaOVgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Saúde",
    picture:
      "https://s3-alpha-sig.figma.com/img/db4e/70ef/bb6d97175aacf4777a69f578609818bc?Expires=1701043200&Signature=mgi6PxEbavq4UJbilW4h3AVWNO59hKw6L3TctJ1qZhyJ6IXdjKVvDaKTLLlmxIOz3A3QhsxLDCmJK55bv0wx8gbmNKzG-4U-uwTKdP1FGB-W6DYimEZKhRBMcNRmA22wKHANNa9G8y7BvrR1iWEP2H3cHjzx6zJEr2l7q2Jr9cPjgkWM2tIeSG4TxyZGimG-iaU5UL3d8e975xn0byTKu~ESvSdFQVXNKN7rNz3IFANcjacxuc6ZdDqclKO6ZsoW2lejQZ9jPnJXJSOoGj8lj-z4~vh~dCQTQf1e6-lMTG5JXbXN4jZUViFV5zBn79k75nZYR~X1qYb-e7wWcztoaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Educação",
    picture:
      "https://s3-alpha-sig.figma.com/img/db4e/70ef/bb6d97175aacf4777a69f578609818bc?Expires=1701043200&Signature=mgi6PxEbavq4UJbilW4h3AVWNO59hKw6L3TctJ1qZhyJ6IXdjKVvDaKTLLlmxIOz3A3QhsxLDCmJK55bv0wx8gbmNKzG-4U-uwTKdP1FGB-W6DYimEZKhRBMcNRmA22wKHANNa9G8y7BvrR1iWEP2H3cHjzx6zJEr2l7q2Jr9cPjgkWM2tIeSG4TxyZGimG-iaU5UL3d8e975xn0byTKu~ESvSdFQVXNKN7rNz3IFANcjacxuc6ZdDqclKO6ZsoW2lejQZ9jPnJXJSOoGj8lj-z4~vh~dCQTQf1e6-lMTG5JXbXN4jZUViFV5zBn79k75nZYR~X1qYb-e7wWcztoaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    name: "Engenharia",
    picture:
      "https://s3-alpha-sig.figma.com/img/a165/5663/798343d67745f88113352206ab3a1443?Expires=1701043200&Signature=Ng5738hwfD~ukuB0JCpKsT~e6TjnhqFaY9Ja2kVnfPmUMtQz80mu1d4hZ~vd2iVdiNhL5VnwmXf9byKzhnQd2YnWuurEUwvijqoiJYaJtpWYfFdsnCpq-B4BS8VjMfC2YYu~DQingzWxm2PbOw-f1sDFh61wT7CRZVpJOHN3XNCUwBVQcCVKx2-0LPs2Edmkdmj5McU0oNvo-KMU~aiPpF5vAJptSDjAw1hFE80jp34a-7yK9Wx4cWAI1FF9lJNdyb6e73fSRwoGm6gNkv8xOoYifEibPPNVB7heR05uKI7NlldPgPeLb-Ff0GBt0DE6M2fSaUtER7iMP~RsAaOVgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

export default function AllEventsScreen() {
  
  const [events, setEvents] = useState<Events[]>([]);

  async function findEvents() {
    try {
      api.get("/events").then((res) => {
        setEvents(res.data);
      });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }
  findEvents();

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/backgrounds/color-morph1.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.boxCategory}>
            <Text style={styles.title}>Categorias</Text>

            <FlatList
              data={category}
              renderItem={({ item }) => <Category category={item} />}
              horizontal
            />
          </View>

          <View style={styles.boxEvents}>
            <Text style={styles.title}>Eventos</Text>

            <View style={styles.events}>
              <FlatList
                data={events}
                renderItem={({ item }) => <Card event={item} />}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
