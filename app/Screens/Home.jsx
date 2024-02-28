import { useState } from "react";
import { Image, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Books from "../components/Books";
import { Categories } from "../components/Categories";
import Icon from "../components/ui/Icon";
import { userLoggedOut } from "../features/auth/authSlice";
import styles from "../styles/styles";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.user);
  const [category, setCategory] = useState("All");
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
        <Categories category={category} setCategory={setCategory} />
        {/* Book List */}
        <Books navigation={navigation} category={category} />
      </View>
    </View>
  );
};

export default Home;
