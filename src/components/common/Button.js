import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Button = (props) => {
    const {containerStyles, textStyles, buttonStyle} = styles;
    return (
        <View style = {containerStyles}>
            <TouchableOpacity onPress={props.onPressButton}>
                <Text style= {textStyles}>{props.children}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    containerStyles : {
        borderRadius: 5,
        flex: 1,
        backgroundColor: '#FFF'
    },

    textStyles: {
        fontSize: 14
    },

    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    }
}

export { Button };