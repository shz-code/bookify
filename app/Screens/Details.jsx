import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "../styles/styles";

const Details = () => {
  const [reviews, setReviews] = useState([
    { id: 1, author: "John Doe", review: "This book is amazing!" },
    { id: 2, author: "Jane Smith", review: "Highly recommended." },
  ]);

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
            uri: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.detailsImage}
        />
        <Text style={styles.bookName}>Book Name</Text>
        <Text style={styles.authorName}>Author Name</Text>
        <Text style={styles.detailsPage_description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ullamcorper nunc non euismod lobortis. Nullam nec sapien imperdiet,
          ultrices lorem vitae, ullamcorper massa.
        </Text>
      </View>
      <View style={styles.reviewsContainer}>
        <Text style={styles.sectionTitle}>Reviews</Text>
        {renderReviews()}
        {/* Add New Comment */}
        <Text style={styles.sectionTitle}>Add New Comment</Text>
        <Text
          style={{ ...styles.sectionTitle, textDecorationLine: "underline" }}
        >
          Login to add new comment
        </Text>
        <TextInput style={styles.input} />
        <View>
          <Pressable
            style={styles.button}
            onPress={handleAddReview}
            android_ripple={{ color: "#535C91" }}
          >
            <Text style={styles.buttonText}>Add a Review</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;
