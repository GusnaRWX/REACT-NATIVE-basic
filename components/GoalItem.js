import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem ({
    text,
    onDeleteItem = () => { }
}) {
    return (

        <View
            style={styles.listItem}
        >
            <Pressable android_ripple={{ color: '#210644' }} onPress={onDeleteItem}>
                <Text
                    style={styles.listItemText}
                >
                    {text}
                </Text>
            </Pressable>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 8,
        backgroundColor: '#5e0acc',
        borderRadius: 6
    },
    listItemText: {
        color: '#fff',
        padding: 8,
    }
})