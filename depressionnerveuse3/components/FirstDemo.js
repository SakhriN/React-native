import { useState } from "react"
import { Button, FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import TestModal from "./TestModal"



export default function FirstDemo() {



    const [boolean, setBoolean] = useState(false)
    const [list, setList] = useState([])

    function bagarreHandler(bagarreItem) {
        setList(anciennesBagarres => [...anciennesBagarres, bagarreItem])
        testons()
        console.log(list)
    }
function supressionBagarre(index){
const newTab = [...list]
newTab.splice(index,1)
setList(newTab)
}


    function testons() {
        setBoolean(!boolean)
    }

    return (
        <View>
            <View style={styles.container}>
                <Button title='Ajouter un article' color={"red"} onPress={() => setBoolean(true)} />
                <TestModal bagarre={texte => bagarreHandler(texte)} testons={testons} visible={boolean} />
            </View >
            <FlatList data={list} renderItem={(itemData) => {
                return (
                    <Pressable onPress={()=>supressionBagarre(itemData.index)}><Text>{itemData.item}</Text></Pressable>
                )
            }} keyExtractor={(item, index) => {
                return index
            }}

            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red"
    },
    text: {
        color: "black",
        fontSize: 72,
    }
})