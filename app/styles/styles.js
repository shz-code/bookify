import { StyleSheet } from "react-native";

const primaryColor = "#1B1A55";
const secondaryColor = "#F0F3FF";
const ternaryColor = "#535C91";

const styles = StyleSheet.create({
  headingText: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
  },
  subHeadingText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  heroBg: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "#000",
    opacity: 0.7,
  },
  brand: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: "100%", height: 200 },
  iconContainer: {
    alignItems: "center",
    gap: 5,
  },
  iconBox: {
    padding: 10,
    backgroundColor: secondaryColor,
    borderRadius: 50,
  },

  bookCategory: {
    backgroundColor: secondaryColor,
    borderWidth: 2,
    borderColor: primaryColor,
    paddingRight: 10,
    paddingLeft: 15,
    paddingTop: 7,
    borderRadius: 15,
    height: 35,
  },
  bookCategorySelected: {
    backgroundColor: primaryColor,
    color: "#fff",
  },

  input: {
    backgroundColor: secondaryColor,
    borderWidth: 2,
    borderColor: primaryColor,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: "#000",
    borderRadius: 10,
    width: "100%",
    marginBottom: 10,
  },

  // Utility
  container: {
    padding: 10,
    backgroundColor: "#fff",
    height: "100%",
    gap: 10,
    position: "relative",
  },
  button: {
    backgroundColor: primaryColor,
    width: "100%",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  // Login
  loginContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  // Book Card
  bookContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: secondaryColor,
    position: "relative",
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    elevation: 2,
  },
  bookCardImage: {
    width: 200,
    height: 150,
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  bookName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  numReviews: {
    fontSize: 14,
    color: ternaryColor,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  readMoreButton: {
    position: "absolute",
    bottom: 0,
    width: 100,
    backgroundColor: primaryColor,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  readMoreButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },

  // Details Page
  detailsPageContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  detailsPageContainer_details: {
    alignItems: "center",
    marginBottom: 20,
  },
  detailsImage: {
    width: 200,
    height: 300,
    borderRadius: 8,
    marginBottom: 10,
  },
  authorName: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10,
  },
  detailsPage_description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  reviewsContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  reviewContainer: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  detailsPage_author: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  reviewText: {
    fontSize: 14,
  },
});

export default styles;
