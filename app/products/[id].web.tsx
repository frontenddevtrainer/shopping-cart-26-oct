import {
  View,
  Text,
  Platform,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";

export default function ProductPage() {
  const params = useLocalSearchParams();

  const navigation = useNavigation();

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (Platform.OS === "android") {
      navigation.setOptions({ title: "Product Page" });
    } else if (Platform.OS === "ios") {
      navigation.setOptions({ title: "iOS Product Page" });
    }
  }, []);

  return (
    <View style={{ flexDirection: width < 600 ? "column" : "row" }}>
      <Text>This is only for web</Text>
      <Text>Product Page</Text>
      <Text>Product Page</Text>
      <Text>Product Page</Text>
    </View>
  );
}
