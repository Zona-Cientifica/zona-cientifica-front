import { Text, Image, Pressable } from "react-native";
import styles from "./style";

type Category = {
  name: string;
  picture: string;
};

type Props = {
  category: Category;
  handleFilter: Function
};

export default function Category({ category, handleFilter }: Props) {
  return (
    <>
      <Pressable style={styles.categoryCard} onPress={() => handleFilter(category.name)}>
        <Image
          source={{ uri: category.picture }}
          style={styles.backgroundImage}
        />
        <Text style={styles.name}>{category.name}</Text>
      </Pressable>
    </>
  );
}
