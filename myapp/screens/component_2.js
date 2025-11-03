import { StyleSheet, Text, View } from 'react-native';

export default function B() {
    return (
        <View style={styles.container}>
            <Text>A second page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8f14a3',
        alignItems: 'center',
        justifyContent: 'center',
    }
});