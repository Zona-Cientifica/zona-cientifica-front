import { View, Text, ImageBackground, FlatList, Pressable } from "react-native";
import styles from "./style";
import { Card } from "../../components/Card/card";
import { api } from "../../utils/api";
import { useState, useEffect, useMemo } from "react";
import { useIsFocused } from "@react-navigation/native";
import { categories } from "../../utils/mock/mockCategories";
import CategoryCard from "../../components/Category/Category";

type Events = {
  _id: string;
  title: string;
  picture: string;
  description: string;
  date: string;
  theme: string;
  location: string;
};

export default function AllEventsScreen({navigation}:any) {
  const [events, setEvents] = useState<Events[]>([]);
  const [filter, setFilter] = useState("NONE");

  const isFocused = useIsFocused();

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
  }, [isFocused]);

  const filteredContent = useMemo(() => {
    if (filter === "NONE") {
      return events;
    }
    return events.filter((item) => item.theme === filter);
  }, [filter, events]);

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

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
              data={categories}
              renderItem={({ item }) => (
                <CategoryCard category={item} handleFilter={handleFilterChange} />
              )}
              horizontal
            />

            <Pressable style={styles.clearFilter} onPress={() => handleFilterChange("NONE")}>
              <Text style={styles.clearFilterText}>Limpar Filtro</Text>
            </Pressable>
            
          </View>

          <View style={styles.boxEvents}>
            <Text style={styles.title}>Eventos</Text>

            <View style={styles.events}>
              <FlatList
                data={filteredContent}
                renderItem={({ item }) => <Card navigation={navigation} event={item}/>}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
