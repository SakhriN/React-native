import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Terter from "./components/Terter";

export default function App() {


    const Stack = createNativeStackNavigator()
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Terter">
                <Stack.Screen name="Home" component={Home} ></Stack.Screen>
                <Stack.Screen name="Contact" component={Contact}></Stack.Screen>
                <Stack.Screen name="Terter" component={Terter} options={{headerShown:false}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )


}
