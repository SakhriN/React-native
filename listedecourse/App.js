import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import Home from "./screens/Home"
import Add from "./screens/Add"
import Details from "./screens/Details"



const Tab = createBottomTabNavigator()
export default function App() {
    return(
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Add" component={Add} />
            <Tab.Screen name="Details" component={Details} />
        </Tab.Navigator>
    </NavigationContainer>
    )
}