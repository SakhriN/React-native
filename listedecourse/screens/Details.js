import { Text, View } from "react-native"

export default function Details({ navigation, route }) {

    const name = route.params.name
    const description = route.params.description
    return (
        <View>
            <Text>{name}</Text>
            <Text>{description}</Text>
        </View>

    )
}