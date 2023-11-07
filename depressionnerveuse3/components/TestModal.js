import { useState } from "react";
import { Button, Text, View, Modal, TextInput} from "react-native";
export default function TestModal(props) {


    const [rentrerTexte, setRentrerTexte] = useState('')





    return (
        <Modal visible={props.visible}>
            <View>
                <TextInput placeholder="ajouter un article" onChangeText={e=>setRentrerTexte(e)}></TextInput>
                <View>
                <Button title="Ajouter article" onPress={() =>props.bagarre(rentrerTexte)} />
                <Button title="close modal" onPress={props.testons} />
                </View>
            </View>
        </Modal>
    )
}