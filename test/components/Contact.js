
import { View, Text } from "react-native"
import { StyleSheet } from "react-native/Libraries/StyleSheet/StyleSheet"
function Contact({ navigation, route }) {
    const nom = route.params.nom
    const prenom = route.params.prenom
    const numero = route.params.numero
    const description = route.params.description
    return (


        <View>
            <Text>Contact</Text>
            <Text>Avec la route :</Text>
            <Text style={styles.monde}>Nom : {route.params.nom}</Text>
            <Text>Prenom : {route.params.prenom}</Text>
            <Text>Numero : {route.params.numero}</Text>
            <Text>Description : {route.params.description}</Text>
            <Text>Sans la route :</Text>
            <Text>Nom : {nom}</Text>
            <Text>Prenom : {prenom}</Text>
            <Text>Numero : {numero}</Text>
            <Text>Description : {description}</Text>

        </View>

    );

}

const styles = StyleSheet.create({
    monde: {
        fontSize: 80,
    }
}
)


export default Contact;