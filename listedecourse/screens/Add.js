import { Text, View, TextInput, Button } from "react-native"

export default function Add({navigation, route}){
    return(

        <View>
<Text>Nom du produit</Text>
<TextInput onChangeText={(text)=>{route.params.setList(text), value="name"}}></TextInput>
<Text>Description du produit</Text>
<TextInput onChangeText={(text)=>{route.params.setList(text), value="description"}}></TextInput>
<Button onPress={()=> route.params.setList} title="Confirmer" />
</View>
    )
}