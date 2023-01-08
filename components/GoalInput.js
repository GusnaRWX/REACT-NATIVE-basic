import React from 'react'
import { StyleSheet, TextInput, Button, Text, View, Modal, Image } from 'react-native'
import Separator from './Separator'

function GoalInput ({
    textValue,
    handleInputChange = () => { },
    handleAdd = () => { },
    visible,
    onClose = () => { }
}) {

    const handleSubmit = () => {
        handleAdd()
        onClose()
    }
    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.root}>
                <View>
                    <Text style={styles.titleLabel}>ADD NEW TODO LIST</Text>
                </View>
                <Image style={styles.img} source={require('../assets/images/personGroup.jpg')} />
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Your Todo List'
                        onChangeText={handleInputChange}
                        value={textValue}
                    />
                </View>
                <Separator />
                <View style={styles.buttonWrapper}>
                    <View style={styles.button}>
                        <Button
                            title='Cancel'
                            color='#f31282'
                            onPress={onClose}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Add'
                            onPress={handleSubmit}
                            color='#5e0acc'
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 8,
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C85C8E'
    },
    inputWrapper: {
        width: '100%',
        marginVertical: 8
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#5e0acc',
        backgroundColor: '#e4d0ff',
        color: '#5e0acc',
        textDecorationLine: 'none',
        width: '100%',
        paddingHorizontal: 6,
        borderRadius: 6,
        marginRight: 16
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        width: '20%',
        marginHorizontal: 8
    },
    img: {
        width: '100%',
        height: 200,
        borderRadius: 6
    },
    titleLabel: {
        color: '#5e0acc',
        fontSize: 30
    }
})
