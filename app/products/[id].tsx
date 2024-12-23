import {
  View,
  Text,
  Platform,
  Dimensions,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
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

  const router = useRouter();

  return (
    <View style={{ flexDirection: width < 600 ? "column" : "row" }}>
      <Text>Product Page</Text>
      <Text>Product Page</Text>
      <Text>Product Page</Text>
      <TouchableOpacity onPress={()=>{
        router.navigate(`/`);
      }}><Text>Back to home.</Text></TouchableOpacity>
    </View>
  );
}
