import { StyleSheet, Text, View } from 'react-native';

export default function C() {
    return (
        <View style={styles.container}>
            <Text>A last page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10225e',
        alignItems: 'center',
        justifyContent: 'center',
    }
});