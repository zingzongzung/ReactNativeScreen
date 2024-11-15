import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ExpenseDetailScreen from "./screens/ExpenseDetailScreen";
import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerScreen from "./screens/DrawerScreen";

export default function App() {
	const Drawer = createDrawerNavigator();

	function MyDrawer() {
		return (
			<Drawer.Navigator initialRouteName="Home">
				<Drawer.Screen name="Home" component={HomeScreen} />
				<Drawer.Screen name="Profile" component={DrawerScreen} />
			</Drawer.Navigator>
		);
	}

	const Stack = createNativeStackNavigator();

	function MyStack() {
		return (
			<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name="Home"
					component={MyDrawer}
					options={{
						headerRight: () => {
							return (
								<Pressable
									onPress={() => {
										console.log("Dummy test");
									}}
								>
									<Text>Press Me</Text>
								</Pressable>
							);
						},
					}}
				/>
				<Stack.Screen name="Details" component={ExpenseDetailScreen} />
			</Stack.Navigator>
		);
	}

	return <NavigationContainer>{MyStack()}</NavigationContainer>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
