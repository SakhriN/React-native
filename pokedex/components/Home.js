import { View, Text, Button } from "react-native";

export default function Home({navigation}){

    return(
<View>
<Text>LA BAGARRE !!!!!</Text>
<Button onPress={()=>navigation.navigate("Liste")} title="Pokedex"></Button>
<Button onPress={()=>navigation.navigate("Detail")} title="Pokemon Aléatoire"></Button>

</View>

    )
}