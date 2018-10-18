import React from 'react';
import {View, TouchableHighlight, Text} from 'react-native';

const AddButton = ({onPressAdd}) => {
    return (
        <View>
            <TouchableHighlight style={styles.addButton}
                                        underlayColor='#ff7043' onPress={onPressAdd}>
                        <Text style={{fontSize: 25, color: 'white'}}>+</Text>
                    </TouchableHighlight>
        </View>
    );
}

const styles = {
    addButton : {
        backgroundColor: '#ff5722',
        borderColor: '#ff5722',
        borderWidth: 1,
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    }
}

export { AddButton }
