import { theme } from '@/styles/globalStyles';
import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

type SearchProps = {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
}

const Search = (props: SearchProps) => {
    return (
        <TextInput 
            placeholder={props.placeholder}
            style={styles.search}
            value={props.value}
            onChangeText={props.onChangeText}
        />
    );
}

const styles = StyleSheet.create({
    search: {
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: theme.horizontalMargin,
        marginVertical: 10,
        paddingLeft: 10,
        // backgroundColor: theme.bgColor
    }
});

export default Search;