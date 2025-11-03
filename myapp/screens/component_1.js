import {Button, StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function A() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>A page</Text>
            <Button title={"To B"} onPress={() => navigation.navigate("component_2")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});