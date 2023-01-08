import { StyleSheet, View } from "react-native"

function Separator () {
    return (
        <View style={styles.separator}></View>
    )
}

export default Separator

const styles = StyleSheet.create({
    separator: {
        marginVertical: 16,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#5e0acc'
    }
})
