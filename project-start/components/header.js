import React from 'react';
import {View,Text} from 'react-native';
import {globalStyles} from '../styles/global.js';

export default function Header({text}) {
    return(
        <View style={globalStyles.header}>
            <Text style={globalStyles.title}>{text}</Text>
        </View>
    );
}