import { useState } from 'react';
import { StyleSheet, View, FlatList, Keyboard, Button } from 'react-native';
import GoalInput from '../components/GoalInput';
import GoalItem from '../components/GoalItem';
import Separator from '../components/Separator';

function TodoContainer () {
    const [textValue, setTextValue] = useState('')
    const [listValue, setListValue] = useState([])
    const [open, setOpen] = useState(false)
    const handleInputChange = (value) => {
        setTextValue(value)
    }

    const handleAdd = () => {
        setListValue((prevState) => [...prevState, { text: textValue, id: Math.random().toString() }])
        setTextValue('')
        Keyboard.dismiss()
    }

    const deleteItem = (id) => {
        setListValue((prevState) => {
            return prevState.filter((el) => el.id !== id)
        })
    }
    const openModal = () => {
        setOpen(true)
    }
    const closeModal = () => {
        setOpen(false)
    }
    return (
        <View style={styles.container}>
            <Button title='Add New Todo List' color='#5e0acc' onPress={openModal} />
            <Separator />
            <GoalInput
                textValue={textValue}
                handleInputChange={handleInputChange}
                handleAdd={handleAdd}
                visible={open}
                onClose={closeModal}
            />
            <FlatList
                alwaysBounceVertical={false}
                data={listValue}
                keyExtractor={(item, index) => {
                    return item.id
                }}
                renderItem={(itemData) => {
                    return <GoalItem text={itemData.item.text} onDeleteItem={() => { deleteItem(itemData.item.id) }} />
                }}
            />
        </View>
    )
}

export default TodoContainer

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 8
    },
    separator: {
        marginVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#5e0acc'
    },
    listItem: {
        marginVertical: 8,
        padding: 8,
        backgroundColor: '#5e0acc',
        borderRadius: 6
    },
    listItemText: {
        color: '#fff'
    }
});
