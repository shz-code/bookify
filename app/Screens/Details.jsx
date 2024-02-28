import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import styles from "../styles/styles";

const Details = ({ navigation, route }) => {
  const { author, category, description, name, timestamp, url } =
    route.params.book;

  const [reviews, setReviews] = useState([
    { id: 1, author: "John Doe", review: "This book is amazing!" },
    { id: 2, author: "Jane Smith", review: "Highly recommended." },
  ]);

  const { userId } = useSelector((state) => state.user);

  const renderReviews = () => {
    return reviews.map((review) => (
      <View key={review.id} style={styles.reviewContainer}>
        <Text style={styles.author}>{review.author}</Text>
        <Text style={styles.reviewText}>{review.review}</Text>
      </View>
    ));
  };

  const handleAddReview = () => {
    // Add your logic to handle adding a new review
    const newReview = {
      id: reviews.length + 1,
      author: "New Reviewer",
      review: "This book is great!",
    };
    setReviews([...reviews, newReview]);
  };

  return (
    <ScrollView contentContainerStyle={styles.detailsPageContainer}>
      <View style={styles.detailsPageContainer_details}>
        <Image
          source={{
            uri: url,
          }}
          style={styles.detailsImage}
        />
        <Text style={styles.bookName}>{name}</Text>
        <Text style={styles.authorName}>{author}</Text>
        <Text style={styles.detailsPage_description}>{description}</Text>
      </View>
      <View style={styles.reviewsContainer}>
        <Text style={styles.sectionTitle}>Reviews</Text>
        {renderReviews()}
        {/* Add New Comment */}
        {userId ? (
          <View>
            <Text style={styles.sectionTitle}>Add New Comment</Text>
            <TextInput style={styles.input} />
            <Pressable
              style={styles.button}
              onPress={handleAddReview}
              android_ripple={{ color: "#535C91" }}
            >
              <Text style={styles.buttonText}>Add a Review</Text>
            </Pressable>
          </View>
        ) : (
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                ...styles.sectionTitle,
                textDecorationLine: "underline",
              }}
            >
              Login to add new comment
            </Text>
          </Pressable>
        )}
      </View>
    </ScrollView>
  );
};

export default Details;
