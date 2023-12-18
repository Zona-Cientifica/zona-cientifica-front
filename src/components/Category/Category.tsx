import { Text, Image, Pressable } from "react-native";
import styles from "./style";
import { Category } from "../../utils/types/Category";

type Props = {
  category: Category;
  handleFilter: Function
};

export default function CategoryCard({ category, handleFilter }: Props) {
  const image = category.picture;

  return (
    <>
      <Pressable style={styles.categoryCard} onPress={() => handleFilter(category.name)}>
        <Image
          source={image}
          style={styles.backgroundImage}
        />
        <Text style={styles.name}>{category.name}</Text>
      </Pressable>
    </>
  );
}
