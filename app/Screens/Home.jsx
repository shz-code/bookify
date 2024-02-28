import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import Icon from "../components/ui/Icon";
import { userLoggedOut } from "../features/auth/authSlice";
import styles from "../styles/styles";

const categories = ["Bank", "MFS", "Cash"];

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.user);
  const [category, setCategory] = useState("");
  return (
    <View>
      <View style={{ position: "relative" }}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.image}
        />
        <View style={styles.dashboardMenuIcon}>
          <View style={styles.iconBox}>
            {email ? (
              <Icon
                name="exit-outline"
                action={() => dispatch(userLoggedOut())}
                clickAble
                size={30}
              />
            ) : (
              <Icon
                name="enter-outline"
                action={() => navigation.navigate("Login")}
                clickAble
                size={30}
              />
            )}
          </View>
        </View>
        <View style={styles.heroBg}></View>
        <View style={styles.brand}>
          <Text style={styles.headingText}>Bookify</Text>
          {email && (
            <Text style={{ color: "#fff", fontSize: 15 }}>
              Welcome: <Text style={{ fontWeight: 500 }}>{email}</Text>
            </Text>
          )}
        </View>
      </View>
      {/* Body */}
      <View style={styles.container}>
        {/* Book Categories */}
        <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
          <Pressable onPress={() => setCategory("All")}>
            <Text
              style={
                category != "All"
                  ? { ...styles.bookCategory }
                  : {
                      ...styles.bookCategory,
                      ...styles.bookCategorySelected,
                    }
              }
            >
              All
            </Text>
          </Pressable>
          {/* Others */}
          {categories.map((item) => (
            <Pressable key={item} onPress={() => setCategory(item)}>
              <Text
                style={
                  category != item
                    ? { ...styles.bookCategory }
                    : {
                        ...styles.bookCategory,
                        ...styles.bookCategorySelected,
                      }
                }
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
        {/* Book List */}
        {/* <FlatList /> */}
        <View>
          <BookCard book={{ item: { name: "SM" } }} navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

export default Home;
