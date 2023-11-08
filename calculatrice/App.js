import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

function App() {

    const [display, setDisplay] = useState("")

    const composant = (valeurAjoutee) => {
        let newCalcul = ""
        newCalcul = display + valeurAjoutee
        setDisplay(newCalcul)

        if (valeurAjoutee === "=") {
            return display
        }

        if (valeurAjoutee === "AC") {
            newCalcul = ""
            setDisplay(newCalcul)
        }
    }



    return (
        <View>
            <View>
                <Text style={styles.display}>{display}</Text>
            </View>

            <View style={styles.row}>

                <Pressable onPress={() => composant("AC")}>
                    <View style={styles.button}>
                        <Text>AC</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("^")}>
                    <View style={styles.button}>
                        <Text>^</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("%")}>
                    <View style={styles.button}>
                        <Text>%</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("/")}>
                    <View style={styles.button}>
                        <Text>/</Text>
                    </View>
                </Pressable>

            </View>

            <View style={styles.row}>

                <Pressable onPress={() => composant("7")}>
                    <View style={styles.button}>
                        <Text>7</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("8")}>
                    <View style={styles.button}>
                        <Text>8</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("9")}>
                    <View style={styles.button}>
                        <Text>9</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("*")}>
                    <View style={styles.button}>
                        <Text>X</Text>
                    </View>
                </Pressable>

            </View>

            <View style={styles.row}>

                <Pressable onPress={() => composant("4")}>
                    <View style={styles.button}>
                        <Text>4</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("5")}>
                    <View style={styles.button}>
                        <Text>5</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("6")}>
                    <View style={styles.button}>
                        <Text>6</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("-")}>
                    <View style={styles.button}>
                        <Text>-</Text>
                    </View>
                </Pressable>

            </View>

            <View style={styles.row}>

                <Pressable onPress={() => composant("1")}>
                    <View style={styles.button}>
                        <Text>1</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("2")}>
                    <View style={styles.button}>
                        <Text>2</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("3")}>
                    <View style={styles.button}>
                        <Text>3</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("+")}>
                    <View style={styles.button}>
                        <Text>+</Text>
                    </View>
                </Pressable>

            </View>

            <View style={styles.row}>
                <Pressable onPress={() => composant(".")}>
                    <View style={styles.button}>
                        <Text>.</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("0")}>
                    <View style={styles.button}>
                        <Text>0</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("Del")}>
                    <View style={styles.button}>
                        <Text>Del</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("=")}>
                    <View style={styles.button}>
                        <Text>=</Text>
                    </View>
                </Pressable>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    display: {
        fontSize: 30,
        width: 'auto',
        height: 250,
        marginBottom: 2,
        backgroundColor: "gray"
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,
    },
    button:{
        borderWidth:1,
        borderColor:"black",
        width :60,
        height:60,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
    }
});


export default App;
