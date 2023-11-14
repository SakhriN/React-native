import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./components/Home"
import Liste from "./components/Liste"
import Detail from "./components/Detail"
import {NavigationContainer} from "@react-navigation/native"
import HeaderButton from "./components/HeaderButton"


export default function App({ navigation }) {
    const track = {
        id: '1',
        url: require('./assets/pokerap.mp3'),
        title: 'pokerap',
      };


    const Stack = createNativeStackNavigator()

    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}></Stack.Screen>

                <Stack.Screen
        name="Liste"
        component={Liste}
        options={{
          headerRight: () => (
            <HeaderButton
              title="Play"
              onPress={() => {
                // Action à effectuer lorsque le bouton est pressé
                console.log('Bouton pressé !');
              }}
              track={track}
            />
          ),
        }}
      />
                <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>


    )


}