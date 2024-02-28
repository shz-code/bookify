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
import Review from "../components/Review";
import {
  useAddReviewMutation,
  useGetReviewsQuery,
} from "../features/reviews/reviewsApi";
import styles from "../styles/styles";

const Details = ({ navigation, route }) => {
  const { author, category, description, name, timestamp, url, id } =
    route.params.book;

  const { userId, email } = useSelector((state) => state.user);

  const { data, isLoading, isError, error } = useGetReviewsQuery();
  const [addReview, { isLoading: submitting }] = useAddReviewMutation();

  const [comment, setComment] = useState("");

  let content = null;
  let errorText = null;
  if (isLoading) content = <Text>Loading...</Text>;
  else if (!isLoading && isError) errorText = <Text>{error.data}</Text>;
  else if (!isLoading && !isError && !data)
    errorText = <Text>Nothing Found</Text>;
  else if (!isLoading && !isError && data)
    content = data.map((item) => {
      if (item.bookId === id) return <Review key={item.id} review={item} />;
    });

  const handleAddReview = async () => {
    if (comment) {
      const body = {
        bookId: id,
        id: data[data.length - 1].id + 1,
        timestamp: new Date().getTime(),
        userName: email.split("@")[0],
        review: comment,
      };
      let newArr = [];
      if (data) newArr = data.concat(body);
      else newArr = newArr.concat(body);
      await addReview(newArr);
    }
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
        {content}
        {/* Add New Comment */}
        {userId ? (
          <View>
            <Text style={styles.sectionTitle}>Add New Comment</Text>
            <TextInput
              placeholder="Write your review"
              style={styles.input}
              value={comment}
              onChangeText={setComment}
            />
            {submitting ? (
              <View
                style={{
                  ...styles.button,
                  backgroundColor: "#B1BDCF",
                }}
              >
                <Text style={styles.buttonText}>Working...</Text>
              </View>
            ) : (
              <Pressable
                style={styles.button}
                onPress={handleAddReview}
                android_ripple={{ color: "#535C91" }}
              >
                <Text style={styles.buttonText}>Add a Review</Text>
              </Pressable>
            )}
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
