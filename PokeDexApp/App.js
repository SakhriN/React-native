// App.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import axios from 'axios';


const App = () => { 
const [pokemonne, setPokemonne] = useState([])

    const fetchData = async () => {
        try {
            // Récupérer les données du Pokémon
            const pokemonResponse = await axios.get("https://pokeapi.co/api/v2/pokemon/1/");
            const pokemonData = pokemonResponse.data;
            const {name} = pokemonData
            const sprite = pokemonData.sprites.front_default
            const type = pokemonData.types[0].type.name
            const type2 = pokemonData.types[1].type.name




            // Récupérer les données de l'espèce du Pokémon
            const speciesResponse = await axios.get("https://pokeapi.co/api/v2/pokemon-species/1/");
            const speciesData = speciesResponse.data;
            const description = speciesData.flavor_text_entries[0].flavor_text.split("\n").join(" ")

            // Faire quelque chose avec les données récupérées
            console.log("Données du Pokémon :", pokemonData);
            console.log("Données de l'espèce du Pokémon :", speciesData);
            const bloup = [type]
            if (type2){
                bloup.push(type2)
            }
            const poke = {
                pokemonName : name,
                pokemonSprite : sprite,
                pokemonDescription : description,
                pokemonType: bloup,
            }

            setPokemonne(poke)
            console.log(pokemonne.pokemonSprite)


            // Tu peux maintenant utiliser les données comme tu le souhaites
        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);
  return ( 
    <View style={styles.container}>
        <Text style={styles.title}>{pokemonne.pokemonName}</Text>
        <Image style={styles.image} source={{ uri: pokemonne.pokemonSprite }}/>
        <View>
            <Text style={styles.text}>{pokemonne.pokemonType.join(" ")}</Text>
        </View>
        <Text>{pokemonne.pokemonDescription}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title:{
fontSize:72,
textTransform:'capitalize'
  },
text:{
    textTransform:'capitalize'
},
  image:{
    width:200,
    height:200,
  },
});

export default App;
