
import {View, Button, Text} from "react-native"
import React from 'react'
function Terter({navigation}) {
    return (  
<View>
<Text>La liste des contacts</Text>
<Button title="Joe Wilfried Tsonga" onPress={()=> navigation.navigate("Contact", {nom:"Tsonga",prenom:"Joe Wilfried",numero:"0707070707",description:"On partage ?"})}></Button>
<Button title="Donkey Kong" onPress={()=> navigation.navigate("Contact", {nom:"Kong",prenom:"Donkey",numero:"0700101010",description:"Un singe qui fait la bagarre avec une belle cravate"})}></Button>
<Button title="Kirby" onPress={()=> navigation.navigate("Contact", {nom:"Kirbo",prenom:"Kirby",numero:"0700504050",description:"Il avale tout, tel une star du X"})}></Button>
<Button title="Samus" onPress={()=> navigation.navigate("Contact", {nom:"Aran",prenom:"Samus",numero:"0770700770",description:"Une magnifique femme blonde qui combat des extraterrestres dans une armure omega broken"})}></Button>
</View>

    );
}

export default Terter;