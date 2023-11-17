import { View, Text, Image } from "react-native";
import styles from "./style";

type Category = {
  name: string;
  picture: string;
};

type Props = {
  category: Category;
};

export default function Category({ category }: Props) {
  return (
    <>
      <View style={styles.categoryCard}>
        <Image
          source={{ uri: category.picture }}
          style={styles.backgroundImage}
        />
        <Text style={styles.name}>{category.name}</Text>
      </View>
    </>
  );
}
