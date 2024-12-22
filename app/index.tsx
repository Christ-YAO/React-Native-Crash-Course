import { Link } from "expo-router";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text>Aora!</Text>
            <Link href="/profile" style={{ color: "blue", textDecorationLine: "underline" }}>Go to Profile</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});