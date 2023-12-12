import { View, Text, ImageBackground, FlatList, Pressable } from "react-native";
import styles from "./style";
import Category from "../../components/Category/Category";
import { Card } from "../../components/Card/card";
import { api } from "../../utils/api";
import { useState, useEffect, useMemo } from "react";

type Events = {
  title: string;
  picture: string;
  description: string;
  date: string;
  theme: string
};

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
  const [filter, setFilter] = useState("NONE");

  async function findEvents() {
    try {
      api.get("/events").then((res) => {
        setEvents(res.data);
      });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }

  // async function findCategorys() {
    
  // }
  
  useEffect(() => {
    findEvents();
    // findCategorys();
  }, [])

  const filteredContent = useMemo(() => {
    if(filter === "NONE"){
      return events;
    }
    return events.filter((item) => item.theme === filter)
  }, [filter, events])

  const handleFilterChange = (filter:string) => {
    setFilter(filter)
  }

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
              renderItem={({ item }) => <Category category={item} handleFilter={handleFilterChange}/>}
              horizontal
            />

            <Pressable onPress={() => handleFilterChange("NONE")}>
              <Text>limpar</Text>
            </Pressable>
          </View>

          <View style={styles.boxEvents}>
            <Text style={styles.title}>Eventos</Text>

            <View style={styles.events}>
              <FlatList
                data={filteredContent}
                renderItem={({ item }) => <Card event={item} />}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
