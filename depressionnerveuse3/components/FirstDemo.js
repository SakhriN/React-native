import { useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import TestModal from "./TestModal"



export default function FirstDemo() {



    const [boolean, setBoolean] = useState(false)
    const [list, setList] = useState([])

    function bagarreHandler(bagarreItem){
        setList(prevlist => [...prevlist, bagarreItem])
        testons()
        console.log(list)
    }

    function testons() {
        setBoolean(!boolean)
    }

    return (
        <View style={styles.container}>
            <Button title='Ajouter un article' color={"red"} onPress={() => setBoolean(true)} />
            <TestModal bagarre={texte=>bagarreHandler(texte)}  testons={testons} visible={boolean} />
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