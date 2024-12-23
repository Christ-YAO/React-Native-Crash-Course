import { Link } from "expo-router";
import { StatusBar, Text, View } from "react-native";

export default function App() {

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <StatusBar barStyle="dark-content" />
            <Text>Aora!</Text>
            <Link href="/profile" style={{ color: "blue", textDecorationLine: "underline" }}>Go to Profile</Link>
        </View>
    );
}