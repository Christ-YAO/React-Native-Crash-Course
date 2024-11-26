import { Link } from "expo-router";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {

    return (
        <View style={styles.container}>
            <Text>Aora!</Text>
            <StatusBar barStyle="dark-content" />
            <Link href="/profile" style={{ color: "blue" }}>Go to Profile</Link>
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