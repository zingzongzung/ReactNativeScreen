const { View, Text, StyleSheet, Pressable } = require("react-native");

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Pressable
				onPress={() => {
					console.log("Teste");
				}}
			>
				<Text style={styles.textCenter}>Home</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
	},
	textCenter: {
		textAlign: "center",
	},
});

export default HomeScreen;
