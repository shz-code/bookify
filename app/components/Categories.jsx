import { Pressable, ScrollView, Text, View } from "react-native";
import { useGetCategoriesQuery } from "../features/categories/categoriesApi";
import styles from "../styles/styles";

export const Categories = ({ category, setCategory }) => {
  const { data, isLoading, isError, error } = useGetCategoriesQuery();

  let content = null;
  let errorText = null;
  if (isLoading) content = <Text>Loading...</Text>;
  else if (!isLoading && isError) errorText = <Text>{error.data}</Text>;
  else if (!isLoading && !isError && !data)
    errorText = <Text>Nothing Found</Text>;
  else if (!isLoading && !isError && data)
    content = data.map((item) => (
      <Pressable key={item.id} onPress={() => setCategory(item.name)}>
        <Text
          style={
            category != item.name
              ? { ...styles.bookCategory }
              : {
                  ...styles.bookCategory,
                  ...styles.bookCategorySelected,
                }
          }
        >
          {item.name}
        </Text>
      </Pressable>
    ));

  return (
    <View style={{ flexDirection: "row" }}>
      <ScrollView horizontal={true}>
        <View style={{ flexDirection: "row", gap: 10, paddingVertical: 10 }}>
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
          {content}
        </View>
      </ScrollView>
    </View>
  );
};
