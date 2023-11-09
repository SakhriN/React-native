import Geolocation from "@react-native-community/geolocation"
import { useState } from "react"
import { Text, FlatList, ScrollView, Button, Pressable } from "react-native"
export default function Home({navigation}) {


    const [List, setList] = useState ([
        {
            id: 1,
            name: "kiwi",
            description: "Un oeuf avec des poils tout autour et fruité."
        },
        {
            id: 2,
            name: "chips",
            description: "Bonne soirée"
        },
        {
            id: 3,
            name: "bangala",
            description: "Un truc que tous les hommes ont"
        },
        {
            id: 4,
            name: "caca",
            description: "sa sort du cul."
        },
        {
            id: 5,
            name: "banane",
            description: "Fruit que beaucoups de gens mangent."
        },
    ])



    return (
        <ScrollView>
            <Text>Bienvenue dans ma liste de course ultra sécurisée, c 'est faux je rigole.</Text>
            <Button onPress={()=> navigation.navigate("Add")}  title="Ajouter un article" />
            <Text>Voici la liste de course :</Text>
            <FlatList
                data={List} renderItem={({ item }) =>
                    <Pressable onPress={()=> navigation.navigate("Details",{ name:item.name , description:item.description, setList:{setList}})}><Text>{item.name}</Text></Pressable>
                }
                keyExtractor={
                    item =>  item.id
                }
            />
        </ScrollView>
    )
}