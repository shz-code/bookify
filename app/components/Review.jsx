import { Text, View } from "react-native";
import styles from "../styles/styles";

const Review = ({ review }) => {
  const { review: desc, userName, timestamp } = review;
  return (
    <View key={review.id} style={styles.reviewContainer}>
      <Text style={styles.reviewAuthor}>{userName}</Text>
      <Text style={{ fontSize: 12 }}>
        {new Date(timestamp).toLocaleDateString()}
      </Text>
      <Text style={styles.reviewText}>{desc}</Text>
    </View>
  );
};

export default Review;
