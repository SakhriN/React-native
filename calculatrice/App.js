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
            console
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
                    <View>
                        <Text style={styles.text}>AC</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("^")}>
                    <View>
                        <Text style={styles.text}>^</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("%")}>
                    <View>
                        <Text style={styles.text}>%</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("/")}>
                    <View>
                        <Text style={styles.text}>/</Text>
                    </View>
                </Pressable>

            </View>

            <View style={styles.row}>

                <Pressable onPress={() => composant("7")}>
                    <View>
                        <Text style={styles.text}>7</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("8")}>
                    <View>
                        <Text style={styles.text}>8</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("9")}>
                    <View>
                        <Text style={styles.text}>9</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("*")}>
                    <View>
                        <Text style={styles.text}>X</Text>
                    </View>
                </Pressable>

            </View>

            <View style={styles.row}>

                <Pressable onPress={() => composant("4")}>
                    <View>
                        <Text style={styles.text}>4</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("5")}>
                    <View>
                        <Text style={styles.text}>5</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("6")}>
                    <View>
                        <Text style={styles.text}>6</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("-")}>
                    <View>
                        <Text style={styles.text}>-</Text>
                    </View>
                </Pressable>

            </View>

            <View style={styles.row}>

                <Pressable onPress={() => composant("1")}>
                    <View>
                        <Text style={styles.text}>1</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("2")}>
                    <View>
                        <Text style={styles.text}>2</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("3")}>
                    <View>
                        <Text style={styles.text}>3</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("+")}>
                    <View>
                        <Text style={styles.text}>+</Text>
                    </View>
                </Pressable>

            </View>

            <View style={styles.row}>
                <Pressable onPress={() => composant(".")}>
                    <View>
                        <Text>.</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("0")}>
                    <View>
                        <Text>0</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("Del")}>
                    <View>
                        <Text>Del</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => composant("=")}>
                    <View>
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
        marginBottom: 10,
        backgroundColor: "gray"
    },
    text: {
        fontSize: 50,
    },
    text: {
        width: '100%',

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 90,
    },
});


export default App;
