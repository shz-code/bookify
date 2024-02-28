import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../features/books/booksApi";
import BookCard from "./BookCard";

const Books = ({ navigation }) => {
  const { userId } = useSelector((state) => state.user);
  const { data, isLoading, isError, error } = useGetBooksQuery();

  let content = null;
  let errorText = null;
  if (isLoading) content = <Text>Loading...</Text>;
  else if (!isLoading && isError) errorText = <Text>{error.data}</Text>;
  else if (!isLoading && !isError && !data)
    errorText = <Text>Nothing Found</Text>;
  else if (!isLoading && !isError && data)
    content = (
      <FlatList
        data={data}
        renderItem={(item) => <BookCard book={item} navigation={navigation} />}
        key={(item) => item}
        style={{ height: 580 }}
      />
    );
  return (
    <View>
      {/* <FlatList /> */}
      {content}
    </View>
  );
};

export default Books;
