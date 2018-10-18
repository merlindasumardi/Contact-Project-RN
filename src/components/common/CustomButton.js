import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const CustomButton = ({onPressButton, children}) => {
    const {buttonStyle, textStyle} = styles;

    return (
        <View style={buttonStyle}>
            <TouchableOpacity onPress= {onPressButton}>
                <Text style={textStyle}>{children}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    buttonStyle: {
        flex: 1,
        borderRadius: 5,
        borderColor: '#007aff',
        borderWidth: 1,
        backgroundColor: '#fff',
        marginLeft: 5,
        marginRight: 5,

    },

    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}

export { CustomButton }