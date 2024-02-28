import { Image, Pressable, Text, View } from "react-native";
import styles from "../styles/styles";

const BookCard = ({ book, navigation }) => {
  const { author, category, description, name, timestamp, url } = book.item;
  return (
    <Pressable
      style={styles.bookContainer}
      android_ripple={{ color: "#fff" }}
      onPress={() => navigation.navigate("Details", { book: book.item })}
    >
      <Image
        source={{
          uri: url,
        }}
        style={styles.bookCardImage}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.bookName}>{name}</Text>
        <Text style={styles.authorName}>{author}</Text>
        <Text style={styles.description}>{description.slice(0, 30)}...</Text>
        <Pressable
          style={styles.readMoreButton}
          onPress={() => navigation.navigate("Details", { book: book.item })}
        >
          <Text style={styles.readMoreButtonText}>Read More</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default BookCard;
